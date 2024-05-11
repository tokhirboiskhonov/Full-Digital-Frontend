/* 
* Object

let userData = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  isMarried: false,
};

console.log(userData);

? 2 xil yol bn qiymatni olishimiz mumkin.

? dot notation (I-usul)

console.log(userData.firstName);

? bracket notation (II-usul)

console.log(userData["age"]); */

/* 
* JS da ma'lumotlarni chiqarish

? 1. console.log()
console.log("Hello World!");

? 2. document.write()
let fName = "Tokhirkhuja";
document.write(fName);

? 3. alert()

alert(fName);

* Dasturlash tillarda 2 xil typing languages

? 1. Static Typing (Java, C#, C++, Scala)
? 2. Dynamic Typing (JS, Python ...)
*/

/* 
* Ternary operator

const myAge = 17;

const accessTheatre = myAge >= 18 ? "Yes" : "No";

console.log(accessTheatre); */

/*
* Logical operators && || !

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
*/

/*
* Switch Case

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

console.log(weekDay(3)); */

/*
* Logical operators with Non-boolean
Falsy:
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

/* 
	* Loop:
		For
		while
		Do while 

? for loop
let potatos = 15;

for (let i = 1; i <= potatos; i++) {
  console.log(`${i} ta kartoshka archildi`);
}


? While
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 150];

let sum = 0;
let i = 0;

while (i < nums.length) {
  sum += nums[i];
  i++;
}

console.log(sum); 

? Do while

let potatoCount = 0;
let i = 1;

do {
  console.log(`${i} ta kartoshka archildi`);
  i++;
} while (i <= potatoCount); 
*/

/* 
* Infinitive Loops
* For in, its only for object
* For of

 let data = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  isMarried: false,
};

 for (key in data) {
   console.log(`${key}: ${data[key]}`);
 }

const keys = Object.keys(data);
console.log(keys);
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}

let users = [
  {
    userName: "Black Star",
    ranking: 2,
    job: "designer",
  },
  {
    userName: "Blue Sky",
    ranking: 5,
    job: "game dev",
  },
];

for (let user of users) {
	console.log(user);
  for (let key in user) {
    console.log(`${key}: ${user[key]}`);
  }
}

let movies = ["Harry", "Your step", "Batman", "Spiderman"];

for (let item of movies) {
  console.log(item);
} */

/* * Objects(Obyektlar)
? #1 -> Basic Objects (Obyektlar asosi)

let obj = {
  firstName: "Tokhirkhuja",
  age: 24,
  city: "Tashkent",
  country: "Uzbekistan",
};

console.log(obj);

? #2 -> Object properties and methods

const obj2 = {
  city: "Fergana",
  country: "UZB",
  func1: function () {
    console.log("Func1 is a property");
  },
  func2() {
    console.log("Func2 is a methods");
  },
};

obj2.func1();
obj2.func2();

* Objectga qo'shish, dynamic add

obj2.name = "John Smith";

console.log(obj2);

* Objectdan o'chirib tashlash, dynamic delete

delete obj2.func1;
delete obj2.func2;

console.log(obj2);

#3 -> Objectni ichida bormi yoki yo'qmi

const box = {
  calledName: "Square",
  color: "Red",
  number: 7,
};

console.log("color" in box); // true
console.log("number" in box); // true
console.log("age" in box); // false

console.log(box);

! Modern ES6 JS features in object

let firstName = "Malikaxon";

let person = {
  firstName, // firstName: firstName, --> firstName: "Malikaxon"
  age: 19,
};

console.log(person);

 
* Objects basic (intermediate level)
JavaScript Object Properties and methods

const user = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

* Object keys, values, entries

for (let keys in user) {
    console.log(keys, user[keys]);
}

const keys = Object.keys(user);
const values = Object.values(user);
const entries = Object.entries(user);

console.log(keys);

console.log(values);

console.log(entries);

for (let item of Object.values(user)) {
  console.log(item);
}

* Clone objects in JS
Javascriptdagi obyektlarni klonlash

? Primitive

let ism1 = "Shabnam";
let ism2 = ism1;

ism2 = "Zuhrakhon";

console.log(ism1);
console.log(ism2);

? Non-primitive (reference data types)
let user1 = {
  name: "Ali",
  age: 24,
};

let user2 = user1;

user2.name = "Vali";

console.log(user2);
console.log(user1);

let clone = {};

for (let key in user1) {
  clone[key] = user1[key];
}

clone.name = "Jack";
clone.age = 30;

console.log(clone); // { name: 'Jack', age: 30 }
console.log(user1); // { name: 'Ali', age: 24 }

! 1. Object.assign

let user2 = Object.assign({}, user1);
user2.name = "John";
user2.age = 42;
console.log(user2); // { name: 'John', age: 42 }

! 2. Spread Operator

let user3 = { ...user1 };
user3.name = "Azizbek";
console.log(user3);

! Copy with nested obj

let person2 = {
  name: "Angelina",
  address: {
    city: "One South, Garden",
    state: "Sari-Kelambarg",
  },
};

let exPerson = { ...person2 };
exPerson.name = "Jackson";
exPerson.address = { ...exPerson.address };
exPerson.address.state = "KLCC";
exPerson.address.city = "Langkawi";
console.log(exPerson);
console.log(person2); */

