const factorialize = (number) => {
  let total = 1;
  for (let i = 1; i <= number; i++) {
    total *= i;
  }
  return total;
};

console.log(factorialize(5));
