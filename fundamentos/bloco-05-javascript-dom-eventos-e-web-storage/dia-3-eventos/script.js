function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

let arrayHolidays = ['24', '25', '31'];

let arrayFridays = ['4', '11', '18', '25'];

function addDays(array) {
  const sessaoDias = document.getElementById('days');
  const listaDias = document.createElement('li');
  for (let index = 0; index < array.length; index += 1) {
    const listaDias = document.createElement('li');
    listaDias.className = 'day';
    listaDias.innerText = array[index];
    sessaoDias.appendChild(listaDias);
  }
}

addDays(decemberDaysList);

function addHolidays(array) {
  const dias = document.getElementsByClassName('day');
  for (let index = 0; index < dias.length; index += 1) {
    if (array.includes(dias[index].innerText)) {
      dias[index].classList.add('holiday');
    }
  }
}

addHolidays(arrayHolidays);

function addFridays(array) {
  const dias = document.getElementsByClassName('day');
  for (let index = 0; index < dias.length; index += 1) {
    if (array.includes(dias[index].innerText)) {
      dias[index].classList.add('friday');
    }
  }
}

addFridays(arrayFridays);
