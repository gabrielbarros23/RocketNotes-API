const { Router } = require("express")
const tagsRouter = Router()

const TagsController = require("../controllers/TagsController")
const tagsController = new TagsController()

// function myMiddleware(req, res, next) {
//     console.log("Voce passou no Middleware")
//     console.log(req.body)
    
//     if(!req.body.IsAdmin) {
//         return res.json({message: "You are not admin"})
//     }

//     next()
// }





tagsRouter.get('/:user_id', tagsController.index)



module.exports = tagsRouter