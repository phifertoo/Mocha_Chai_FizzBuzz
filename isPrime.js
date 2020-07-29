const isPrime = (number) => {
  if (number <= 1 || number === 2) {
    return true;
  }
  //you only have to test up to the square root of the number because
  //all numbers above the square root would have been paired with a number
  //below the square root
  let root = Math.sqrt(number);
  for (let i = 2; i <= root; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(133));
