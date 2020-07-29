// _______________Create a set which by nature only has unique values

const removeBySet = (array) => {
  return [...new Set(array)];
};

// _______________Filter for unique elements

const removeByFilter = (array2) => {
  return array2.filter((element, index) => {
    //indexOf(element) === index only if the element is unique. If this expression is false,
    //it means that there is another element in the array with the same value.
    return array2.indexOf(element) === index;
  });
};

//______________Filter and slice

const removeByFilterSlice = (array3) => {
  return array3.filter((element, index) => {
    //slice all the elements up until the element using array3.slice(0,index).
    //Then find if the element exists in the sliced array using the .some(). If .some() is false
    //the element does not exist in the array.
    return array3.slice(0, index).some((e) => e === element) === false;
  });
};

//_________forEach

const removeByForEach = (array4) => {
  let o = {};
  //we set both the keys and values to the value of each element. When
  //a new key with the same name appears, it will just overwrite the key and value.
  array4.forEach((element) => (o[element] = element));
  return Object.values(o);
};
