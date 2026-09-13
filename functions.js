// normal function
function add(a, b) {
    return a + b
}
console.log(add(10, 20))

// anonymous function - it does not have a function name
sum = function (a, b) {
    return a + b
}
console.log(sum(10, 20))

// arrow function
sub = (a, b) => a + b // => is called fat pip operator
console.log(sub(10, 20))