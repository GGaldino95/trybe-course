const sinon = require('sinon');
const { expect } = require('chai');
const MovieModel = require('../../models/movieModel');
const MovieService = require('../../services/movieService');

describe('Busca um filme através do ID', () => {
  describe('quando não é encontrado um filme para o ID', () => {
    before(() => {
      sinon.stub(MovieModel, 'findById')
        .resolves(null);
    });

    after(() => {
      MovieModel.findById.restore();
    });

    it('retorna "null"', async () => {
      const response = await MovieService.findById();

      expect(response).to.be.null;
    });
  });

  describe('quando é encontrado o filme para o ID', () => {
    before(() => {
      sinon.stub(MovieModel, 'findById')
        .resolves({
          id: '604cb554311d68f491ba5781',
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        });
    });

    after(() => {
      MovieModel.findById.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MovieService.findById();

      expect(response).to.be.an('object');
    });

    it('o objeto possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const response = await MovieService.findById();

      expect(response).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy')
    });
  });
});
