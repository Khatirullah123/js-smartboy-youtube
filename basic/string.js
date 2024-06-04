const name = "sahil"
const repoCount = 50

// console.log(name + repoCount + value);

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String ('sahil-hsc')

// console.log(gameName[0]);
// console.log(gameName.__proto__.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

const  newString = gameName.substring(0,4)
console.log(newString);

const  anotherString = gameName.slice(-8,4)
console.log(anotherString);

const  newStringOne = "  sahil  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://smartyboy.com/smarty%20boy"
console.log(url.replace('%20','-'));

console.log(gameName.split('-'));