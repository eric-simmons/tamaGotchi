import fs from 'fs'
import inquirer from 'inquirer'

// const Pet = require('../lib/Pet')
// const User = require('../lib/User')
// const Food = require('../lib/Food')
// const Drink = require('../lib/Drink')
const gameQuestions = [
    {
        type: "input",
        name: "username",
        message: "Welcome to Tamagotchi! Please enter your name!",
    },
]

export const promptNames = async () => {
    try {
        const answers = await inquirer.prompt([
            gameQuestions[0],
        ])
        return answers
    }
    catch (error) {
        console.log(error)
    }
}

