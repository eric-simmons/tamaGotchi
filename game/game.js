import fs from 'fs'
import inquirer from 'inquirer'
import { userQuestions } from './questions.js'
// const Pet = require('../lib/Pet')
// const User = require('../lib/User')
// const Food = require('../lib/Food')
// const Drink = require('../lib/Drink')


export const promptNames = async () => {
    try {
        const answers = await inquirer.prompt(userQuestions)
        return answers
    }
    catch (error) {
        console.log(error)
    }
}

