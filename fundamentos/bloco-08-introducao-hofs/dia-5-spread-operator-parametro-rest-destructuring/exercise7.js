const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

const shipLength = (navios) =>
  Object.values(navios).forEach((element) => {
    const { name, length, measurementUnit } = element;
    console.log(`${name} is ${length} ${measurementUnit} long`);
  });

shipLength(ships);
