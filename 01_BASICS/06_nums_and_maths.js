// const score = 500
// console.log(score)

// const balance = new Number(1000)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

// const otherNumber = 123.899
// console.log(otherNumber.toPrecision(1)) //1e+2
// console.log(otherNumber.toPrecision(2)) //1.2e+2
// console.log(otherNumber.toPrecision(3)) //124
// console.log(otherNumber.toPrecision(4)) // 123.9
// console.log(otherNumber.toPrecision(5)) // 123.90
// console.log(otherNumber.toPrecision(6)) // 123.899
// console.log(otherNumber.toPrecision(7)) // 123.8990

// const hundreds = 1000000
// console.log(hundreds.toLocaleString()) // 1,000,000
// console.log(hundreds.toLocaleString("en-IN")) // 10,00,000

// ++++++++++++++++++++++ MATHS ++++++++++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-3)) // 3
// console.log(Math.round(3.5)) // 4
// console.log(Math.round(3.4)) // 3
// console.log(Math.floor(3.9)) // 3
// console.log(Math.ceil(3.1)) // 4
// console.log(Math.min(1, 2, 3, 4, 5)) // 1
// console.log(Math.max(1, 2, 3, 4, 5)) // 5
// console.log(Math.sqrt(16)) // 4

console.log(Math.random()) // 0.123456789 
console.log(Math.random() * 10)
console.log(Math.floor(Math.random() * 10)) // 0 to 9

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // 10 to 20
