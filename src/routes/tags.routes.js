const { Router } = require("express")
const tagsRouter = Router()

const TagsController = require("../controllers/TagsController")
const tagsController = new TagsController()
const ensureAutheticated = require('../middlewares/ensureAutheticated')




tagsRouter.get('/', ensureAutheticated, tagsController.index)



module.exports = tagsRouter