const randomNumber = () => Math.floor(Math.random() * (100 - 0) + 0);

const upperCase = string => string.toUpperCase();

const firstLetter = string => string[0];

const concatenate = (string1, string2) => `${string1} ${string2}`;

module.exports = { randomNumber, upperCase, firstLetter, concatenate };