let resultsCache = [0, 1, 1];

const fibonacciFunction = (n) => {
  //returning 1 prevents the recursive function from continuing forever because the function will
  //return immediately and will not continue below to continue the recursion
  if (n === 1 || n === 2) {
    return 1;
  }
  if (resultsCache[n]) {
    return resultsCache[n];
  }
  const newNumber = fibonacciFunction(n - 1) + fibonacciFunction(n - 2);
  resultsCache[n] = newNumber;
  return newNumber;
};

console.log(fibonacciFunction(3), resultsCache);

// let seq = [0, 1];
// const fibonacciSequence = (num) => {
//   if (num === 1 || num === 2) {
//     return 1;
//   }
//   if (resultsCache[num]) {
//     return resultsCache[num];
//   }
//   const newNumber = fibonacciFunction(num - 1) + fibonacciFunction(num - 2);
//   resultsCache[num] = newNumber;
//   return resultsCache;
// };

// console.log(fibonacciSequence(6), seq);

module.exports = { fibonacciFunction };
