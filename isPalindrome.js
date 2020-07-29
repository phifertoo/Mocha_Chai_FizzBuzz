const palindromeCheck = (phrase) => {
  //make everything lower case
  let input = phrase.toLowerCase();
  let reversed = input.split('').reverse().join('');
  //remove spacing
  return input.replace(' ', '') === reversed.replace(' ', '');
};

const palindromeCheckForLoop = (word2) => {
  let check = true;
  for (let i = 0; i < word2.length; i++) {
    if (word2[i] !== word2[word2.length - 1 - i]) {
      check = false;
    }
  }
  return check;
};

console.log(palindromeCheck('arA'));
