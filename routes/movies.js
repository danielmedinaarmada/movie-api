const express = require('express');
//mocks  archivos con datos falsos o de prueba
//Eliminamos mock para implementar capara de servicios
//const { moviesMock } = require('../utils/mocks/movies');
const MoviesService = require('../services/movies');
const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema
} = require('../utils/schema/movies');

const validationHandler = require('../utils/middleware/validationHandler');

//es crear un Function, va a recibir una aplicacion de express lo que nos permite es ser dinamicos y tener el control sobre que aplicación va a consumir nuestras rutas 
function moviesApi(app) {
  //creamos el router, usando express. router
  const router = express.Router();
  //y le decimos a la aplicacion que le vamos a pasar como parametros que en la ruta de inicio /api/movies va a utilizar este router
  app.use("/api/movies", router);
  //apartir de aquí lo que hago es alimentar el router con las otras rutas
  //cuando hagamos un get al home, en este caso el home va a ser (/api/movies), va a devolver las péliculas, como estamos escribiendo código asincrono, voy a usar la palabra clave, async function, y recuerden que una ruta recibe el request, el response y en este caso vamos a recibir la funcionalidad next, esto hace parte de toda la teoria midelware, que veremos más adelante, como es codigo asincrono, hacemos un try y catch.
  //Cuando hacemos el try - catch y recibimos el error, la manera como le decimos a express que haga error, es llamando next() pero esta vez con el error. 

  //aqui vamos a implementar nuestra campa de servicio
  const moviesService = new MoviesService();

  router.get("/", async function (req, res, next) {
    const { tags } = req.query;
    try {
      //como este código es simplemente un array, debemos envolverlo en una promesa, para que podamos hacer uso de nuestro código asincrono mendiante la palabra await, en este caso vamos a resolver con el moviesMock 
      //y lo que hacemos es responder con el response, definimos con el estatus y definimos que su respuesta json con esta estructura.
      //ahora con el services, debe de devolver el Promise.resolve del mock, ahora lo que vamos a devolver es el servicio.getMovies y de una vez voy a empezar a implementar que es lo que ella recibe, nosotros vamos a filtrar por unos tag
      const movies = await moviesService.getMovies({ tags });
      //throw new Error('Error getting movies');
      //Teniendo esta ruta definida lo que falta es exportarla. aqui solo estamos definiendo la ruta, pero todavía no la estamos usando en nuestra aplicacion de express. 
      //la exportamos y nos vamos a nuestro archivo index.js en /movies-api, comentamos las rutas de ejmplo que creamos con anterioridad.
      res.status(200).json({
        data: movies,
        message: 'movies listed'
      })
    } catch (err) {
      next(err);
    }
  });

  //listar una pelicula
  router.get("/:movieId", validationHandler({ movieId: movieIdSchema }, "params"), async function (req, res, next) {
    const { movieId } = req.params;
    try {
      const movie = await moviesService.getMovie({ movieId });
      //lo que vamos hacer es debe de devolver la colecciones de películas vamos a devolver la primera movie
      res.status(200).json({
        data: movie,
        message: 'movie retrieved'
      })
    } catch (err) {
      next(err)
    }
  });

  //post - creación de las películas
  router.post("/", validationHandler(createMovieSchema), async function (req, res, next) {
    const { body: movie } = req;
    try {
      const createdMovieId = await moviesService.createMovie({ movie });
      //en este caso va a recibir la pelicula, mas adelante cuando veamos la implementacion de servicios, vamos a verf como podemos enviar la pelicula, obtenr los ids, etc...
      //En este caso lo que voy hacer es devolver el id de la primera movie
      res.status(201).json({
        data: createdMovieId,
        message: 'movie created'
      })
    } catch (err) {
      next(err)
    }
  });

  //put - actualización de la película
  router.put("/:movieId", validationHandler({ movieId: movieIdSchema }, "params"), validationHandler(updateMovieSchema), async function (req, res, next) {
    const { movieId } = req.params;
    const { body: movie } = req;
    try {
      const updatedMovieId = await moviesService.updateMovie({ movieId, movie });
      //Lo que vamos hacer es reciir el id de la película que actualizo
      res.status(200).json({
        data: updatedMovieId,
        message: 'movie updated'
      })
    } catch (err) {
      next(err)
    }
  });

  //delete
  router.delete("/:movieId", validationHandler({ movieId: movieIdSchema }, "params"), async function (req, res, next) {
    const { movieId } = req.params;
    try {
      const deletedMovieId = await moviesService.deleteMovie({ movieId });
      //Lo que vamos hacer es reciir el id de la película que actualizo
      res.status(200).json({
        data: deletedMovieId,
        message: 'movie deleted'
      })
    } catch (err) {
      next(err)
    }
  });


  //actualizar movie con patch 

  router.patch("/:movieId", async function (req, res, next) {
    const { movieId } = req.params;
    const { body: movie } = req;
    try {
      const movieModified = await moviesService.patchOneMovie({ movieId, movie });
      //Lo que vamos hacer es reciir el id de la película que actualizo
      res.status(200).json({
        data: movieModified,
        message: 'movie modified'
      })
    } catch (err) {
      next(err)
    }
  });
}

module.exports = moviesApi;

// con esto es suficiente pero debemos crear nuestro archivo de mock