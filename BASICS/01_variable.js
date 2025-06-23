const accountId = 1234567890
let accountEmail = "abc@gmail.com"
var accountPassword = "0987654321"
accountCity = "Delhi"

accountEmail = "xyz@gmail.com"
accountPassword = "12213223"
accountCity = "Mumbai"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);

// prefer not to use var, use let or const instead 
// beacause var is function scoped and let/const are block scoped
// const is used for Constants,and let is used for variables that can Change.
// const is used for variables that should not change, like accountId
// let is used for variables that can change, like accountEmail, accountPassword, and accountCity
// var is used for variables that can change, but it is function scoped, so it
// is not recommended to use var in modern JavaScript
// use const for variables that should not change, like accountId
// use let for variables that can change, like accountEmail, accountPassword, and accountCity
// use var for variables that can change, but it is function scoped, so it is not
// const is used for values that should not change after initialization.
// let is used for variables whose values can change later.
// Avoid using var because it is function scoped, while let and const are block scoped.