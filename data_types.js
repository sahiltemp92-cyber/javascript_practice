let a = 4
let b = "Hi"
let c = 3.14
let d = true
let e = null
let f = undefined

console.log(a + " is a type of " + typeof a)
console.log(b + " is a type of " + typeof b)
console.log(c + " is a type of " + typeof c)
console.log(d + " is a type of " + typeof d)
console.log(e + " is a type of " + typeof e)
console.log(f + " is a type of " + typeof f)

// typeof e is object 

let g = { name: "John", age: 30 }
console.log(g + " is a type of " + typeof g)

// Number + Number = Number
let sum1 = a + c
console.log(sum1 + " is a type of " + typeof sum1)

// Number + String = String
let sum2 = a + b
console.log(sum2 + " is a type of " + typeof sum2)
