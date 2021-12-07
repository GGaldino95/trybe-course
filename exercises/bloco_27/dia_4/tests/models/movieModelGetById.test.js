const { expect } = require('chai');
const sinon = require('sinon');
const { MongoClient, ObjectId } = require('mongodb');

const { getConnection } = require('../models/mongoMockConnection');
const MovieModel = require('../../models/movieModel');

describe('Busca apenas um filme no BD através do ID', () => {
  let connectionMock;

  const ID_EXAMPLE = '604cb554311d68f491ba5781';

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async() => {
    MongoClient.connect.restore();
  });

  describe('quando não existe um filme para o ID informado', () => {
    it('retorna "null"', async () => {
      const response = await MovieModel.findById(ID_EXAMPLE);
      console.log(response)
      expect(response).to.be.equal(null);
    });
  });

  describe('quando existe um filme para o ID informado', () => {
    before(async () => {
      const moviesCollection = await connectionMock;
      await moviesCollection.db('model_example').collection('movies').insertOne({
        _id: ObjectId(ID_EXAMPLE),
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      });
    });

    after(async() => {
      await connectionMock.db('model_example').collection('movies').drop();
    });

    it('retorna um objeto', async () => {
      const response = await MovieModel.findById(ID_EXAMPLE);

      expect(response).to.be.a('object');
    });

    it('o objeto possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const response = await MovieModel.findById(ID_EXAMPLE);

      expect(response).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
    });
  });
});
