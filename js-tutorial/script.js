//! 1. Task
let colorOne = "red",
  colorTwo = "blue";
[colorTwo, colorOne] = [colorOne, colorTwo];
console.log(colorOne);
console.log(colorTwo);
//! 2. Task
let numOne = 7,
  numTwo = 19;
[numTwo, numOne] = [numOne, numTwo];
console.log(numOne);
console.log(numTwo);
//! 3. Task
var a = 10,
  b = 20;
[b, a] = [a, b];
document.write(`a = ${a}\n<br/>\nb = ${b}`);
//! 4. Task
function fizzBuzz(input) {
  if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz";
  } else if (input % 3 === 0) {
    return "Fizz";
  } else if (input % 5 === 0) {
    return "Buzz";
  } else {
    return input;
  }
}
const output = fizzBuzz(15);
console.log(output); // FizzBuzz
