const { getUserName } = require('./usersDatabase');

describe('Testing getUserName() function with async/await', () => {
    it('Should return a username', async () => {
        expect.assertions(1);
        await expect(getUserName(4)).resolves.toEqual('Mark');
    });
    it('Should return an error', async () => {
        expect.assertions(1);
        try {
            await getUserName(2);
        } catch (error) {
            expect(error).toEqual({ error: 'User with 2 not found.' });
        }
    });
});