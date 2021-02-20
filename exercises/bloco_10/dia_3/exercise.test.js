const service = require('./exercise');
jest.mock(`./exercise.js`);

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

describe('Functions toUpper, firstLetter and concatenate - Task 4', () => {
    test("Mocking toUpper to return a lowerCase string", () => {
        service.upperCase.mockImplementation(string => string.toLowerCase());

        expect(service.upperCase('Hello World! HI')).toBe('hello world! hi');
        expect(service.upperCase).toHaveBeenCalled();
        expect(service.upperCase).toHaveBeenCalledTimes(1);
        expect(service.upperCase).toHaveBeenCalledWith('Hello World! HI');
    });

    test("Mocking firstLetter to return the last letter", () => {
        service.firstLetter.mockImplementation(string => string[string.length - 1]);

        expect(service.firstLetter('Hello World')).toMatch('d');
        expect(service.firstLetter).toHaveBeenCalled();
        expect(service.firstLetter).toHaveBeenCalledTimes(1);
        expect(service.firstLetter).toHaveBeenCalledWith('Hello World');
    });

    test("Mocking concatenate to return a string from three parameters", () => {
        service.concatenate.mockImplementation((string1, string2, string3) =>  `${string1} ${string2} ${string3}`);

        expect(service.concatenate('Hello', 'Beautiful', 'World')).toMatch('Hello Beautiful World');
        expect(service.concatenate).toHaveBeenCalled();
        expect(service.concatenate).toHaveBeenCalledTimes(1);
        expect(service.concatenate).toHaveBeenCalledWith('Hello', 'Beautiful', 'World');
    });
});