const hashTable = (array) => {
  let hash = {};
  for (let i = 0; i < array.length; i++) {
    hash[array[i]] = true;
  }
  let missingNumber = Math.min(...array);
  for (let i = missingNumber; i <= Math.max(...array); i++) {
    if (!hash[i]) {
      return i;
    }
  }
};

const counter = (array2) => {
  const sortedArray = array2.sort((a, b) => a - b);
  let currentNumber = sortedArray[0];
  for (let i = 0; i < sortedArray.length - 1; i++) {
    if (sortedArray[i] !== currentNumber) {
      return currentNumber;
    }
    currentNumber++;
  }
  return currentNumber;
};

const john = {
  name: 'hello',
  print: function () {
    return this.name;
  },
};

hashTable([1, 2, 3, 4, 5, 6, 7, 8, 10]);
counter([5, 3, 2, 6, 4, 8]);
console.log(john.print());
