const nota = -1;

//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

if (nota >= 90 && nota <= 100) {
  console.log('Você tirou um A!');
} else if (nota >= 80 && nota < 90) {
  console.log('Você tirou um B!');
} else if (nota >= 70 && nota < 80) {
  console.log('Você tirou um C!');
} else if (nota >= 60 && nota < 70) {
  console.log('Você tirou um D!');
} else if (nota >= 50 && nota < 60) {
  console.log('Você tirou um E!');
} else if (nota >= 0 && nota < 50) {
  console.log('Você tirou um F!');
} else if (nota < 0 || nota > 100) {
  console.log('Erro: nota inválida.');
}
