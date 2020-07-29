const lib = require('./example.js');
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
