//* Ternary operator

const myAge = 17;

const accessTheatre = myAge >= 18 ? "Yes" : "No";

// console.log(accessTheatre);

//* Logical operators && || !

console.log(false && false); // false
console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true

console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log(true || true); // true
console.log(0 || null || false || NaN || "" || "abc"); // abc
console.log(0 && null && true && NaN && "" && "abcdefgh"); // 0

console.log(!true); // false
console.log(!1); // false
console.log(!0); // true

console.log((true && false) || true || (true && false)); // true
console.log(false || (false && true) || (false && true && false)); // false


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