/* 
* String(methods)


- charAt
- startWith || endWith
- includes
- indexOf
- toUpperCase || toLowerCase
- subString
- replace


? charAt - nechinchi indexdagi charni aniqlab beradi.

let word = "Hello";
let res = word.charAt(4); // o
console.log(res);
console.log(word[1]); // e

? startWith - boshlanadimi?

let text = "Welcome to JavaScript world.";

console.log(text.startsWith("Welcome")); // true
console.log(text.startsWith("W")); // true
console.log(text.startsWith("el")); // false

? endsWith - boshlanadimi?

console.log(text.endsWith("or")); // false
console.log(text.endsWith("ld")); // false

? includes

let message = "You are selected to our university";

console.log(message.includes("are")); //true
console.log(message.includes("  to")); // false, because of two empty space

? indexOf || lastIndexOf

let mes = "You are registered to membership";

console.log(mes.indexOf("i")); // 11
console.log(mes.lastIndexOf("i")); // 30

? toUpperCase || toLowerCase

let test = "hello guys, how are you doing?";
let upperTest = test.toUpperCase();
let lowerTest = test.toLowerCase();
console.log(upperTest); // HELLO GUYS, HOW ARE YOU DOING?
console.log(lowerTest); // hello guys, how are you doing?

! practise

const text1 = "Lorem ipsum dolor sit";
const searchOutput = "IPSum";
const findWords = text1.toLowerCase().includes(searchOutput.toLowerCase());
console.log(findWords);

? subString - ayrim ma'lum bir qismini qirqib olish uchun.

const test1 = "Frontend Developer";

const resultTest1 = test1.substring(0, 8); // birinchi index kiradi lekin ikkinchi index kirmaydi, bu degani gacha
const resultTest2 = test1.substring(9, 18);
console.log(resultTest1);
console.log(resultTest2);

? replace - alishtirib qo'yish

let test2 = "You are our member and you are registered.";

let resultTest3 = test2.replace("member", "subscriber");
console.log(resultTest3);

* Template literals (ES6 xususiyati - interpolatsiyalash) ``

let Tname = "Tokhirkhuja",
  Tsurname = "Boiskhonov",
  age = 24;

console.log(`My full name is ${Tname} ${Tsurname} and I'm ${age} years old!`); 
*/

/* 
* Date

const today = new Date();
console.log(today);

let todayDate = today.getDate();
console.log(todayDate);

let todayMonth = today.getMonth();
console.log(todayMonth);

let todayHours = today.getHours();
console.log(todayHours);

let todayMinutes = today.getMinutes();
console.log(todayMinutes);

let todayYear = today.getFullYear();
console.log(todayYear);

const timeInMs = Date.now();
console.log(timeInMs);
console.log(timeInMs / 1000 / 60 / 60 / 24 / 365); 
*/

