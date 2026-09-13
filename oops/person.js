class Person {

    // constructor is method which executes by default when you create object of the class
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    age = 25
    // property
    get location() {
        return "Canada"
    }
    // method
    fullName() {
        return (this.firstName + " " + this.lastName)
    }
}


let person = new Person("Tim", "David")
console.log(person.age)
console.log(person.location)
console.log(person.fullName())

export default Person