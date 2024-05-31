const name = "raghav"

const repocount = 4

// console.log(name + " repositories count: " + repocount )

console.log(`my name is ${name} and github repositories ccount is ${repocount}`)

// string declaration

const gameName = new String('raghav-rs-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('v')); // 5
// console.log(gameName.indexOf('t')); // -1

const newString = gameName.substring(0, 4) // here 4 not include in the string
// const newString1 = gameName.substring(-5, 4) // not changes
console.log(newString);

const anotherString = gameName.slice(-1, 4)
console.log(anotherString);

const newStringOne = "    raghav    "
console.log(newStringOne); // (    raghav    )
console.log(newStringOne.trim()); // (raghav)

const url = "https://raghav.com/raghav%20sharma"

console.log(url.replace('%20', '-')) // https://raghav.com/raghav-sharma

console.log(url.includes('raghav')) // true

console.log(url.includes('sunday')) // false

console.log(gameName.split('-'));
