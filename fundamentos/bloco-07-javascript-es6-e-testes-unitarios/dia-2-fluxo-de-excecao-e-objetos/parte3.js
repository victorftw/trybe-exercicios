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

function newObject(objeto1, objeto2, objeto3) {
  const allLessons = Object.assign({}, { objeto1, objeto2, objeto3 });
  return allLessons;
}
