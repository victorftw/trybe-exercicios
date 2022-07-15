function fatorial(numero) {
  let fatorial = numero
  for (let index = fatorial - 1; index > 0; index -= 1) {
    fatorial *= index;
  }
  return fatorial;
}

console.log(fatorial(4));