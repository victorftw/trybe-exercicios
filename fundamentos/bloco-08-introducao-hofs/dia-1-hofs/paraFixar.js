const acorda = () => 'Acordando!!';
const cafe = () => 'Bora tomar um café!!';
const dormir = () => 'Partiu dormir!!';

const doingThings = (callback) => callback();

console.log(doingThings(dormir));
