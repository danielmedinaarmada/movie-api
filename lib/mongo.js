const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config/index');

const debug = require("debug")("app:db");

//encodeURIComponent, es una funcionalidadde si hay caracteres especiales no tengamos problemas al conectarnos
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

//Para conectarme a mongo atlas en la nube
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;
//Para conectar a mongo local de mi pc, sin autentication de usuario
//const MONGO_URI = `mongodb://${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
  constructor() {
    //que use el nuevo sistema de paseo url, useNewUrlParser, para tener la úlltima configuración
    this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    this.dbName = DB_NAME;
  }

  connect() {
    //patrón siglenton
    //MongoLib.connection no esta definida dentro de clase, funciona como una variable estatica
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect(err => {
          if (err) {
            reject(err)
          }

          debug('Connected succesfully to mongo');
          resolve(this.client.db(this.dbName));
        })
      })
    }

    return MongoLib.connection;
  }

  //Aqui implemetamos las acciones CRUD

  //el método connect como es una promesa nos devuelve una instancia de la BD y esa instancia tiene los metodos de mongo
  getAll(collection, query) {
    return this.connect().then(db => {
      return db.collection(collection).find(query).toArray();
    })
  }

  get(collection, id) {
    return this.connect().then(db => {
      return db.collection(collection).findOne({ _id: ObjectId(id) });
    })
  }

  //la unica diferecia entre los métodos es que en create, update y delete, devolvemos el id
  create(collection, data) {
    return this.connect().then(db => {
      return db.collection(collection).insertOne(data);
    }).then(result => result.insertedId)
  }

  //upsert, determinar si actualiza o inserta, es como una combinacion entre insert y upsert
  update(collection, id, data) {
    return this.connect().then(db => {
      return db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
    }).then(result => result.upsertedId || id);
  }

  delete(collection, id) {
    return this.connect().then(db => {
      return db.collection(collection).deleteOne({ _id: ObjectId(id) });
    }).then(() => id)
  }

  patch(collection, id, data) {
    return this.connect().then(db => {
      return db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: data });
    }).then(result => result.upsertedId || id);
  }
}

module.exports = MongoLib;