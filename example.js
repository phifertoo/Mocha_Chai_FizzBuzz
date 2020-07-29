const isMultiple = (num, mod) => {
  return num % mod === 0;
};

const fizzBuzz = (num) => {
  switch (true) {
    case isMultiple(num, 15):
      return 'FizzBuzz';
    case isMultiple(num, 3):
      return 'Fizz';
    case isMultiple(num, 5):
      return 'Buzz';
    default:
      return num;
  }
};

const main = [...Array(100)].map((element, index) => fizzBuzz(index + 1));

module.exports = { fizzBuzz, main, isMultiple };
