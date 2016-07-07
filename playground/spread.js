function add(a, b) {
  return a + b;
}
console.log(add(3,1));
var toAdd = [9, 5];
console.log(add(...toAdd));

var groupA = ['Cathrine', 'Jonathan'];
var groupB = ['Stine', 'Nora'];
var final = [...groupB, 3, ...groupA];

console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function hello(name, age) {
  return 'Hello ' + name + ', you are ' + age;
}

console.log(hello(...person));
console.log(hello(...personTwo));

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function(name) {
  console.log('Hi ' + name);
});
