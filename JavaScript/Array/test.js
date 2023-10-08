console.time('your code took');
let str = (document.getElementById("demo").innerHTML = "my name is sambit");
console.log(str);

let str1 = (document.getElementsByClassName("shubham").innerHTML =
  "your text has been changed");
console.log(str1);

let person= {

  name:'shubham',
  age:25,
}
console.table(person);
console.timeEnd('your code took');
