const allLessons = {
    lesson1: {
        materia: 'Matemática',
        numeroEstudantes: 20,
        professor: 'Maria Clara',
        turno: 'manhã'
    },
    lesson2: {
        materia: 'História',
        numeroEstudantes: 20,
        professor: 'Carlos',
        turno: 'manhã'
    },
    lesson3: {
        materia: 'Matemática',
        numeroEstudantes: 10,
        professor: 'Maria Clara',
        turno: 'noite'
    }
}

const getNumberOfStudents = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (let index in array) {
        total += obj[array[index]].numeroEstudantes;
    }
    console.log(`\nTotal de alunos em todas as turmas: ${total}\n`);
};

const getNumberOfStudentsMath = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (index in array) {
        if (obj[array[index]].materia === 'Matemática') {
            total += obj[array[index]].numeroEstudantes;
        }
    }
    return total;
}

const getInfo = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const array = Object.values(obj);
    for (index in array) {
        if (array[index].professor === name) {
            allLessons.push(array[index].materia)
            allStudent += array[index].numeroEstudantes;
        }
    }
    return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
}

console.log(getNumberOfStudents(allLessons));
console.log(createReport(allLessons, 'Maria Clara'));