//  Dates

let myDate = new Date()
console.log(myDate) // current date and time
console.log(myDate.toString()) 
console.log(myDate.toDateString()) // current date
console.log(myDate.toTimeString()) // current time
console.log(myDate.toLocaleString()) // current date and time in local format
console.log(myDate.toLocaleDateString()) // current date in local format
console.log(myDate.toLocaleTimeString()) // current time in local format

console.log(typeof myDate) // object

console.log(myDate.getFullYear()) // current year
console.log(myDate.getMonth()) // current month (0-11)
console.log(myDate.getDate()) // current date (1-31)
console.log(myDate.getDay()) // current day of the week (0-6)
console.log(myDate.getHours()) // current hour (0-23)
console.log(myDate.getMinutes()) // current minute (0-59)
console.log(myDate.getSeconds()) // current second (0-59)
console.log(myDate.getMilliseconds()) // current millisecond (0-999)

console.log(myDate.getTime()) // current time in milliseconds since January 1, 1970

let myCreatedDate = new Date("2020-01-01")
console.log(myCreatedDate)
console.log(myCreatedDate.toString())

let myTimeStamp = Date.now()
console.log(myTimeStamp) // current time in milliseconds since January 1, 1970
console.log(myCreatedDate.getTime()) // time in milliseconds since January 1, 1970 for the created date
console.log(Math.floor(Date.now() / 1000)) // current time in seconds since January 1, 1970

myCreatedDate.toLocaleString('default', {
    weekday: "long"
})