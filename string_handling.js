let day = 'tuesday'
console.log(day) // prints day value i.e tuesday

console.log(day.length) // prints length of the day

let subday = day.slice(0, 4) // prints substring from index 0 to 4
console.log(subday)

console.log(day[1]) // prints character at index 1

let split_day = day.split("s") // splits the string at index 1
console.log(split_day) // prints the split string

console.log(split_day[1]) // prints the second element of the split string
console.log(split_day[1].length) // prints the length of the second element
console.log(split_day[1].trim().length) // prints the length of the second element after removing leading and trailing spaces


let date = "23" // stores "23" as string
let nextdate = "27" // stores "27" as string
let diff = parseInt(nextdate) - parseInt(date) // converts both strings to integers and subtracts
console.log(diff) // prints the difference

diff.toString() // converts the difference to string
console.log(diff) // prints the difference

let newQuote = day + " is Funday" // concatenates the two strings
console.log(newQuote) // prints the concatenated string

let val_1 = newQuote.indexOf("day") // finds the index of "day" in the concatenated string
let val_2 = newQuote.indexOf("day", 5) // finds the index of "day" in the concatenated string starting from index 5
console.log(val_1)
console.log(val_2)
let count = 0
// loop continues as long as the index is not -1
while (val_1 !== -1) {
    count++
    val_1 = newQuote.indexOf("day", val_1 + 1)
}
console.log(count) // prints the number of times "day" appears in the concatenated string
