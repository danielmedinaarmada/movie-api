const assert = require('assert');
const { send } = require('process');
const proxyquire = require('proxyquire');

const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('routes - movies', function () {
  const route = proxyquire('../routes/movies', {
    '../services/movies': MoviesServiceMock
  });

  const request = testServer(route);

  describe('GET /movies', function () {
    it('should respond with status 200', function (done) {
      request.get('/api/movies').expect(200, done);
    });

    it('should respond with the list of movies ', function (done) {
      request.get('/api/movies').end((err, res) => {
        assert.deepStrictEqual(res.body, {
          data: moviesMock,
          message: 'movies listed'
        });
        done();
      });
    });

    it('should response request movie', function (done) {
      const movieMockId = "7d3b34e3d5a8413e90a36408";
      request.get(`/api/movies/${movieMockId}`).end((err, res) => {
        assert.deepStrictEqual(res.body, {
          data: moviesMock[0],
          message: "movie retrieved"
        });
        done();
      });
    });
  });

  describe('POST /movie', function () {
    it('should respond with status 201', function (done) {
      request.post('/api/movies').expect(201, done);
    });

    it('should respond with the movie id created', function (done) {
      request
        .post('/api/movies')
        .send(moviesMock[0])
        .end((err, res) => {
          assert.deepStrictEqual(res.body, {
            data: moviesMock[0].id,
            message: "movie created"
          });
          done();
        });
    });
  });


  describe('PUT /movie', function () {
    const movieMockId = "7d3b34e3d5a8413e90a36408";
    it('should respond with status 200', function (done) {
      request.put(`/api/movies/${movieMockId}`).expect(200, done);
    })

    it('should respond with movie update', function (done) {
      request
        .put(`/api/movies/${movieMockId}`)
        .send(moviesMock[0])
        .end((err, res) => {
          assert.deepStrictEqual(res.body, {
            data: moviesMock[0],
            message: 'movie updated'
          });
          done();
        });
    });
  });


  describe('DELETE /movie', function () {
    const movieMockId = '7d3b34e3d5a8413e90a36408';
    it('should respond with status 200', function (done) {
      request.delete(`/api/movies/${movieMockId}`).expect(200, done);
    });
    it('should respond with movie delete', function (done) {
      request
        .delete(`/api/movies/${movieMockId}`)
        .send(moviesMock[0])
        .end((err, res) => {
          assert.deepStrictEqual(res.body, {
            data: moviesMock[0],
            message: 'movie deleted'
          });
          done();
        });
    });
  });


  describe('PATCH /movie', function () {
    const movieMockId = '7d3b34e3d5a8413e90a36408';
    it('should repond with status 200', function (done) {
      request.patch(`/api/movies/${movieMockId}`).expect(200, done);
    });

    it('should respond with movie patch', function (done) {
      request
        .patch(`/api/movies/${movieMockId}`)
        .send(moviesMock[0])
        .end((err, res) => {
          assert.deepStrictEqual(res.body, {
            data: moviesMock[0],
            message: 'movie modified'
          });
          done();
        });
    });

  });

});
