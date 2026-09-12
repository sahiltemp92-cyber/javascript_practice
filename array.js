/*
Array is a collection of elements
Array is a data structure
Array is a collection of elements of the same data type
*/

var marks = Array(6) // empty array with length 6
var marks = new Array(20, 40, 35, 12, 37, 100)

var marks = [20, 40, 35, 12, 37]  // most used syntax to declare array
var sub_marks = marks.slice(2, 5) // returns the elements from index 2 to 4 (index 5 is exclusive)
console.log(sub_marks)

console.log(marks[2]) // gives the element at the 3rd index (index starts from 0)

console.log(marks.length) // gives the length of the array

marks.push(65)  // adds the element at the end of the array
console.log(marks)

marks.pop() // removes the last element of the array
console.log(marks)

marks.unshift(12) // adds the element at the beginning of the array
console.log(marks)

marks.shift() // removes the first element of the array
console.log(marks)

let index_of_100 = marks.indexOf(100) // if element is present it gives the index of the element else it gives -1
console.log(index_of_100)

let index_of_37 = marks.indexOf(37) // if element is present it gives the index of the element else it gives -1
console.log(index_of_37)

console.log(marks.includes(37)) // if element is present it gives true else it gives false

var sum = 0
for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i]
}

console.log(sum) // gives the sum of the elements of the array


console.log(marks.reduce((a, b) => a + b)) // gives the sum of the elements of the array

console.log(marks.reduce((a, b) => a * b)) // gives the product of the elements of the array

console.log(marks.reduce((a, b) => a - b)) // gives the difference of the elements of the array


console.log(marks.reduce((a, b) => a > b ? a : b)) // gives the maximum element of the array


console.log(marks.reduce((a, b) => a < b ? a : b)) // gives the minimum element of the array


/* 
Print only even numbers from an array
*/
let scores_1 = [12, 13, 14, 16]
console.log(scores_1.filter((a) => a % 2 == 0))


/*
Create an array of even numbers of scores 
multiple each value with 3
sum the array
*/
let scores = [12, 15, 14, 16, 11, 9]

let evens = scores.filter(s => s % 2 == 0)
console.log(evens)

let multi_3 = evens.map(s => s * 3)
console.log(multi_3)

let summation = multi_3.reduce((a, b) => a + b)
console.log(summation)

// chaining of the filter, map, reduce (one liner)
console.log(scores.filter(s => s % 2 == 0).map(s => s * 3).reduce((a, b) => a + b))

let fruits = ["banana", "apple", "mango", "orange"]
fruits.sort() // sort the array in alphabetical order
console.log(fruits)

fruits.reverse() // reverse the array
console.log(fruits)

fruits.forEach(element => console.log(element)) // print the array elements

// sorting of the integers (ascending order)
let scores_integers = [12, 3, 16, 14]
console.log(scores_integers.sort((a, b) => a - b))

// sorting of the integers (descending order)
let scores_integers_desc = [12, 3, 16, 14]
console.log(scores_integers_desc.sort((a, b) => b - a))