
import  inspectionService  from "../services/inspectionService.js"


const inspectionController = {

    Register : async (req, res) => {
        inspectionService.register(req, res)
    },

    Login : async (req, res) => {
        userService.login(req, res)
    }
}

export default inspectionController;