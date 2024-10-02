// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function functionWithTwoParams(x, y) {
  console.log(`x = ${x}`);
  console.log(`y = ${y}`);

  return x + y;
}
// invoke the function and pass in two numbers
console.log(functionWithTwoParams(5, 10));
// what is x = 5
// what is y = 10
// what is returned = 15
// invoke the function and pass in more than two numbers
console.log(functionWithTwoParams(5, 10, 50, 20));
// what is x = 5
// what is y = 10
// what is returned = 15
// invoke the function and pass in only one number
console.log(functionWithTwoParams(5));
// what is x = 5
// what is y = undefined
// what is returned = NaN
// change the function to set default values for the parameters
function functionWithDefaultParams(x = 10, y = 20) {
  console.log(`x = ${x}`);
  console.log(`y = ${y}`);

  return x + y;
}
functionWithDefaultParams(4, 7);
// what is x = 4
// what is y = 7
// what is returned = 11
functionWithDefaultParams();
// what is x = 10
// what is y = 20
// what is returned = 30
// again, invoke the function and pass in only one number
functionWithDefaultParams(95);
// what is x = 95
// what is y = 20
// what is returned = 115

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function functionWithRestParam(x, y, ...z) {
  console.log(`x = ${x}`);
  console.log(`y = ${y}`);
  console.log(`z = ${z}`);
  console.log(z);

  return x + y;
}
// again, invoke the function and pass in more than two numbers
functionWithRestParam(5, 10, 15, 20, 25, 200);

// Create function with rest param as only parameter
function functionWithOneRestParam(...x) {
  console.log(x);
}
functionWithOneRestParam(1, 19, 5, 20);
