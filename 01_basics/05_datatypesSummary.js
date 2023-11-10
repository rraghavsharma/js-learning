// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
// JavaScript is an interpreted language, not a compiled language. A program such as C++ or Java needs to be compiled before it is run. The source code is passed through a program called a compiler, which translates it into bytecode that the machine understands and can execute.
// typescript for better understanding of javascript
const score = 100 // number
const isLoggedIn = false // boolean
const outsidetemp = null // null --> Empty
const scoreValue = 100.3 // number
let userEmail; // undefined --> another way << let userEmail = undefined;

const id = Symbol('123') // symbol return type milta h bo alag hi datatype hi hota h par bo SYMBOL hi hota h
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 25246546652522n // in this if we use 'n' then it becomes bigInt
// const bigNumber = 25246546652522 // behind the scene javascript treated this number as bigInt


// console.log("2" === 2); --> false but console.log("2" == 2) --> true
// two types of data types : primitive & non-primitive(raference)
// there are two ways for access(get the data) karne k or data ko rakhne ke ways are: primitive & non-primitive

// # Primitive data types

// 7 types : String, Number, Boolean, Null(empty, zero nhi h), undefined(variable define kar diya h par us variable ko value nhi di h), Symbol, BigInt
// Symbol : used for kisi bhi value ko unique value banane k liye use hota h
// Null : empty
// Undefined : we have declared the variable but doesn't give value to the variable
// BigInt : jo value int m nhi cover ho rahi h bo bigint m aa jati h (big value), scientific value
// agar javascript master kar ni h toh object or browser k web event master karna h


// # Non-primitive (Reference) data types

// Array, Objects, Functions
// for javascript master the objects and browser web event

// Array
const heros = ["Ironman", "spiderman", "thor"]

// Object
let myObj = {
    name: "raghav",
    age: 22,
    email: "ragh6407@gmail.com",
}

// Function
// declaring variable function
const myFuntion = function(){
    console.log("Hello World");
}


// jo bhi variable(data type) use kar rahe h uska data type phele pta kar lenge toh interview m bohot kam aata h
console.log(typeof bigNumber);
console.log(typeof myFuntion);
console.log(typeof myObj);
// data type by typeof
// Null --> object
// Undefined --> undefined
// Boolean --> boolean
// Number --> number
// String --> string
// BigInt --> bigint
// Symbol --> symbol
// Object --> object (mostly)
// Function --> function // isko object function bola jata h
// function ko declare karne k kayi tarike h
// # Examples
// console.log(null >= 0); 