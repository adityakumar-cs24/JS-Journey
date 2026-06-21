const marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"]
const dcHeroes = ["Batman", "Superman", "Flash", "Green Lantern"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes)

// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes)

// const allHeroes = [...marvelHeroes, ...dcHeroes]
// console.log(allHeroes)

console.log(Array.isArray("Aditya"))
console.log(Array.isArray(marvelHeroes))
console.log(Array.from("Aditya"))
console.log(Array.from({name : "Aditya", age: 24}))

let a = 12
let b = 32
let c = 45
console.log(Array.of(a, b, c))