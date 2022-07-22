const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) =>
  arr.some((nome) => (nome === name ? true : false));

console.log(hasName(names, 'Ana'));
