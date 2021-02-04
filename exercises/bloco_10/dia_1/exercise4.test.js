const hydrate = require('./exercise4');

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toMatch('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toMatch('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toMatch('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toMatch('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toMatch('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toMatch('6 copos de água');
  });
});