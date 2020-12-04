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
    generateDays();
    holidays('Feriados');
}

//Task 1
function generateDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let days = document.getElementById('days');

    for (let i = 0; i < dezDaysList.length; i += 1) {
        let day = document.createElement('li');
        day.innerText = dezDaysList[i];
        day.className = 'day';      

        if (day.innerText === '24' || day.innerText === '25' || day.innerText === '31') {
            day.className = 'day holiday';
        } else if (day.innerText === '4' || day.innerText === '11' || day.innerText === '18' || day.innerText === '25') {
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