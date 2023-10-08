// Fill

var testArray = [4, 8, 4, 6, 3, 1];

console.log(testArray.fill("shubham"));

// Filter

var testArray = [4, 8, 4, 6, 3, 1];
const myResult = testArray.filter((num) => {
  return num != 3;
});

console.log(myResult);

// Filter

var testArray = [4, 8, 4, 6, 3, 1];
const myResult1 = testArray.filter((num) => num != 3);

console.log(myResult);
