class Player {
    constructor(name, age, country) {
        this.name = name
        this.age = age
        this.country = country
    }

    display() {
        console.log(this.name + " is " + this.age + " years old and from " + this.country)
    }
}

class Batsman extends Player {
    constructor(name, age, country, runsScored, wicketsTaken) {
        super(name, age, country)
        this.runsScored = runsScored
        this.wicketsTaken = wicketsTaken
    }

    display() {
        console.log(this.name + " is " + this.age + " years old and from " + this.country + " has scored " + this.runsScored + " runs and taken " + this.wicketsTaken + " wickets")
    }
}

class Bowler extends Player {
    constructor(name, age, country, wicketsTaken, runsGiven) {
        super(name, age, country)
        this.wicketsTaken = wicketsTaken
        this.runsGiven = runsGiven
    }

    display() {
        console.log(this.name + " is " + this.age + " years old and from " + this.country + " has taken " + this.wicketsTaken + " wickets and given " + this.runsGiven + " runs")
    }
}

class WicketKeeper extends Player {
    constructor(name, age, country, catches, stumpings) {
        super(name, age, country)
        this.catches = catches
        this.stumpings = stumpings
    }

    display() {
        console.log(this.name + " is " + this.age + " years old and from " + this.country + " has taken " + this.catches + " catches and " + this.stumpings + " stumpings")
    }
}

let player = new Player("John", 25, "India")
player.display()
let batsman = new Batsman("John", 25, "India", 100, 10)
batsman.display()
let bowler = new Bowler("John", 25, "India", 10, 100)
bowler.display()
let wicketKeeper = new WicketKeeper("John", 25, "India", 10, 10)
wicketKeeper.display()