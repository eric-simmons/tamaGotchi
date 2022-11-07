
import inquirer from 'inquirer'
import { petCreate } from './lib/questions.js'
import { petActions } from './lib/questions.js'
import Pet from "./lib/Pet.js"



const init = async () => {
    try {
        const petAnswers = await inquirer.prompt(petCreate)
        const pet = new Pet(petAnswers.name, petAnswers.colors, petAnswers.greeting)
        console.log(pet.printStats())
        pet.live()

        const petAction = await inquirer.prompt(petActions)
        // console.log(petAction)
    }
    catch (error) {
        console.log('There was an error', error)
    }




   

}



init()



