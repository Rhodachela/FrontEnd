// comments can make code readable

// Welcome to 30DaysOfJavaScript

/* 
comments can make code readable,
easy to reuse and informative

*/

// Declaring variables with different data types
let son = "Peter";
let mother = "Josephine";
let isStudent = true;
let something; 
let emptyValue = null;

// Declaring personal details variables
let fistName = "Rodah";
let lastName = "Chelangat";
let maritalStatus = "Single";
let country = "Kenya";
let age = 23;

// Declaring and logging age values
let myAge = 23;
let yourAge = 24;

console.log("My age is:" +  myAge)
console.log("Your age is:" +  yourAge)

let str = "Learning Javascript"
str = str.toUpperCase()
console.log(str)

str= str.toLocaleLowerCase()
console.log(str)

console.log(str.includes("ear"))
console.log(str.startsWith("l"))
console.log(str.indexOf(9))

// console.log(str.slice(1, 5))

// let userNameAndAge = prompt("What is your name and age ?" );
// // let userName = userNameAndAge.slice(0, userNameAndAge.lastIndexOf("a")+1);

// let userName = userNameAndAge.slice(0, -3);
// console.log(userName)

// Number methods
let dogAge = 17;
dogAge = dogAge.toString()
console.log(dogAge, typeof dogAge)

let stringedNum = '65.89';
stringedNum = parseFloat(stringedNum)
console.log(stringedNum)

let weight = 49.8176890;
console.log(Math.round(weight))
console.log(Math.floor(weight))

console.log(weight.toFixed(2))

// Falsy values
0, false, undefined, null, "", NaN

// Truthy values
0.1, true, " "

console.log("Ba" + NaN + "a")

// Conditionals in Javascript
const gravity = 20
if (gravity >= 20) {
    console.log("Gravity is hugeee!")
} else {
    console.log("Too badd!!!")
}
console.log(gravity == 31)

let thisNum = '34'

// Lazy comparison
console.log(thisNum == 34)

// strict comparison
console.log(thisNum === 34)


// and operator = &&
// or operator = //
let size = 50
if (size >= 8 && size <= 10) {
    console.log("Your size is small")
} else if (size ==10 ) {
    console.log("Your size is large!!!")
}else if (size <=20 ) {
    console.log("Your size is bigggg!!!")
}else if (size <=30 ) {
    console.log("Your size is massive!!!")
}else {
    console.log("We don't have your size!!!")
}

let weatherIsNice = false
if (weatherIsNice) {
    console.log("You can go out!")
} else {
    console.log("Stay indoorss!!!")
}

// teneray operator
// weatherIsGood == true ? console.log("Going out") : console.log("Staying in!!");
// weatherIsGood ? console.log("Going out") : console.log("Staying in!!");


let count = 10
count += 1
console.log(count)
let multiply = 2
multiply *= 2
console.log(multiply ** 3)

let firstName = "Tamara"
let secondName = "Michael"
let string = `Hi ${firstName} ${secondName}`
console.log(string)

let drive = 17;
console.log("You are " + (18 - drive) + " year away from driving")