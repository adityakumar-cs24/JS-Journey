// function of addition of two numbers
function addTwoNumbers(num1, num2){
    return num1 + num2
}
console.log(addTwoNumbers(5, 15))

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Aditya")) // Aditya just logged in
console.log(loginUserMessage("")) // just logged in
console.log(loginUserMessage()) // undefined just logged in


