
import  carService  from "../services/carService.js"


const userController = {

    getList : async (req, res) => {
        carService.getList(req, res)
    },

    Register : async (req, res) => {
        carService.register(req, res)
    }
}

export default userController;