/* 
* Arrays

! #1 -> Adding and Removing elements

Oxiridan--
	-push
	-pop
Boshidan--
	-unshift
	-shift
Xohlagan joydan--
	-splice


let fruits = ["apple", "pear", "melon"];
console.log(fruits);

? push
fruits.push("waterMelon");
console.log(fruits); // [ 'apple', 'pear', 'melon', 'waterMelon' ]

? pop
fruits.pop();
console.log(fruits); // [ 'apple', 'pear' ]

? unshift
fruits.unshift("cherry");
console.log(fruits); // [ 'cherry', 'apple', 'pear', 'melon' ]

? shift
fruits.shift();
console.log(fruits); // ['pear', 'melon']

? splice
const numbers = [1, 2, 3, 4, 5];

// numbers.splice(1, 2, "Hello");
numbers.splice(2, 2, "book", "pen", "sweet");
console.log(numbers); // [1, 2, 'book', 'pen', 'sweet', 5]

//* Finding elements -> (Primitive-types)

1) indexOf
2) lastIndexOf
3) includes 

? indexOf

const cars = ["malibu", "spark", true, 7, "spark"];

console.log(cars.indexOf("spark")); // 1
console.log(cars.indexOf(true)); // 2
console.log(cars.indexOf("malibu")); // 0

? lastIndexOf

console.log(cars.lastIndexOf("spark")); // 4

? includes (tekshiradi?)

console.log(cars.includes("spark")); // true
console.log(cars.includes("captiva")); // false
console.log(cars.includes("ma")); // false

? concat()

let num1 = [1, 2, 3];
let num2 = [4, 5, 6];

let num3 = num1.concat(num2);
console.log(num3);

? slice

let movies1 = ["Forsache", "Vanishing Time", "Steve", "Novda"];

let newMovies1 = movies1.slice(1, 4);
console.log(newMovies1); // [ 'Vanishing Time', 'Steve', 'Novda' ], it returns new copied array

? Spread operator

let films = ["Harry", "Steve", "Novda"];
let newHero = films;

newHero[0] = "Aziz";
console.log(newHero);
console.log(films);

let newMovies2 = [...films];
console.log(films);
console.log(newMovies2);

 console.log(films == newMovies);

 
 let myUser = {
	 firstName: "Tokhirkhuja",
	 lastName: "Boiskhonov",
	 city: "Kuala Lummpur",
	};
	
	let myUser1 = { ...myUser };
	
	myUser1.city = "Tashkent";
	
	console.log(myUser);
	console.log(myUser1);

*/
/* 
* Iterating an Array (for of, for in)

const arr = [1, 2, 3, 4, 5];

? for of

let sum = 0;
for (const val of arr) {
  sum += val;
}
console.log(sum);

? for in

for (const index in arr) console.log(index); // 0 1 2 3 4

* join and split

? join -> join methods help convert from array to string

const cardNumbers = [7, 9, 15, 6];
const cardNumbersJoined = cardNumbers.join("");
console.log(cardNumbersJoined);

? split -> split methods help convert from string to array

let animals = "dog-cat-chicken-pig-wolf";

let newAnimals = animals.split("-");

console.log(newAnimals); // [ 'dog', 'cat', 'chicken', 'pig', 'wolf' ]

for (const value of newAnimals) console.log(value); // dog cat chicken pig wolf

// Challenge

let text2 = "Telegram";

let letterText = text2.split("");

console.log(letterText); // ['T', 'e', 'l', 'e', 'g', 'r', 'a', 'm'] */
/* 
! Guess number game

function guessNumber() {
  let randomNum = Math.floor(Math.random() * 11);

  let guess;

  do {
    guess = prompt("1-10 gacha sonni tahmin qilib, kiriting");
    console.log(guess, randomNum);

    if (randomNum > guess) {
      console.log("Siz kichik sonni tahmin qildingiz!");
    } else {
      console.log("Siz katta sonni tahmin qildingiz!");
    }
  } while (guess != randomNum);
  console.log("G'alaba! Tabriklaymiz");
}

guessNumber(); */

/* 
Window object 3 ga bo'linadi - document, .....
-DOM -  Document Object Model - navigator, screen, location, frames, 
_BOM - Browser Object Model
-JavaScript - Object, Array, Function ...
 */

//* DOM bilan ishlashga kirish

//? - Node nime?

// Nodes (Tugunlar) bilan ishalash

// Children ban qanday is   q q q	hlashi ko'rdik

//? children (HTMlCollection)

/* const firstElement = document.body.children[0];
firstElement.style.backgroundColor = "green";
firstElement.style.color = "white";
console.log(firstElement);
 */
//? childNodes (NodeList) -> aniq element va uni oldindagi bosh joylani ko'rsatadi

