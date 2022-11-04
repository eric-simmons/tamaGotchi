import User from "../lib/User.js"
const food = document.getElementById('food')
const drink = document.getElementById('drink')
const sleep = document.getElementById('sleep')

console.log(User)

const makeFood = () => {
    console.log('making food')
}
const makeDrink = () => {
    console.log('making drink')
}
const makeSleep = () => {
    console.log('go to sleep')
}





food.addEventListener('click', makeFood)
drink.addEventListener('click', makeDrink)
sleep.addEventListener('click', makeSleep)