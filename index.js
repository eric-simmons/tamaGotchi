import { promptNames } from "./game/game.js";
import User from "./lib/User.js"

const init = async () => {
    const answers = await promptNames()
    console.log(answers)
    const user = new User(answers.username, answer.age, )
    console.log(user)

}


init()

