//Method 1
function isEven(element) {
  return element % 2 === 0;
}

console.log(isEven(5));

// Method 2 Function as Varible
var isEven = function (element) {
  return element % 2 === 0;
};

console.log(isEven(4));

// Method 3 Fat arrow Function

var isEven = (element) => {
  return element % 2 === 0;
};
console.log(isEven(9));

// Call back function for Arrays

var result = [2, 4, 6].every(isEven);
console.log(result);

// Call back function for Arrays without return
var result = [2, 4, 6].every((e) => e % 2 === 0);
console.log(result);

// Call back function for Arrays without return
var result = [2, 4, 6].every((e) => {
  return e % 2 === 0;
});
console.log(result);
