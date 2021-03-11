const express = require('express');
const app = express();
/*const bodyParser = require('body-parser');
const multer = require('multer');
const opload = multer(); // para los datos tipo multipart/form-data
*/
const { config } = require('./config/index');

const debug = require("debug")("app:server");

const moviesApi = require('./routes/movies');
//como es una función debenemos ejecutarla y le pasamso nuestra app de express

//middleware de error
const { 
    logErrors,
    wrapErrors,
    errorHandler 
} = require('./utils/middleware/errorHandlers');

//not found
const notFoundHandler = require('./utils/middleware/notFoundHandler');

//si intentamos crear una movie, nos va a dar un error, por que el todavía no sabe leer los datos que le estamos pasando, por defecto express necesita parsear estos datos json, entonces la manera de corregirlo es agregando un middleware a express
//body parser
app.use(express.json());

moviesApi(app);

//catch 404
app.use(notFoundHandler);
/*
app.get('/', function (req, res) {
    res.send('Hola Danny');
});

//queryParams
app.get('/queryParams/:nombre', function(req, res) {
    res.send('Hola mi nombre es: '+ req.params.nombre)
})

//req.body
app.use(bodyParser.json()); // para datos tipo application/json
app.use(body.bodyParser.urlencoded({entended:true}));  // para los datos tpo applicaction/x-www-form-orlencoded

app.post("/profile", function(req, res){
    console.log(req.body);
    res.json(req.body);
})
*/

//Erros middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
    debug(`Listening in http://localhost:${config.port}`);
})


