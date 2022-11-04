export class Question {
    constructor(type, name, message, choices) {
        this.type = type,
        this.name = name,
        this.message = message,
        this.choices = choices
     }
}

const userQuestions = new Question("input", "username", "Welcome to Tamagotchi! Please enter your name!", null)


console.log(userQuestions)

//  [
//     {
//         type: "input",
//         name: "username",
//         message: "Welcome to Tamagotchi! Please enter your name!",
//     },
//     {
//         type: "input",
//         name: "age",
//         message: "Please enter your age",
//     },
//     {
//         type: "input",
//         name: "location",
//         message: "Where are you located?",
//     },
// ]

// export const petQuestions = [
//     {
//         type: "input",
//         name: "petname",
//         message: "What would you like your tamagotchi to be named?",
//     },
//     {
//         type: "choices",
//         name: "petcolor",
//         message: "Please enter your age",
//     },
//     {
//         type: "input",
//         name: "location",
//         message: "Where are you located?",
//     },
// ]


