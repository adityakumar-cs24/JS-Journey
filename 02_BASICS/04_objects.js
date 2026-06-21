const tinderUser = new Object()
// console.log(tinderUser)

const regularUser = {}
// console.log(regularUser)

tinderUser.id = "123abc"
tinderUser.name = "Aditya"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const user = {
    email: "abc@example.com",
    fullName: {
        userName: {
            firstName: "Aditya",
            lastName: "Pandey"
        }
    }
}

// console.log(user.fullName)
console.log(user.userName)