// Declaration of a string using string literal
const name = "John Doe";
const age = 30;

console.log(`My name is ${name} and I am ${age} years old.`)

// Declaration of a string using String constructor
const heroName = new String("Iron Man")

// Accessing characters in a string
console.log(name[0]) // J
console.log(name[1]) // o
console.log(name[2]) // h
console.log(name[3]) // n

console.log(name.__proto__) // String.prototype

// String methods
console.log(name.charAt(0)) // J
console.log(name.indexOf("D")) // 5
console.log(name.lastIndexOf("o")) // 7
console.log(name.length) // 8
console.log(name.toUpperCase()) // JOHN DOE
console.log(name.toLowerCase()) // john doe
console.log(name.includes("Doe")) // true
console.log(name.startsWith("John")) // true
console.log(name.endsWith("Doe")) // true
console.log(name.split(" ")) // [ 'John', 'Doe' ]
console.log(name.replace("John", "Jane")) // Jane Doe


const newString = name.substring(0, 4) // John
console.log(newString) // John

const newString2 = name.slice(0, 4) // John
console.log(newString2) // John

const newString3 = name.substr(0, 4) // John
console.log(newString3) // John

const newString4 = name.concat(" is a software engineer") // John Doe is a software engineer
console.log(newString4) // John Doe is a software engineer

const newString5 = name.trim() // John Doe
console.log(newString5) // John Doe

const url = "https://www.example.com"
const newString6 = url.replace("https://", "") // www.example.com
console.log(newString6) // www.example.com

console.log(url.includes("https://")) // true
