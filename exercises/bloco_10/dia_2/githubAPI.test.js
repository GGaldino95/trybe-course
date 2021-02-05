const getRepos = require('./githubAPI');

describe('Testing GitHub API fetch', () => {
    describe('In case we find the user', () => {
        it('should return repositories', async () => {
            expect.assertions(1);
            await expect(getRepos('https://api.github.com/orgs/tryber/repos')).resolves.toContain('sd-01-week4-5-project-todo-list', 'sd-01-week4-5-project-meme-generator');
        });
    });
});