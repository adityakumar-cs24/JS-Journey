const score = 500
console.log(score)

const balance = new Number(1000)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 123.899
console.log(otherNumber.toPrecision(1)) //1e+2
console.log(otherNumber.toPrecision(2)) //1.2e+2
console.log(otherNumber.toPrecision(3)) //124
console.log(otherNumber.toPrecision(4)) // 123.9
console.log(otherNumber.toPrecision(5)) // 123.90
console.log(otherNumber.toPrecision(6)) // 123.899
console.log(otherNumber.toPrecision(7)) // 123.8990