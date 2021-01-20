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

const listKeys = obj => console.log(`\nChaves do objeto: ${Object.keys(obj)}\n`);

const showObjSize = obj => console.log(`Tamanho do objeto: ${Object.keys(obj).length}\n`);

const showObjValues = obj => console.log(`Valores do objeto: ${Object.values(obj)}\n`);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const getNumberOfStudents = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (let index in array) {
        total += obj[array[index]].numeroEstudantes;
    }
    console.log(`\nTotal de alunos em todas as turmas: ${total}\n`);
};

const getValueByNumber = (obj, number) => console.log(`Valor da chavede acordo com a posicao: ${Object.values(obj)[number]}`);

const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let index in arr) {
        if (arr[index][0] === key && arr[index][1] === value) 
            isEqual = true;
    }
    console.log(`\nA chave e valor sao existentes? ${isEqual}`);
};



addShift(lesson2, 'turno', 'manhã');
listKeys(lesson1);
showObjSize(lesson1);
showObjValues(lesson1);
console.log(allLessons);
getNumberOfStudents(allLessons);
getValueByNumber(2);
verifyPair(lesson2, 'professor', 'Carlos');