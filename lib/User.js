class User {
    constructor(name, age, location) {
        this.name = name
        this.age = age
        this.location = location
    }

    makeFood(){
        console.log(`Making Food`)
    }

    makeDrink(){
        console.log(`Making a Drink`)
    }
    putToSleep(){
        console.log(`Put to sleep`)
    }
}

module.exports = User