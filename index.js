import { promptNames } from "./game/game.js";
import User from "./lib/User.js"

const init = async () => {
    const answers = await promptNames()
    const user = new User(answers.username, answers.age, answers.location )
    console.log(user)
}


init()

