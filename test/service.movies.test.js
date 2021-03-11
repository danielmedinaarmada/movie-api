const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  MongoLibMock,
  getAllStub,
  getStub,
  createStub,
  updateStub,
  deleteStub,
  patchStub
} = require('../utils/mocks/mongoLib');

const { moviesMock, filteredMoviesMock } = require('../utils/mocks/movies');

describe('services - movies', function () {
  const MoviesServices = proxyquire('../services/movies', {
    '../lib/mongo': MongoLibMock,
  });

  const moviesService = new MoviesServices();

  describe('when getMovies method is called', async function () {
    it('should call the getall MongoLib method', async function () {
      await moviesService.getMovies({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of movies', async function () {
      const result = await moviesService.getMovies({});
      const expected = moviesMock;
      assert.deepStrictEqual(result, expected);
    });

    it('should return an object of movie filtered', async function () {
      const result = await moviesService.getMovies({ tags: 'Drama' });
      const expect = filteredMoviesMock('Drama');
      assert.deepStrictEqual(result, expect);
    });
  });

  describe('when getMovie method is called', async function () {
    it('should call the get MongoLib method', async function () {
      await moviesService.getMovie({});
      assert.strictEqual(getStub.called, true);
    });

    it('should return requested of movie', async function () {
      const movieMockId = '7d3b34e3d5a8413e90a36408';
      const result = await moviesService.getMovie({ movieId: movieMockId });
      const expect = moviesMock[0];
      assert.deepStrictEqual(result, expect);
    })
  });

  describe('when createMovie method is called', async function () {
    it('should call the create MongoLib method', async function () {
      await moviesService.createMovie({});
      assert.strictEqual(createStub.called, true);
    });

    it('should return an id of movie created', async function () {
      const resultId = await moviesService.createMovie({});
      const expect = moviesMock[0].id;
      assert.strictEqual(resultId, expect);
    });
  });

  describe('when updateMovie method is called', async function () {
    it('should call update MongoLib method', async function () {
      await moviesService.updateMovie({});
      assert.strictEqual(updateStub.called, true);
    });

    it('should returned and id to updated', async function () {
      const movieMockId = '7d3b34e3d5a8413e90a36408';
      const resultId = await moviesService.updateMovie({
        movieId: movieMockId,
        movie: {}
      });
      const expect = moviesMock[0].id;
      assert.strictEqual(resultId, expect);
    });
  });

  describe('when deleteMovie is called', async function () {
    it('should call delete MongoLib method', async function () {
      await moviesService.deleteMovie({});
      assert.strictEqual(deleteStub.called, true);
    });

    it('should return and id movie deleted', async function(){
      const movieMockId = '7d3b34e3d5a8413e90a36408';
      const resultId = await moviesService.deleteMovie({ 
        movieId: movieMockId,
        movie: {}
      });
      const expect = moviesMock[0].id;
      assert.strictEqual(resultId, expect);
    });
  });


  describe('when patchOneMovie is called', async function(){
    it('should call patch MongoLib method', async function(){
      await moviesService.patchOneMovie({});
      assert.strictEqual(patchStub.called, true);
    });

    it('should return and id movie patch movie', async function(){
      const movieMockId = '7d3b34e3d5a8413e90a36408';
      const resultId = await moviesService.patchOneMovie({
        movieId: movieMockId,
        movie: {}
      });
      const expect = moviesMock[0].id;
      assert.strictEqual(resultId, expect);
    });

  });


});
