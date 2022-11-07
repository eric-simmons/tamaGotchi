class Pet {
    constructor(name, colors, greeting,) {
        this.name = name
        this.colors = colors
        this.greeting = greeting
        this.health = 10
        this.hunger = 0
        this.thirst = 0
        this.clout = 1
        this.bag = 0
        this.age = 0
    }
}
Pet.prototype.checkHealth = function () {
    if (this.health <= 50)
        console.log(`${this.name} isn't doing so hot`)
    else if (this.health <= 0) {
        console.log(`${this.name} has died :'( )`)
        clearInterval(gameClock)
    }
    else console.log(`${this.name} is feeling good`)
}
Pet.prototype.printStats = function () {
    console.log(`Hi my name is ${this.name} and I am your new Pet!
    My stats are as follows: 
    Colors : ${this.colors}
    Greeting : ${this.greeting} 
    Health : ${this.health}
    Hunger : ${this.hunger}
    Thirst : ${this.thirst}
    Clout : ${this.clout}
    Bag : ${this.bag}
    Age : ${this.age}
    --------------------------------------------------------------- `
    )
}
Pet.prototype.stateCheck = function () {
    if (petActions.petActions = "food") { pet.hunger -= 2, pet.health += 2 }
    else if (petActions.petActions = "drink") { pet.thirst -= 2, pet.health += 2 }
    else if (petActions.petActions = "sleep") { pet.health += 5 }
}
Pet.prototype.heartbeat = function () {
    this.health -= 1
    this.thirst += 1
    this.hunger += 1
    this.clout -= 1
    this.age += 0.1
}
Pet.prototype.greeting = function () {
    console.log(this.greeting)
}
Pet.prototype.live = function () {
    const gameClock = setInterval(() => {
        this.heartbeat()
        this.checkHealth()
        if (this.health <= 0) {
            clearInterval(gameClock)
            console.log(`${this.name} has died! :'( `)
        }
    }, 10000)
}

export default Pet


// lilGotchi.printStats();
// lilGotchi.pourUp();
// lilGotchi.checkHealth();
// lilGotchi.printStats();
