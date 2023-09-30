import  userService  from "../services/userService.js"


const userController = {

    Register : async (req, res) => {
        userService.register(req, res)
    },

    Login : async (req, res) => {
        userService.login(req, res)
    }
}

export default userController;