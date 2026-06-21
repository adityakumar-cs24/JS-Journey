// Objects

// Objects are collections of key-value pairs. They are used to store and organize data in a structured way.

// An object can be created using object literal syntax or the Object constructor.

// const user = {
//     name: "John Doe",
//     age: 30,
//     isActive: true,
//     email: "abc@example.com"
// }
// console.log(user)
const mySym = Symbol("mySymbol")
const jsUser = {
    name: "Aditya",
    age: 20,
    mySym: "myKey1",                                   // [mySym]: "myValue1"  // using symbol as a key
    location: "Bengaluru",
    email: "aditya@example.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}
// console.log(jsUser)

// console.log(user.name)
// console.log(jsUser.age)
// console.log(jsUser.lastLoginDays[1])
// console.log(jsUser.mySym)

// jsUser.email = "newEmail@example.com"
// console.log(jsUser.email)
// Object.freeze(jsUser)
// jsUser.email = "new123Email@example.com"
// console.log(jsUser.email) 

jsUser.greet = function() {
    console.log("Hello jsUser")
}
console.log(jsUser.greet)
console.log(jsUser.greet())

jsUser.greet2 = function() {
    console.log(`Hello ${this.name}`)
}
console.log(jsUser.greet2())