/* const bodyElement = document.body;

console.log(bodyElement.children);
console.log(bodyElement.childNodes); */

//? hasChildNodes() - node bor yoki yo'qligini tekshirish uchun.

// const firstItem = document.body.children[0];
// console.log(firstItem);

// const firstItemChild = firstItem.children[0];
// console.log(firstItemChild);

// console.log(firstItem.hasChildNodes()); // true

//? ParentNode || parentElement - bular bizga elemenetlarni otasini belgilaydi 2lasi ham.

// const firstItem1 = document.body.children[0];
// const firstIemChild1 = firstItem1.children[0];

// const firstItemChildParent = firstItemChild.parentElement;
// console.log(firstItemChildParent);

/* nextSibling - keyingi node ga o't
nextElementSibling - keyingi elementga o't */

/* previousSibling - keyingi node ga o't
previousElementSibling - keyingi elementga o't */

// const elList = document.body.children[0];
// const elItem = elList.children[0];

// let prevItem = elItem.nextElementSibling;

// console.log(prevItem.previousElementSibling);

/* 
	* Finding HTML Elements
	? 1-usul: (HTML collection)
				getElementById
				getElementsByTagName
				getElementByCLassName
	? 2-usul: (Node List)
				querySelector
				qeuerySelectorAll

? getElementById
const firstEl = document.getElementById("relax");
console.log(firstEl);

const secondEl = document.getElementById("text");
console.log(secondEl);

? getElementsByTagName
const infoSalaries = document.getElementsByTagName("h1");
console.log(infoSalaries);

? getElementByClassName

const item = document.getElementsByClassName("item");
console.log(item);

? querySelector

const itemEl = document.querySelector(".item");
console.log(itemEl);

? querySelectorAll
const elItem = document.querySelectorAll(".item");

// elItem[1].style.color = "red";

const setColor = (index, color) => (elItem[index].style.color = color);

setColor(2, "red");
// console.log(elItem);
*/

/* 
	* Changing HTML elements (HTML elementlarni o'zgartirish)

	? element.innerHTML
	? element.innerText
	? element.setAttribute
	? element.style.property

	! innerText returns all text contained by an element and all its child elements. innerHtml returns all text, including html tags, that is contained by an element.


const aboutInfo = document.querySelector(".info-salary");
console.log(aboutInfo);

? element.innerHTMl
aboutInfo.innerHTML = "Contact Info";
// aboutInfo.innerHTML = '<i>Contact Info</i>'

? element.innerText
aboutInfo.innerText = "Contact Info";

? element.setAttribute

const text = document.querySelector("p");
text.setAttribute("class", "extra");
text.setAttribute("style", "color: red");
text.setAttribute("disabled", "");

? element.style.property

text.style.color = 'red';
text.style.backgroundColor = 'yellow';
*/

/* 
	* Adding and Deleting elements (Elementlarni qo'shish va ochirish)

		? document.createElement(element)
		? document.removeChild(element)
		? document.appendChild(element)
		? document.replaceChild(new, old)
		? document.write(text)

		! 1. document.createElement(element)
		const elWrapper = document.querySelector(".wrapper");
		const newElement = document.createElement("h1");
		newElement.setAttribute("class", "title");
		newElement.innerText = "Hello World!";

		const newParagraph = document.createElement("p");

		newParagraph.innerText = "Welcome to our website";

		! 2. document.appendChild(element)
		elWrapper.appendChild(newElement);
		elWrapper.appendChild(newParagraph);

		! 3. document.removeChild(element)

		const todoList = document.querySelector("#todo-list");
		const thirdItem = todoList.children[2];
		todoList.removeChild(thirdItem);

		! 4. document.replaceChild(new, old)

		const todoList = document.querySelector("#todo-list");
		console.log(todoList);

		const randomItem = todoList.children[1];
		const newElItem = document.createElement("li");
		newElItem.innerText = "Telephone";
		todoList.appendChild(newElItem);
		todoList.replaceChild(newElItem, randomItem)

		! 5. document.write(text)

		document.write('hello guys!');

	* Finding HTMl Objects (HTML object larini topish)

		? document.forms
		? document.title
		? document.body
		? document.baseURI

	! 1. document.forms --> Nechta forma borligini xisoblab beradi

	const forms = document.forms;

	console.log(forms);

