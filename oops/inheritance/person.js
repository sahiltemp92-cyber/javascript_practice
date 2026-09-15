class Person {
    constructor(name, age) {
        this.age = age
        this.name = name
    }

    // method to get person details
    getDetails() {
        return `Name: ${this.name}, age: ${this.name}`;
    }
}

export default Person;