const reverseString = (yourString) => {
  return yourString.split('').reverse().join('');
};

const reverseStringDecrement = (forwardString) => {
  let reverseString = '';
  for (let i = forwardString.length - 1; i >= 0; i--) {
    reverseString += forwardString[i];
  }
  return reverseString;
};

reverseString('hello');
reverseStringDecrement('hello');

module.exports = { reverseString };
