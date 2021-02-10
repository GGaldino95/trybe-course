const getAnimal = require('./animalDatabase');

describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
        test('Retorne o objeto do animal', () => {
            expect.assertions(1);
            return getAnimal('Dorminhoco').then(animal => {
                expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
            });
        });
    });

    describe('Quando não existe o animal com o nome procurado', () => {
        test('Retorna um erro', () => {
            expect.assertions(1);
            return getAnimal('Bob').catch(error =>
                expect(error).toEqual('Nenhum animal com esse nome!')
            );
        });
    });
});

describe('Testando promise - findAnimalByAge', () => {
    describe('Quando existe(m) o(s) animal(is) com a(s) idade(s) indicada(s)', () => {
        it('Deve retornar um array de objetos com os animais de idade equivalente', () => {
            expect.assertions(1);
            return getAnimal(5).then(animal => {
                expect(animal).toEqual([ { name: 'Preguiça', age: 5, type: 'Cat' } ]);
            });
        });
    });

    describe('Quando não existe(m) o(s) animal(is) com a(s) idade(s) indicada(s)', () => {
        it('Deve retornar um erro', () => {
            expect.assertions(1);
            return getAnimal(4).catch(error => 
                expect(error).toEqual('Nenhum animal com essa idade!'));
        });
    });
});