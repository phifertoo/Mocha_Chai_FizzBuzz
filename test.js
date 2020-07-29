const lib = require('./fizzBuzz.js');
const fib = require('./fibonacci.js');
const rev = require('./reverseString.js');

var expect = require('chai').expect;

describe('FizzBuzz', () => {
  it(`Should return "FizzBuzz" when the number is evenly disvisible by 15, "Fizz" when it's
  evenly divisible by 3 and "Buzz" when it's evenly divisible by 5.`, () => {
    expect(lib.fizzBuzz(1)).equal(1);
    expect(lib.fizzBuzz(3)).equal('Fizz');
    expect(lib.fizzBuzz(5)).equal('Buzz');
    expect(lib.fizzBuzz(7)).equal(7);
    expect(lib.fizzBuzz(15)).equal('FizzBuzz');
    expect(lib.fizzBuzz(30)).equal('FizzBuzz');
  });
});

describe('Fibonacci', () => {
  it(`The function should reverse the letters of the word or phrase`, () => {
    expect(fib.fibonacciFunction(1)).equal(1);
    expect(fib.fibonacciFunction(3)).equal(2);
    expect(fib.fibonacciFunction(7)).equal(13);
    expect(fib.fibonacciFunction(9)).equal(34);
    expect(fib.fibonacciFunction(12)).equal(144);
  });
});

describe('Reverse String', () => {
  it(`The function should return a number that is the sum of all previous numbers`, () => {
    expect(rev.reverseString('hello')).equal('olleh');
    expect(rev.reverseString('have')).equal('evah');
    expect(rev.reverseString('look')).equal('kool');
    expect(rev.reverseString('fire')).equal('erif');
  });
});
