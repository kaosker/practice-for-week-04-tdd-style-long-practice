function myMap(inputArray, callback) {
  let newArr = [];
  for (let i = 0; i < inputArray.length; i++) {
    newArr.push(callback(inputArray[i]));
  }

  return newArr;
}

module.exports = myMap;
