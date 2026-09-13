/*
What is Inheritance?
Inheritance is a mechanism in which one class acquires the properties of another class. 
The class whose properties are acquired is called the parent class (or superclass or base class), 
and the class that acquires the properties is called the child class (or subclass or derived class).
*/
class Car { // parent class 
    constructor(brand, color) {
        this.brand = brand
        this.color = color
    }

    display() {
        console.log(this.brand + " is " + this.color)
    }
}

class ElectricCar extends Car { // child class
    constructor(brand, color, batterySize) {
        super(brand, color)
        this.batterySize = batterySize
    }

    display() {
        console.log(this.brand + " is " + this.color + " and " + this.batterySize)
    }
}

let car = new Car("Tesla", "Red") // object creation
car.display()
let electricCar = new ElectricCar("Tesla", "Red", "100kWh") // object creation
electricCar.display()