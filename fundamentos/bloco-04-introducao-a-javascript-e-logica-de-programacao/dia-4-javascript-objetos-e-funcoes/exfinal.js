// Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.

// 1° - Adição, subtração, multiplicação, divisão, módulo.

function soma(a, b) {
  resultado = a + b;
  return console.log(resultado);
}

function subtracao(a, b) {
  resultado = a - b;
  return console.log(resultado);
}

function multiplicacao(a, b) {
  resultado = a * b;
  return console.log(resultado);
}

function divisao(a, b) {
  resultado = a / b;
  return console.log(resultado);
}

function modulo(a, b) {
  resultado = a % b;
  return console.log(resultado);
}

multiplicacao(5, 2);

// 2° - Faça um programa que retorne o maior de dois números.

function maior(n1, n2) {
  if (n1 > n2) {
    console.log('O número ' + n1 + ' é maior que ' + n2 + '.');
  } else if (n1 < n2) {
    console.log('O número ' + n2 + ' é maior que ' + n1 + '.');
  } else {
    console.log('Erro: Os números são iguais.');
  }
}

maior(10, 0);

// 3° - Faça um programa que retorne o maior de três números.

function maiorDosTres(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    console.log('O mair número é o: ' + n1);
  } else if (n2 > n1 && n2 > n3) {
    console.log('O mair número é o: ' + n2);
  } else {
    console.log('O mair número é o: ' + n3);
  }
}

maiorDosTres(20, 9, 11);

// 4° - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function positivoOuNegativo(num) {
  if (num > 0) {
    console.log('Positivo');
  } else if (num < 0) {
    console.log('Negativo');
  } else if (num === 0) {
    console.log('Zero');
  } else {
    console.log('Erro: valor inesperado.');
  }
}

positivoOuNegativo(5);

// 5° - 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

function anguloTriangulo(n1, n2, n3) {
  if (n1 > 0 && n2 > 0 && n3 > 0) {
    resultado = n1 + n2 + n3;
    if (resultado === 180) {
      console.log(true);
    } else if (resultado !== 180) {
      console.log(false);
    }
  } else {
    console.log('Erro: valor inválido.');
  }
}

anguloTriangulo(-10, 10, 20);
