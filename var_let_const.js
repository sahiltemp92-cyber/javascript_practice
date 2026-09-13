// difference between var, let and const

// var - it is function scoped

// let - it is block scoped

// const - it is block scoped and cannot be changed

/*
+----------------+-------------------------------------+-----------------------------------+-----------------------------------+
| Feature        | var                                 | let                               | const                             |
+----------------+-------------------------------------+-----------------------------------+-----------------------------------+
| Scope          | Function-scoped (or global)         | Block-scoped ({})                 | Block-scoped ({})                 |
| Hoisting       | Hoisted & initialized as undefined  | Hoisted (Temporal Dead Zone - TDZ)| Hoisted (Temporal Dead Zone - TDZ)|
| Re-declaration | Allowed in same scope               | Not allowed                       | Not allowed                       |
| Reassignment   | Allowed                             | Allowed                           | Not allowed                       |
| Mutability     | Fully mutable                       | Mutable                           | Reference fixed (contents mutate) |
+----------------+-------------------------------------+-----------------------------------+-----------------------------------+
*/


// syntax and examples

let name = "John"
console.log(name)

const age = 25
console.log(age)

var city = "New York"
console.log(city)

function display() {
    var name = "John"
    console.log(name)
}
display()

function display_1() {
    let name = "John"
    console.log(name)
}
display_1()

function display_2() {
    const name = "John"
    console.log(name)
}
display_2()

var a = 10
if (a == 10) {
    var b = 20
    console.log(b) // output is 20
}
console.log(b) // output is 20

let c = 10
if (c == 10) {
    let d = 20
    console.log(d) // output is 20
}
console.log(d) // error

const e = 10
if (e == 10) {
    const f = 20
    console.log(f) // output is 20
}
console.log(f) // error