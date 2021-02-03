const API_URL = 'https://icanhazdadjoke.com/';

const createJoke = (data) => {
    const jokeContainer = document.querySelector('h2#jokeContainer');
    const newJoke = document.createElement('span');
    newJoke.innerText = data.joke;
    jokeContainer.appendChild(newJoke);
};

const fetchJoke = () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };

    fetch(API_URL, myObject)
        .then(response => response.json())
        .then(data => createJoke(data));
};

window.onload = () => fetchJoke();