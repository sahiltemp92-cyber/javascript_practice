class Person {

    // constructor is method which executes by default when you create object of the class
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.email = email
    }
    // property
    get location() {
        return "Canada"
    }
    // method
    fullName() {
        return (this.firstName + " " + this.lastName)
    }
}

// create object of the class
let person = new Person("Tim", "David", 25, "test@example.com")
console.log(person.age)
console.log(person.location)
console.log(person.fullName())