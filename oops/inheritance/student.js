import Person from './person.js'


class Student extends Person {
    constructor(name, age, grade) {
        super(name, age)
        this.grade = grade
    }

    getStudentDetails() {
        const parentDetails = super.getDetails()
        return `${parentDetails}, grade: ${this.grade}`
    }
}

export default Student;