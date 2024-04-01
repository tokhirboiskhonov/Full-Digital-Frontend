//! 1. Task
let tempColor,
  colorOne = "red",
  colorTwo = "blue";
(tempColor = colorOne),
  (colorOne = colorTwo),
  (colorTwo = tempColor),
  console.log(colorOne),
  console.log(colorTwo);
//! 2. Task
let tempNumber,
  numOne = 7,
  numTwo = 19;
(tempNumber = numOne),
  (numOne = numTwo),
  (numTwo = tempNumber),
  console.log(numOne),
  console.log(numTwo);
//! 3. Task
var tempAB,
  a = 10,
  b = 20;
(tempAB = a),
  (a = b),
  (b = tempAB),
  document.write(`a = ${a}\n<br/>\nb = ${b}`);
