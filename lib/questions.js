

export const petCreate = [
    {
        type: "input",
        name: "name",
        message: "What would you like your tamagotchi to be named?",
    },
    {
        type: "input",
        name: "colors",
        message: "What colors do you want your tamagotchi to be?",
    },
    {
        type: "input",
        name: "greeting",
        message: "How does your pet say hello?",
    },
]

// export const petActions = [
//     {
//         type: "input",
//         name: "food",
//         message: "Feed?",
//     },
//     {
//         type: "input",
//         name: "drink",
//         message: "Drink?",
//     },
//     {
//         type: "input",
//         name: "sleep",
//         message: "sleep?",
//     },
// ]

export const petActions = [{
    type: "rawlist",
    name: "petActions",
    message: "What would you like to do?",
    choices: [
        "food",
        "drink",
        "sleep"]
}]

