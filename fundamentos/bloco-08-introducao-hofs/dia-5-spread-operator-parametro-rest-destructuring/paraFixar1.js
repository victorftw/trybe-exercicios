const specialFruit = ['morango', 'banana', 'manga'];

const additionalItens = ['leite condensado', 'granola', 'ovomaltine'];

const fruitSalad = (fruit, additional) => [...specialFruit, ...additionalItens];

console.log(fruitSalad(specialFruit, additionalItens));
