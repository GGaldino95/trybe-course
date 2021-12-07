const { expect } = require('chai');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');

const { getConnection } = require('../models/mongoMockConnection');
const MoviesModel = require('../../models/movieModel');

describe('Busca todos os filmes', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });


  after(() => {
    MongoClient.connect.restore();
  });



  describe('Quando não existe nenhum filme criado', () => {
    it('retorna uma array', async () => {
      const movies = await MoviesModel.getAll();

      expect(movies).to.be.an('array');
    });

    it('a array está vazia', async () => {
      const movies = await MoviesModel.getAll();

      expect(movies).to.be.empty;
    });
  });

  describe('Quando existem filmes cadastrados', () => {
    const expectedMovie = {
      id: '604cb554311d68f491ba5781',
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(async () => {
      await connectionMock.db('model_example').collection('movies').insertOne({ ...expectedMovie });
    });

    after(async () => {
      await connectionMock.db('model_example').collection('movies').drop();
    });

    it('retorna uma array', async () => {
      const movies = await MoviesModel.getAll();

      expect(movies).to.be.an('array');
    });

    it('a array não está vazia!', async () => {
      const movies = await MoviesModel.getAll();

      expect(movies).to.be.not.empty;
    });

    it('a array possui dados do tipo objeto', async () => {
      const [ item ] = await MoviesModel.getAll();

      expect(item).to.be.an('object');
    });

    it('tais itens possuem os atributos "id", "title", "directedBy", "releaseYear"', async () => {
      const [ item ] = await MoviesModel.getAll();

      expect(item).to.include.all.keys(['id', 'title', 'directedBy', 'releaseYear']);
    });

    it('o filme cadastrado está na lista', async () => {
      const [ { id, title, directedBy, releaseYear } ] = await MoviesModel.getAll();

      expect({ id, title, directedBy, releaseYear }).to.deep.equal(expectedMovie);
    });
  });
});
