class Pet {
    constructor(name, size, colors, sound,) {
        this.name = name
        this.health = 100
        this.thirst = 100
        this.size = size
        this.colors = colors
        this.sound = sound
        this.clout = 1
        this.bag = 0
    }

    printStats() {
        console.log(`Hi my name is ${this.name} and I am your new Pet!
        My stats are as follows: 
        Health : ${this.health}
        Thirst : ${this.thirst}
        Size : ${this.size}
        Colors : ${this.colors}
        Sound : ${this.sound} 
        Clout : ${this.clout}
        Bag : ${this.bag}
        ----------------------------------------------------------------
        `)
        checkHealth()
    }
    makeSound() {
        console.log(this.sound)
    }
    pourUp() {
        this.bag -= 5
        this.clout += 5
        this.health -= 5
        this.thirst += 5
        console.log(`This double cup got ${this.name} faded`)
    }

    checkHealth(){
        this.health <= 50 
    }
}

const lilGotchi = new Pet("Lil' Gotchi", 99, ['purple', ' black', ' blue'], 'YEEET')

lilGotchi.printStats();
lilGotchi.pourUp();
lilGotchi.printStats();

module.exports = Pet