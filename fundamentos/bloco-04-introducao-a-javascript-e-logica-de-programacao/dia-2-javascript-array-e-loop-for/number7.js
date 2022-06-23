// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let min = Math.min.apply(null, numbers);

// console.log(min);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let min = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < min) {
    min = numbers[index];
  }
}

console.log(min);
