const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

const flatten = arrays.reduce((acc, dados) => acc.concat(dados), []);

console.log(flatten);
