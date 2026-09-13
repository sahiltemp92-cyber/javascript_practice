import Person from "./person.js";

class Pet extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName)
    }
    get location() {
        return "Home"
    }
}

let person = new Person("John", "David")
person.fullName()
person.location

let pet = new Pet("Tom", "Cat")
console.log(pet.fullName())
console.log(pet.location)