// Primitive data types in JavaScript
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol (ES6)
// 7. BigInt (ES11)

const score = 1000
const scoreValue = 1000.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('12345');
const anotherId = Symbol('12345');

console.log(id === anotherId); // false, because symbols are unique

const bigNumber = 19287301925612756718267887126712876n; // BigInt literal



// Reference data types in JavaScript (Non Primitive)
// 1. Object
// 2. Array
// 3. Function  

const heroes = ["IronMan", "Captain America", "Thor", "Hulk", "Black Widow",]
const user = {
    name: "John Doe",
    age: 30,
    isActive: true,
    email: "abc@gmail.com",
    address: {
        city: "New York",
        state: "NY"
    }
}


const myFunction = function() {
    console.log("This is a function");
}

console.log(typeof score); // number

// https://262.ecma-international.org/5.1/#sec-11.4.3