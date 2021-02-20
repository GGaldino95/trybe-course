const service = require('./exercise');

describe('Function randomNumber - Task 1', () => {
    test("Mocking function to receive the number 10", () => {
        service.randomNumber = jest.fn().mockReturnValue(10);

        expect(service.randomNumber()).toBe(10);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
    });
});

describe('Function randomNumber - Task 2', () => {
    test("Mocking function to divide 2 numbers", () => {
        service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

        expect(service.randomNumber(10, 2)).toBe(5);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
        expect(service.randomNumber).toHaveBeenCalledWith(10, 2);
    });
});

describe('Function randomNumber - Task 3', () => {
    test("Mocking function to multiply 3 numbers", () => {
        service.randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);

        expect(service.randomNumber(2, 3, 4)).toBe(24);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
        expect(service.randomNumber).toHaveBeenCalledWith(2, 3, 4);
    });

    test("Mocking function to double a number", () => {
        service.randomNumber.mockReset();
        service.randomNumber.mockImplementationOnce(a => a * 2);

        expect(service.randomNumber(5)).toBe(10);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
        expect(service.randomNumber).toHaveBeenCalledWith(5);
    });
});