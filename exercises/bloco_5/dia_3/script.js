function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
window.onload = function () {
    generateDays(); // Cria exibicao de dias no calendario
    holidays('Feriados'); // Cria botao de feriado
    fridays('Sexta-feira'); // Cria botao de sexta-feira

    let holidayButton = document.getElementById('btn-holiday');
    holidayButton.addEventListener("click", showHolidays); // Faz o botao mudar a cor dos feriados

    let fridayButton = document.getElementById(`btn-friday`);
    fridayButton.addEventListener("click", showFridays); // Faz o botao mudar o texto das sextas-feiras

    let days = document.getElementById('days');
    days.addEventListener("mouseover", zoomIn);
    days.addEventListener("mouseout", zoomOut);

    addTask('cozinhar');
    addTaskDesc('red');
}

//Task 1
function generateDays() {
    let days = document.getElementById('days');
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    for (let i = 0; i < dezDaysList.length; i += 1) {
        let day = document.createElement('li');
        day.innerText = dezDaysList[i];
        day.className = 'day';

        if (day.innerText === '25') {
            day.className = 'day holiday friday';
        } else if (day.innerText === '24' || day.innerText === '31') {
            day.className = 'day holiday';
        } else if (day.innerText === '4' || day.innerText === '11' || day.innerText === '18') {
            day.className = 'day friday';
        }

        days.appendChild(day);
    }
}

// Task 2
function holidays(string) {
    let holidaysButton = document.createElement('button');
    holidaysButton.id = 'btn-holiday';
    holidaysButton.innerText = string;
    let container = document.querySelector('.buttons-container');
    container.appendChild(holidaysButton);
}

// Task 3
function showHolidays() {
    let holidays = document.querySelectorAll('.holiday');

    for (let i = 0; i < holidays.length; i += 1) {
        if (holidays[i].style.color != 'green') {
            holidays[i].style.color = 'green';
        } else {
            holidays[i].style.color = '#777';
        }
    }
}

// Task 4
function fridays(string) {
    let fridaysButton = document.createElement('button');
    fridaysButton.id = 'btn-friday';
    fridaysButton.innerText = string;
    let container = document.querySelector('.buttons-container');
    container.appendChild(fridaysButton)
    document.getElementsByClassName('')
}

// Task 5
function showFridays() {
    let fridays = document.querySelectorAll('.friday');
    let aux = [4, 11, 18, 25];

    for (let i = 0; i < fridays.length; i += 1) {
        if (fridays[i].innerText != 'SEXTOU!') {
            fridays[i].innerText = 'SEXTOU!';
        } else {
            fridays[i].innerText = aux[i];
        }
    }
}

// Task 6
function zoomIn(day) {
    day.target.style.fontSize = '25px';
}

function zoomOut(day) {
    day.target.style.fontSize = '20px';
}

// Task 7
function addTask(string) {
    taskList = document.querySelector('.my-tasks');
    let task = document.createElement('span');
    task.innerText = string;
    taskList.appendChild(task);
}

// Task 8
function addTaskDesc(string) {
    taskList = document.querySelector('.my-tasks');
    let taskDesc = document.createElement('div');
    taskDesc.style.backgroundColor = string;
    taskList.appendChild(taskDesc);
}