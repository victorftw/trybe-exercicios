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

function addTurno(objeto, chave, valor) {
  objeto[chave] = valor;
}

addTurno(lesson2, 'turno', 'noite');

function allKeys(objeto) {
  return Object.keys(objeto);
}

function objLength(objeto) {
  return Object.entries(objeto).length;
}

function allValues(objeto) {
  return Object.values(objeto);
}

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

function allStudents(objeto) {
  let alunos = 0;

  const array = Object.keys(objeto);

  for (let index in array) {
    alunos += objeto[array[index]]['numeroEstudantes'];
  }
  return alunos;
}

const getValueByNumber = (objeto, indice) => Object.values(objeto)[indice];

function verifyPair(obj, chave, valor) {
  const array = Object.entries(obj);
  let result = false;
  for (let index in array) {
    if (array[index][0] === chave && array[index][1] === valor) result = true;
  }
  return result;
}
