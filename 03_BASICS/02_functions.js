function calculateCartPrice(...num){
    return num
}
console.log(calculateCartPrice(200, 5000, 1200, 47474, 7893))

const user = {
    username: "Aditya",
    price: "999"
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)
handleObject({
    userName: "Iron Man",
    price: 399
})