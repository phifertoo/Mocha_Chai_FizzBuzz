const findVowels = (word) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let letter of word.toLowerCase()) {
    if (vowels.find((e) => e === letter)) {
      count++;
    }
  }
  return count;
};
console.log(findVowels('why & hEllo'));
