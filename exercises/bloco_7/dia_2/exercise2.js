const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const addShift = (obj, newKey, value) => {
    obj[newKey] = value;
    console.log(obj);
}

const listKeys = obj => console.log(`Chaves do objeto: ${Object.keys(obj)}`);

const showObjSize = obj => console.log(`Tamanho do objeto: ${Object.keys(obj).length}`);

const showObjValues = obj => console.log(`Valores do objeto: ${Object.values(obj)}`);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

addShift(lesson2, 'turno', 'manhã');
listKeys(lesson1);
showObjSize(lesson1);
showObjValues(lesson1);
console.log(allLessons);