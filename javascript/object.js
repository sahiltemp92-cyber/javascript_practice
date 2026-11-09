// Object in Javascript

// object person with properties
let person = {
    firstName: "Tim",
    lastName: "Johan",
    age: 25,
    salary: 50000,
    fullName: function () {
        return (this.firstName + " " + this.lastName)
    }
}

// access the properties of object
console.log(person.fullName())
console.log(person.lastName)
console.log(person['lastName'])

// modify the properties of object
person.firstName = "Tim Dane"
console.log(person['firstName'])

// add the properties of object
person.gender = "male"
console.log(person)

// delete the properties of object
delete person.gender
console.log(person)

// check if gender property is there in object
console.log("gender" in person)

// loop through the properties of object
for (let key in person) {
    console.log(person[key])
}