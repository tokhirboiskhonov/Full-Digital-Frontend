//* Ternary operator

const myAge = 17;

const accessTheatre = myAge >= 18 ? "Yes" : "No";

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
  for (let i = 0; i < limit; i++) {
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
