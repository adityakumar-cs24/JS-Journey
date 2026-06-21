// Stack(Primitive data types) and Heap(Non-primitive data types) are two different memory areas in JavaScript where data is stored.

// Stack is used to store primitive data types like numbers, strings, booleans, null, undefined, symbol, and bigInt. 
// Heap is used to store non-primitive data types like objects, arrays, and functions.

// When we declare a variable with a primitive data type, it is stored in the stack. 
// When we declare a variable with a non-primitive data type, it is stored in the heap and a reference to that memory location is stored in the stack.

// Example of Stack
let name = "John Doe"; // name is stored in stack
let age = 30; // age is stored in stack
let isActive = true; // isActive is stored in stack

// Example of Heap
let user = { // user object is stored in heap
    name: "John Doe",
    age: 30,
    isActive: true
}

// When we assign a primitive data type to another variable, a copy of the value is created in the stack. 
// When we assign a non-primitive data type to another variable, a reference to the same memory location in the heap is created in the stack.

let name1 = name; // name1 is a copy of name, stored in stack
let user1 = user; // user1 is a reference to the same memory location as user, stored in stack

console.log(name); // John Doe
console.log(name1); // John Doe
console.log(user); // { name: 'John Doe', age: 30, isActive: true }
console.log(user1); // { name: 'John Doe', age: 30, isActive: true }

// If we change the value of name1, it does not affect name because they are stored in different memory locations in the stack.
name1 = "Jane Doe";
console.log(name); // John Doe
console.log(name1); // Jane Doe

// If we change the value of user1, it affects user because they are referencing the same memory location in the heap.
user1.name = "Jane Doe";
console.log(user); // { name: 'Jane Doe', age: 30, isActive: true }
console.log(user1); // { name: 'Jane Doe', age: 30, isActive: true }