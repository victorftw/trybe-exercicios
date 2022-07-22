const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correcao = (gabarito, respostas) => {
  if (respostas === gabarito) {
    return 1;
  }
  if (respostas === 'N.A') {
    return 0;
  }
  return -0.5;
};

const resultado = (gabarito, respostas, callback) => {
  let pontos = 0;
  for (let index in gabarito) {
    const callbackReturn = callback(gabarito[index], respostas[index]);
    pontos += callbackReturn;
  }
  return `Sua nota foi de ${pontos} pontos.`;
};

console.log(resultado(RIGHT_ANSWERS, STUDENT_ANSWERS, correcao));
