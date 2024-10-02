// refactor the functions below into arrow syntax
// 1. Function Declaration
function myNumberFunction() {
  return 14;
}
// 1. Refactored into arrow syntax
// concise body
const myNumberFunction = () => 14;
// block body
const myNumberFunction = () => {
  return 14;
};

// 2. Function Declaration
function greet(name) {
  return `Hello, ${name}`;
}
// 2. Refactored into arrow syntax
const greet = name => `Hello, ${name}`;

// 3. Function Expression
const timeOfDayGreet = function(name, timeOfDay) {
  return `Hello, ${name}, good ${timeOfDay}`;
};
// 3. Refactored into arrow syntax
const timeOfDayGreet = (name, timeOfDay) => {
  return `Hello, ${name}, good ${timeOfDay}`;
};

// 4. Function Declaration
function tripleAndHalf(num) {
  let triple = num * 3;
  return triple / 2;
}
// 4. Refactored into arrow syntax

// 5. Function Declaration
function sumTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}
// 5. Refactored into arrow syntax
