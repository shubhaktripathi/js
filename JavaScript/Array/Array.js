var arr = ['1', '2', '3'];
console.log(arr.length());
var x = [
  {name: 'a', age: 10},
  {name: 'b', age: 40},
  {name: 'c', age: 20},
  {name: 'd', age: 9},
];
//loop over the array and return new array based on the value return.
x.map (function (currItem, index, actualArr) {
  return {key: currItem.name, value: currItem.age};
});
