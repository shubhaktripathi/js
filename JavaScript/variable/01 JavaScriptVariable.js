//let age=10;
function getName () {
  var name = 'Adesh';
  var name = 'Shubham';
  //let name='Anjali';  Identifier 'name' has already been declared
  console.log (name);
  let age = 10;
  //var age=10;  Identifier 'age' has already been declared
  //let age=20; Uncaught SyntaxError: Identifier 'age' has already been declared
  const d = 100;
  //const e; Uncaught SyntaxError: Missing initializer in const declaration
  // d=50; 01 JavaScriptVariable.js:9 Uncaught TypeError: Assignment to constant variable.
  // let age1=20;

  //alert(x);
  let a;
  
  console.log (age);
  console.log (d);
}


a = function myName () {
 console.log('1 is '+getName());
 getName();
 console.log('2 is '+getName);
};
