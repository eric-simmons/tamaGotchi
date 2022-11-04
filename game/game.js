import fs from 'fs'
import inquirer from 'inquirer'

const Pet = require('../lib/Pet')
const User = require('../lib/User')
const Food = require('../lib/Food')
const Drink = require('../lib/Drink')


inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "Welcome to Tamagotchi! Please enter your name!",
        },
    ])
    .then((answers) => {
     console.log(answers)
    })
    .catch((error) => {
        if (error) throw error
        else console.log("hey! no errors")
    });