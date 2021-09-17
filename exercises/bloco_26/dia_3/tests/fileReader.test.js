const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const fileReader = require('../fileReader');

describe('Function fileReader()', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('the answer', () => {
    it('is a string', () => {
      const resposta = fileReader('arquivo.txt', '#vqv conteúdo');
      expect(resposta).to.be.a('string');
    });

    it('equals "ok"', () => {
      const resposta = fileReader('arquivo.txt', '#vqv conteúdo');
      expect(resposta).to.be.equals('ok');
    });
  });
});