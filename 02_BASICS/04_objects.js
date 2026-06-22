const tinderUser = new Object()
console.log(tinderUser)

const regularUser = {}
console.log(regularUser)

tinderUser.id = "123abc"
tinderUser.name = "Aditya"
tinderUser.isLoggedIn = false
console.log(tinderUser)

const user = {
    email: "abc@example.com",
    fullName: {
        userName: {
            firstName: "Aditya",
            lastName: "Pandey"
        }
    }
}

console.log(user.fullName)
console.log(user.fullName.userName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {obj1, obj2}
console.log(obj3)

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4)

const obj5 = {...obj1, ...obj2}
console.log(obj5)

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))