const service = require('./exercise');

describe('Function randomNumber', () => {
    test("Mocking function to receive the number 10", () => {
        service.randomNumber = jest.fn().mockReturnValue(10);

        expect(service.randomNumber()).toBe(10);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
      });
})