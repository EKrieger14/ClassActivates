// TODO: using the function expressions below, refactor them into function declarations
// Function Expression
// const greet = function() {
//   console.log("Hello!");
// };

// Refactored as Function Declaration
function greet() {
  console.log("Hello");
}

// Function Expression
// const threeModTwo = function() {
//   console.log(3 % 2);
// };

// Refactored as Function Declaration
function threeModTwo() {
  console.log(3 % 2);
}

let age = 18;
// Function Expression
// const checkDrivingAge = function() {
//   if (age >= 16) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

// Refactored as Function Declaration
function checkDrivingAge() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
}
