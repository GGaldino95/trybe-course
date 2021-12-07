const sinon = require('sinon');
const { expect } = require('chai');
/* vamos importar o MongoClient e o mock da conexão que criamos anteriormente. */
const { MongoClient } = require('mongodb');
const { getConnection } = require('./mongoMockConnection');


/* Vamos importar o módulo responsável para abrir a conexão nos nossos models para poder fazer o seu `double`.*/
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  /* Vamos deixar o objeto com o mock da conexão como uma variável global dentro desse describe. */
  let connectionMock; 


  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

      /* Aqui atualizamos o código para usar o banco montado pela lib `mongo-memory-server` */
      before(async () => {
        connectionMock = await getConnection();
        sinon.stub(MongoClient, 'connect').resolves(connectionMock);
      });

      /* Restauraremos a função `connect` original após os testes. */
      after(async () => {
        await connectionMock.db('model_example').collection('movies').drop();
        MongoClient.connect.restore();
      });

  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });
    /* Aqui de fato estamos testando se o filme foi cadastrado após chamar a função `create`.
    Para isso fizemos uma consulta para o banco para checar se existe um filme com o título cadastrado */
    it('deve existir um filme com o título cadastrado!', async () => {
      await MoviesModel.create(payloadMovie);
      const movieCreated = await connectionMock
      .db('model_example')
      .collection('movies')
      .findOne({ title: payloadMovie.title });
      expect(movieCreated).to.be.not.null;
    });
});
});
