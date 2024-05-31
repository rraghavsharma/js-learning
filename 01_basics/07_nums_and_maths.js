const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance); // [Number: 100]
// console.log(balance.toString()) // 100 and typeof ---> string, 100 is the string
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(1)); // 100.0
// console.log(balance.toFixed(2)); // 100.00

// const otherNumber = 123.966

// console.log(otherNumber.toPrecision(4)); // 123.9
// console.log(otherNumber.toPrecision(2)); // 1.2e+2
// console.log(otherNumber.toPrecision(3)); // 124 imp
// console.log(otherNumber.toPrecision(5)); // 123.90 imp

// const Number1 = 123.911

// console.log(Number1.toPrecision(4)); // 123.9
// console.log(Number1.toPrecision(2)); // 1.2e+2
// console.log(Number1.toPrecision(3)); // 124 imp
// console.log(Number1.toPrecision(5)); // 123.91 imp


const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // 4 it gives absolute value
// console.log(Math.round(4.3)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8)); // 8

console.log(Math.random()); // it gives any random value from 0 to 1, it gives different value on every run
console.log((Math.random()*10) + 1); // random value greater than 1
console.log(Math.floor(Math.random()*10) + 1); // integer value greater than 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // integer value between min & max

// node 01_basics/07_nums_and_maths.js