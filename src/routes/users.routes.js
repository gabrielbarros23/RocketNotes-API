const { Router } = require("express")
const usersRouter = Router()

const UsersController = require("../controllers/UsersController")
const usersController = new UsersController()

// function myMiddleware(req, res, next) {
//     console.log("Voce passou no Middleware")
//     console.log(req.body)
    
//     if(!req.body.IsAdmin) {
//         return res.json({message: "You are not admin"})
//     }

//     next()
// }





usersRouter.post('/', usersController.create)
usersRouter.put('/:id', usersController.update)


module.exports = usersRouter