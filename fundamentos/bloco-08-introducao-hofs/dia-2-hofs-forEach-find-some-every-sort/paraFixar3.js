const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) =>
  arr.some((nome) => (nome === name ? true : false));

// console.log(hasName(names, 'Ana'));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) =>
  arr.every((item) => (item.age >= minimumAge ? true : false));

console.log(verifyAges(people, 18));
