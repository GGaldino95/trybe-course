const promise = new Promise((resolve, reject) => {
    const array = [];
    for (let i = 0; i < 10; i += 1) {
        array.push(Math.floor(Math.random() * 51));
    }

    const output = array.reduce((result, number) => result + Math.pow(number, 2));
    return output > 8000 ? resolve() : reject();
})
    .then()
    .catch();