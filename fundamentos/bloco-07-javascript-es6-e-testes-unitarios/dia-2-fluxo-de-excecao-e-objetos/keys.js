const pessoa = {
  firstName: 'Victor',
  age: 21,
};

function addNewKey(objeto, chave, valor) {
  objeto[chave] = valor;
  console.log(objeto);
}

addNewKey(pessoa, 'job', 'student')
addNewKey(pessoa, 'city', 'Maringá-PR')