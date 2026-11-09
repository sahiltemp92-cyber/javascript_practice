let message1: string = "Hello World";
message1 = "bye"
console.log(message1)

let age1: number = 20
let isActive: boolean = false

let numberArray: number[] = [1, 2, 3]
console.log(numberArray)

let data: any = "this could be any type or anything"
data = 42
console.log(data)


function add_ts(a: number, b: number): number {
    console.log(a + b)
}
add_ts(3, "4")
add_ts(3, 4)