const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correcao = (gabarito, respostas) => {
  let pontuacao = 0;
  for (let index in respostas) {
    if (respostas[index] === gabarito[index]) {
      pontuacao += 1;
    } else if (respostas[index] === 'N.A') {
      pontuacao += 0;
    } else {
      pontuacao -= 0.5;
    }
  }
  return pontuacao;
};

const resultado = (gabarito, respostas, func) => func(gabarito, respostas);

console.log(resultado(RIGHT_ANSWERS, STUDENT_ANSWERS, correcao));
