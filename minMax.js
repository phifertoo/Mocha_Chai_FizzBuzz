//_______________________________Use spread operator

const array = [50, 8, 12, 30];

Math.min(...array);
Math.max(...array);

//_______________________________Use apply()

Math.min.apply(null, array);
Math.max.apply(null, array);

//_______________________________Sort list then take first / last element

array.sort((a, b) => a - b);
const maxNumber = array[array.length - 1];
const minNumber = array[0];
