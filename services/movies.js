//removemos los mocks
//const { moviesMock } = require("../utils/mocks/movies");

//importamos mongo
const MongoLib = require('../lib/mongo');

//ahora debe de resolver la promera con el método moviesMock, es resolver con nuestra instancia de mongo, pero para esto en el constructor de nuestro servicio, implementemos los atributos, estos van hacer la coleccion (que lo agrego en this.colletion que en este caso va a hacer la colecion de movies) y luego el atributo this.mongoDB vamos a instanciar nuestra libreria MongoLib().

//ahora si podemos llamar, a nuestra instancia de la libretia mongoDB y llamar al método getAll que implementamos, este método recibe una coleccion y un query que vamos a construir. Este query va hacer el query de los tags, va a servir para filtrar ls query por tags, recibiendo estos tags de la ruta

class MoviesService {

  constructor() {
    this.collection = 'movies';
    this.mongoDB = new MongoLib();
  }

  //devolver la lista de pelucilas si viene vacio, ponemos un array
  async getMovies({ tags }) {
    //recibiendo los tags de la ruta, determinamos el query, si existen los tags entoces contruimos el siguiente query que va hacer los tags que enten dentro de los tags que estemos pasando
    const query = tags && { tags: { $in: tags } }
    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || []; //revolvemos un array si es null
  }

  //una sola movie

  //ahora para recibir una pelicula debemos pasarle el movieId, y debe de resolver con los mock vamos a resolver con nuestra libreria de mongo
  async getMovie({ movieId }) {
    const movie = await this.mongoDB.get(this.collection, movieId);
    return movie || {}; // devolvermos un objeto vacio
  }

  //created movie
  //Para crear pelicula es muy similar, recibimos la movie, cambiamos el mock por la libreria de mongoDB
  async createMovie({ movie }) {
    const createMovieId = await this.mongoDB.create(this.collection, movie);
    return createMovieId;
  }

  //updated movie
  // ahora bien para actualizar la pelicula, no solo debemso recibir los datos de la pelicula sino tambien el id, por defecto es un onjeto vacio, para que no tengamos problemas y de nuevo quitamos el mock y ponemos nuestra libria de conection a la bd
  async updateMovie({ movieId, movie } = {}) {
    const updatedMovieId = await this.mongoDB.update(this.collection, movieId, movie);
    return updatedMovieId;
  }

  //eliminar la movie
  async deleteMovie({ movieId }) {
    const deletedMovieId = await this.mongoDB.delete(this.collection, movieId);
    return deletedMovieId;
  }

  //patch movie
  async patchOneMovie({ movieId, movie }) {
    const patchMovieId = await this.mongoDB.patch(this.collection, movieId, movie);
    return patchMovieId;
  }
}

module.exports = MoviesService;