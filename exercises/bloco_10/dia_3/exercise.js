const randomNumber = () => Math.floor(Math.random() * (100 - 0) + 0);

const upperCase = string => string.toUpperCase();

const firstLetter = string => string[0];

const concatenate = (string1, string2) => `${string1} ${string2}`;

function fetchDog() {
    return fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json()
            .then(json => response.ok ? Promise.resolve(json) : Promise.reject(json))
        );
}

module.exports = { randomNumber, upperCase, firstLetter, concatenate, fetchDog };