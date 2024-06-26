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
// document.write(`a = ${a}\n<br/>\nb = ${b}`);
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
//! 5. Task
function buManzara(width, height) {
  return width > height;
}
console.log(buManzara(15, 5)); // true
//! 6. Task
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
const maxNum = maxOfTwoNumbers(20, 5);
console.log(`The maximum value is ${maxNum}`); // The maximum value is 20
//! 7. Task
function showNumebrs(limit) {
  for (let i = 0; i <= limit; i++) {
    const result = i % 2 === 0 ? `${i} "EVEN"` : `${i} "ODD"`;
    console.log(result);
  }
}

showNumebrs(51);

//! 8. Task

const marks = [80, 80, 50];

function calculateGrade(marks) {
  if (marks.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let item of marks) {
    sum += item;
  }

  const average = sum / marks.length;

  if (average >= 90 && average <= 100) {
    console.log("A");
  } else if (average >= 80 && average <= 89) {
    console.log("B");
  } else if (average >= 70 && average <= 79) {
    console.log("C");
  } else if (average >= 60 && average <= 69) {
    console.log("D");
  } else if (average >= 1 && average <= 59) {
    console.log("F");
  } else {
    console.log("Sorry, something went wrong!");
  }
}

calculateGrade(marks);

//? 2--version

/* const marks = [80, 80, 50];

function calculateGrade(marks) {
  if (marks.length === 0) {
    return 0;
  }

  let sumInitial = 0;

  let sum = marks.reduce((acc, curVal) => acc + curVal, sumInitial); //! Using reduce to calculate the sum of array elements with an initial sum value.

  const average = sum / marks.length;

  if (average >= 90 && average <= 100) {
    console.log("A");
  } else if (average >= 80 && average <= 89) {
    console.log("B");
  } else if (average >= 70 && average <= 79) {
    console.log("C");
  } else if (average >= 60 && average <= 69) {
    console.log("D");
  } else if (average >= 1 && average <= 59) {
    console.log("F");
  } else {
    console.log("Sorry, something went wrong!");
  }
}

calculateGrade(marks); */

//! 9. Task

function sum(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(sum(10));

//! 10. Task

function showStarts(rows) {
  for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 0; j < i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}

showStarts(10);

//! 11. Task

function showPrimes(num) {
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
      }
    }
    if (isPrime == true) {
      console.log(i);
    }
  }
}

showPrimes(10);

//! 12. Task

const address = {
  street: "Yangikurgan",
  city: "Tashkent",
  zipcode: 100018,
};

function showAddress(address) {
  //   let entries = Object.entries(address);
  //   console.log(entries);
  for (let key in address) console.log(`${key}: ${address[key]}`);
}

showAddress(address);

//! 13. Task

let library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

function showReadingStatus() {
  for (let book of library) {
    let status = book.readingStatus ? "read" : "not read";
    console.log(`The book "${book.title}" by ${book.author} is ${status}.`);
  }
}

showReadingStatus();

//! 14. Task

function old35(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return false;
  } else if (n % 3 === 0 || n % 5 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(old35(45));

//! 15. Task

const helloName = (str) => `Hello ${str}!`;

console.log(helloName("Bob")); // Hello Bob!
console.log(helloName("Alice")); // Hello Alice!
console.log(helloName("X")); // Hello X!

//! 16. Task

function right2(string) {
  if (string.length > 2) {
    return string.slice(-2) + string.slice(0, -2);
  } else return string;
}

console.log(right2("Hello")); //loHel
console.log(right2("java")); // vaja
console.log(right2("Hi")); // Hi

console.log("Hello".slice(-2));

//! 17. Task

function makeAbba(str1, str2) {
  return str1 + str2 + str2 + str1;
}

console.log(makeAbba("Hi", "Bye"));
console.log(makeAbba("Yo", "Alice"));
console.log(makeAbba("What", "Up"));

//! 18. Task

const arrayFromRange = (min, max) =>
  [...Array(max - min + 1).keys()].map((idx) => idx + min);

const numbers = arrayFromRange(1, 4);
console.log(numbers); // [ 1, 2, 3, 4 ]

const numbers1 = arrayFromRange(-10, -4);

console.log(numbers1); // [ -10, -9, -8, -7, -6, -5, -4 ]

//! 19. Task

let myArray = ["Hello", "Bye", true, 1, -10, "Something"];

function includes(array, searchElement) {
  if (array.indexOf(searchElement) !== -1)
    console.log(`Bu ${searchElement} element  mavjud`);
  else console.log("Afsuski, bu element mavjud emas!");
}

includes(myArray, false);
