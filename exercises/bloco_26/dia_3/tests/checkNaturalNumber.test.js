const { expect } = require('chai');

const checkNaturalNumber = require('../checkNaturalNumber');

describe('Function checkNaturalNumber()', () => {
  describe('when the number is greater than 0', () => {
    describe('the answer', () => {
      it('is a string', () => {
        const resposta = checkNaturalNumber(10);
        expect(resposta).to.be.a('string');
      });

      it('equals "positivo"', () => {
        const resposta = checkNaturalNumber(10);
        expect(resposta).to.be.equals('positivo');
      });
    });
  });

  describe('when the number is lower than 0', () => {
    describe('the answer', () => {
      it('is a string', () => {
        const resposta = checkNaturalNumber(-10);
        expect(resposta).to.be.a('string');
      });

      it('equals "negativo"', () => {
        const resposta = checkNaturalNumber(-10);
        expect(resposta).to.be.equals('negativo');
      });
    });
  });

  describe('when the number equals 0', () => {
    describe('the answer', () => {
      it('is a string', () => {
        const resposta = checkNaturalNumber(0);
        expect(resposta).to.be.a('string');
      });

      it('equals "neutro"', () => {
        const resposta = checkNaturalNumber(0);
        expect(resposta).to.be.equals('neutro');
      });
    });
  });
});

describe('when the parameter is not a number', () => {
  describe('the answer', () => {
    it('is a string', () => {
      const resposta = checkNaturalNumber('a');
      expect(resposta).to.be.a('string');
    });

    it('equals "o parâmetro deve ser um número"', () => {
      const resposta = checkNaturalNumber('a');
      expect(resposta).to.be.equals('o parâmetro deve ser um número');
    });
  });
});