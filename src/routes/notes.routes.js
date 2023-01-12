const { Router } = require("express")
const notesRouter = Router()

const NotesController = require("../controllers/NotesController")
const notesController = new NotesController()

// function myMiddleware(req, res, next) {
//     console.log("Voce passou no Middleware")
//     console.log(req.body)
    
//     if(!req.body.IsAdmin) {
//         return res.json({message: "You are not admin"})
//     }

//     next()
// }





notesRouter.get('/', notesController.index)
notesRouter.post('/:user_id', notesController.create)
notesRouter.get('/:id', notesController.show)
notesRouter.delete('/:id', notesController.delete)


module.exports = notesRouter