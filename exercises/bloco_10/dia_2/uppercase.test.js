const uppercase = require('./uppercase');

describe('uppercase() testing:', () => {
    it('should return "HELLO WORLD"', done => {
        uppercase('hello world', (string) => {
            expect(string).toBe('HELLO WORLD');
            done();
        });
    });
});