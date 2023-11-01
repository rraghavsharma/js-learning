// let score = 23
// console.log(typeof score);
// console.log(typeof(score));

// let sco = "33"
// console.log(typeof sco);
// console.log(typeof(sco));

// let valueInNumber_01 = Number(sco) // always use capital N for number there and also javascript is case sensitive language
// console.log(typeof valueInNumber_01);
// console.log(valueInNumber_01); // 33

// let scor = "33ab"
// let valueInNumber_02 = Number(scor)
// console.log(typeof valueInNumber_02);
// console.log(valueInNumber_02);  // NaN

// typeof null --> object
// typeof undefined --> undefined

// convert things(variables) into number (values are)
// "33" --> 33
// "33ab" --> NaN
// "raghav" --> NaN
// "" --> NaN
// true --> 1, false --> 0
// null --> 0
// undefined --> undefined

let isLoggedIn = 7
let booleanIsLoggedIn = Boolean(isLoggedIn)  // always use capital B for Boolean there and also javascript is case sensitive language
// console.log(booleanIsLoggedIn);

// convert things(variables) into Boolean
// 1 --> true, 0 --> false, 7 --> true
// "" --> false
// "raghav" --> true
// "false" --> true
// "0" --> true
// " " --> true
// NaN --> false
// null --> false
// undefined --> false

let number = 30
let stringNumber = String(number)
// console.log(typeof stringNumber)
// console.log(stringNumber);

// conversion of object....... continue

// DATA TYPES : Number, String, Boolean, object etc.

// let string = "0"
// let numString = Number(string)
// console.log(numString)
// console.log(typeof numString);

// Operation with CONVERSION

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/3);
// console.log(2**3);
// console.log(2%3);

let string_01 = "hello"
let string_02 = " Raghav"
let string_03 = string_01 + string_02
// console.log(string_03);

// not a good way to add, multiply, divide, subtract of different types of data types it shows exception result.
// it follows emca script guidelines
// jo value phele aa rahi h (number or string) usme change karna hum preferred karte h
// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// use parentheses for better understanding of code... use simple line to better understanding of code

// console.log( (3 + 5) * 8 % 7); // better to do this 
// console.log( 3 + 5 * 8 % 7);

console.log(true); // true
console.log(+true); // 1
// console.log(true+); // error
// console.log(++true); // error
console.log(+""); // 0

let gameScore = 23
gameScore++;
console.log(gameScore);
// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment



