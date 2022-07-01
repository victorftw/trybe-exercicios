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
// 🚀 Exercício 1:
// Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
// A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

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

// 🚀 Exercício 2:
// Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

function addHolidayButton(string) {
  const botoesContainer =
    document.getElementsByClassName('buttons-container')[0];
  const botaoFeriado = document.createElement('button');
  botaoFeriado.id = 'btn-holiday';
  botaoFeriado.innerText = string.toUpperCase();
  botoesContainer.appendChild(botaoFeriado);
}

addHolidayButton('feriados');

// 🚀 Exercício 3:
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".

const botaoFeriado = document.getElementById('btn-holiday');

let onOff = false;

function ligaDesligaBotao() {
  if (onOff === false) {
    colorFriday();
    onOff = true;
  } else {
    uncolorFriday();
    onOff = false;
  }
}

function colorFriday() {
  const holidays = document.getElementsByClassName('holiday');
  for (let index = 0; index < holidays.length; index += 1) {
    holidays[index].style.backgroundColor = 'aquamarine';
  }
}

function uncolorFriday() {
  const holidays = document.getElementsByClassName('holiday');
  for (let index = 0; index < holidays.length; index += 1) {
    holidays[index].style.backgroundColor = 'rgb(238,238,238)';
  }
}

botaoFeriado.addEventListener('click', ligaDesligaBotao);

// 🚀 Exercício 4:
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

function addFridayButton(string) {
  const botoesContainer =
    document.getElementsByClassName('buttons-container')[0];

  let botaoFriday = document.createElement('button');
  botaoFriday.id = 'btn-friday';
  botaoFriday.innerText = string.toUpperCase();
  botoesContainer.appendChild(botaoFriday);
}

addFridayButton('sexta-feira');

// 🚀 Exercício 5:
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

const fridayButton = document.getElementById('btn-friday');
let sextou = false;

function sextouFunction() {
  if (sextou === false) {
    fridayText();
    sextou = true;
  } else {
    fridayNumber(arrayFridays);
    sextou = false;
  }
}

function fridayText() {
  const holidays = document.getElementsByClassName('friday');

  for (let index = 0; index < holidays.length; index += 1) {
    holidays[index].innerText = 'SEXTOU!';
  }
}

function fridayNumber(array) {
  const holidays = document.getElementsByClassName('friday');

  for (let index = 0; index < holidays.length; index += 1) {
    holidays[index].innerText = array[index];
  }
}

fridayButton.addEventListener('click', sextouFunction);

// 🚀 Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

function dayMouseOver() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function (event) {
    // Este addEventListener recebe como primeiro parâmetro o mouseover, que dispara a função ao passar o mouse por cima
    event.target.style.fontSize = '30px'; // Ele pega o evento alvo e altera o estilo de fontSize para 30px
    event.target.style.fontWeight = '600'; // Ele pega o evento alvo e altera o estilo de fontWeight para 600
  });
}

function dayMouseOut() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function (event) {
    // Este addEventListener recebe como primeiro parâmetro o mouseout, que dispara a função ao tirar o mouse de cima do elemento
    event.target.style.fontSize = '20px'; // Ele pega o evento alvo e altera o estilo de fontSize para 20px
    event.target.style.fontWeight = '200'; // Ele pega o evento alvo e altera o estilo de fontWeight para 200
  });
}

dayMouseOver();
dayMouseOut();

// 🚀 Exercício 7:
// Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function addTasks(string) {
  const task = document.createElement('span');
  const divTask = document.getElementsByClassName('my-tasks')[0];
  task.innerText = string;
  divTask.appendChild(task);
}

addTasks('Ficar rico');
