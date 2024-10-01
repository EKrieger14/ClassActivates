// print the function below
function myNumberFunction() {
  let num = 2 ** 2; // num = 4
  num = num + 3; // num = 7
  num = num % 4; // num = 3
  num = num * 14; // num = 42
  console.log(num);
}
// Print without invocation, references the value stored in the variable
console.log("Without invocation: ", myNumberFunction);

// now, invoke the myNumberFunction function
// Print with invocation, the function will run
console.log("With innvocation: ", myNumberFunction());

// print just the function of console.log (no invocation)
console.log(console.log);
