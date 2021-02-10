const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const output = Animals.find(currentAnimal => currentAnimal.name === name);
            return output ? resolve(output) : reject('Nenhum animal com esse nome!');
        }, 100);
    })
);

const findAnimalByAge = age => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const output = Animals.filter(currentAnimal => currentAnimal.age === age);
            return output.length !== 0 ? resolve(output) : reject('Nenhum animal com essa idade!');
        }, 100);
    })
);

const getAnimal = input => {
    return isNaN(input) ? findAnimalByName(input).then(animal => animal) : findAnimalByAge(input).then(animal => animal);
};

module.exports = getAnimal;