const user = {
    username: "Aditya",
    age: 24,
    city: "Bengaluru",

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to Website.`)
        console.log(this)
    }
}
user.welcomeMessage()
console.log(user.username)
user.username = "Alex"
user.welcomeMessage()

console.log(this)