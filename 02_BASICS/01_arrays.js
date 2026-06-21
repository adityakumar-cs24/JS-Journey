//  arrays
// An array is a data structure that can hold multiple values at once.
// Arrays are ordered collections of data, and they can hold values of any type, including other arrays and objects.

const myArr = [1, 2, 3, 4, 5]
console.log(myArr)

const myArr2 = ["Hello", "World", 123, true, null, undefined, { name: "John Doe" }, [1, 2, 3]]
console.log(myArr2)

const heroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"]
console.log(heroes)

const myArr3 = new Array(1, 2, 3, 4, 5)
console.log(myArr3)

const myArr4 = new Array(5) // creates an array with 5 empty slots
console.log(myArr4)
myArr4[0] = 1
myArr4[1] = 2
myArr4[2] = 3
myArr4[3] = 4
myArr4[4] = 5
console.log(myArr4)

const myArr1 = [1, 2, 3, 4, 5]
myArr1.push(6)
myArr1.push(7)
console.log(myArr1)

myArr1.pop()
console.log(myArr1)