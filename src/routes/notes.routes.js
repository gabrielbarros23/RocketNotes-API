const { Router } = require("express")
const notesRouter = Router()

const NotesController = require("../controllers/NotesController")
const notesController = new NotesController()
const ensureAutheticated = require('../middlewares/ensureAutheticated')


notesRouter.use(ensureAutheticated)

notesRouter.get('/', notesController.index)
notesRouter.post('/', notesController.create)
notesRouter.get('/:id', notesController.show)
notesRouter.delete('/:id', notesController.delete)


module.exports = notesRouter