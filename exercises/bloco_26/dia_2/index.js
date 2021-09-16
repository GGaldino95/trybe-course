// Exercicio 01
const doMath = (a, b, c) => (
  new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      reject('Informe apenas números');

    const result = (a + b) * c;

    if (result < 50) return reject('Valor muito baixo');

    resolve(result);
  })
);

doMath(10, 10, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error));

doMath(1, 1, 'a')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error));

doMath(1, 1, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error));

// Exercicio 02
const getRandomNumber = () => Math.floor(Math.random() * 100 + 1);

/* .THEN E .CATCH
const callDoMath = () => {
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  doMath(...randomNumbers)
    .then(result => console.log(result))
    .catch(err => console.error(err.message));
};
*/

// Exercicio 03
// ASYNC/AWAIT
const callDoMath = () => {
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  try {
    const result = await doMath(...randomNumbers);
    console.log(result);
  } catch (err) {
    console.error(err);
  };
};

// Exercicio 04
const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => JSON.parse(fileContent))
  .then((simpsons) => simpsons.map(({ id, name }) => `${id} - ${name}`))
  .then((strings) => strings.forEach((string) => console.log(string)));

const getSimpsonById = async (id) => {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const chosenSimpson = simpsons.find((simpson) => simpson.id === id);

  if (!chosenSimpson) throw new Error('id não encontrado');

  return chosenSimpson;
};

const filterSimpsons = async () => {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const newArray = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
};

const createSimpsonsFamily = async () => {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const simpsonsFamily = simpsons.filter(simpson => [1, 2, 3, 4].includes(simpson.id));
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
};

const addNelsonToFamily = async () => {
  const simpsonsFamily = await fs
    .readFile('./simpsonsFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  simpsonsFamily.push({ "id": "8", "name": "Nelson Muntz" });
  await fs.writeFile('./simpsonsFamily.json', simpsonsFamily);
};

const replaceNelson = () => (
  fs.readFile('./simpsonsFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent))
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
    .then((simpsonsWithoutNelson) => simpsonsWithoutNelson
      .concat([{ id: '8', name: 'Maggie Simpson' }]))
    .then((simpsonsWithMaggie) =>
      fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie)))
);

// Exercicio 05
const arrayToFile = () => {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const createFilePromises = strings.map((string, index) =>
    fs.writeFile(`./file${index + 1}.txt`, string)
  );

  await Promise.all(createFilePromises);

  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const fileContents = await Promise.all(
    fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'))
  );

  const newFileContent = fileContents.join(' ');

  await fs.writeFile('./fileAll.txt', newFileContent);
};