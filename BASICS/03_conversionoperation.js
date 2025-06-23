let score = "33abc"

// console.log(typeof score)
// console.log(typeof (score))

let valueInnumber = Number(score) 

// console.log(typeof valueInnumber)
// console.log(valueInnumber)

// "33" => 33
// "33abc" => NaN
// True => 1 / False => 0

let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true
// 0 => false
// "" => false
// "xyz" => true

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof stringNumber)

// ********************** OPERATIONS ****************************

let value = 3
let negValue = -value
console.log(negValue) // -3

// console.log(5 + 9) // 14 (addition of 5 and 9)
// console.log(8 - 5) // 3 (subtraction of 5 from 8)
// console.log(6 * 3) // 18 (multiplication of 6 and 3)
// console.log(8 / 2) // 4 (qutient of 8 divided by 2)
// console.log(5 % 3) // 2 (remainder of 5 divided by 3)
// console.log(2 ** 4) // 2 raised to the power of 4 = 16
// console.log(2 ** 3 ** 2) // 2 ** 9 = 512

// console.log((5 + 3) * 2 % 4)

// console.log(+true)
// // console.log(true+) we can not use it like this 
// console.log(+"")

let num1 , num2, num3
num1 = num2 = num3 = 5 + 5

let gameCenter = 100
++gameCenter
console.log(gameCenter)