const { getUserName } = require('./usersDatabase');

describe('Testing getUserName() function', () => {
    it('Should return a username', () => {
        expect.assertions(1);
        return expect(getUserName(4)).resolves.toEqual('Mark');
    });
    it('Should return an error', () => {
        expect.assertions(1);
        return getUserName(2).catch(error => expect(error).toEqual({ error: 'User with 2 not found.' }));
    });
});