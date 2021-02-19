const { encode, decode } = require('./exercise2');

describe('Playground Functions encode() and decode() tests', () => {
    test('Checking if encode() and decode() are functions', () => expect(typeof encode && typeof decode).toStrictEqual('function'));
    test('encode(): Checking if "a, e, i, o, u" are changed to "1, 2, 3, 4, 5", respectively', () => expect(encode('testing a function')).toMatch('t2st3ng 1 f5nct34n'));
    test('decode(): Checking if "1, 2, 3, 4, 5" are changed to "a, e, i, o, u", respectively', () => expect(decode('t2st3ng 1 f5nct34n')).toMatch('testing a function'));
    test('Cheking if consonants are not changed in the encode() and decode() returns', () => expect(encode('bcdfghjklmnpqrstvwxyz')).toMatch('bcdfghjklmnpqrstvwxyz'));
    test('Checking if the String returns with same length on encode() and decode()', () => expect(decode('t2st3ng 1 f5nct34n').length).toBe(18));
});