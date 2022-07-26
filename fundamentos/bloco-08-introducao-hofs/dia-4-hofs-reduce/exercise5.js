const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

const containsA = names.reduce(
  (acc, curr) =>
    acc +
    curr.split('').reduce((count, current) => {
      if (current === 'a' || current === 'A') return count + 1;
      return count;
    }, 0),
  0
);

console.log(containsA);
