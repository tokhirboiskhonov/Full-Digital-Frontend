// Object

let userData = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  isMarried: false,
};

// console.log(userData);

// 2 xil yol bn qiymatni olishimiz mumkin.

// dot notation (I-usul)

// console.log(userData.firstName);

// bracket notation (II-usul)

// console.log(userData["age"]);

// JS da ma'lumotlarni chiqarish

// 1. console.log()
// console.log("Hello World!");

// 2. document.write()
let fName = "Tokhirkhuja";
// document.write(fName);

// 3. alert()

// alert(fName);

// Dasturlash tillarda 2 xil typing languages

//  1. Static Typing (Java, C#, C++, Scala)
// 2. Dynamic Typing (JS, Python ...)

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

//* Switch Case

function weekDay(day) {
  let today = day;
  let result = "";

  switch (today) {
    case 1:
      result += "Dushanba";
      break;
    case 2:
      result += "Seshanba";
      break;
    case 3:
      result += "Chorshanba";
      break;
    case 4:
      result += "Payshanba";
      break;
    case 5:
      result += "Juma";
      break;
    case 6:
      result += "Shanba";
      break;
    case 7:
      result += "Yakshanba";
      break;
    default:
      result += "Bunday xafta yo'q bizda, Afsus!";
      break;
  }

  return result;
}

console.log(weekDay(3));

//* Logical operators with Non-boolean

/* Falsy:
		undefined,
		null,
		NaN,
		0,
		'' - empty string,
		false
	Truthy:
		1,
		'abc',
		true,
		" "
*/
