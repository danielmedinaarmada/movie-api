const sinon = require('sinon');
const { moviesMock, findOneMovieMock, filteredMoviesMock } = require('./movies');

const getAllStub = sinon.stub();

const getStub = sinon.stub();

const createStub = sinon.stub().resolves(moviesMock[0].id);

const updateStub = sinon.stub().resolves(moviesMock[0].id);

const deleteStub = sinon.stub().resolves(moviesMock[0].id);

const patchStub = sinon.stub().resolves(moviesMock[0].id);

class MongoLibMock {
  getAll(collection, query) {
    if (!query) {
      getAllStub.withArgs('movies').resolves(moviesMock);
    } else {
      getAllStub.withArgs('movies', query).resolves(filteredMoviesMock(query.tags.$in));
    }
    return getAllStub(collection, query);
  }

  get(collection, movieId) {
    getStub.withArgs('movies', movieId).resolves(findOneMovieMock(movieId));
    return getStub(collection, movieId);
  }

  create(collection, data) {
    return createStub(collection, data);
  }

  update(collection, movieId, data) {
    return updateStub(collection, movieId, data);
  }

  delete(collection, movieId) {
    return deleteStub(collection, movieId);
  }

  patch(collection, movieId, data) {
    return patchStub(collection, movieId, data);
  }

}

module.exports = {
  getAllStub,
  getStub,
  createStub,
  updateStub,
  deleteStub,
  patchStub,
  MongoLibMock
};