const anagrammer = (word1, word2) => {
  let shorter = word2.replace(/\W/g, '');
  let longer = word1.replace(/\W/g, '');
  if (word1.length <= word2.length) {
    shorter = word1;
    longer = word2;
  }
  let shorterObj = {};
  let longerObj = {};
  for (let letter of shorter) {
    shorterObj[letter] = shorterObj[letter] + 1 || 1;
  }
  for (let letter of longer) {
    longerObj[letter] = longerObj[letter] + 1 || 1;
  }
  let isAnagram = true;
  for (let key in shorterObj) {
    if (shorterObj[key] !== longerObj[key]) {
      isAnagram = false;
      return isAnagram;
    }
  }
  return isAnagram;
};

console.log(anagrammer('helg', 'hep'));
