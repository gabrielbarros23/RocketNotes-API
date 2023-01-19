const {Router} = require("express")
const routes = Router()

const usersRouter = require("./users.routes.js")
const notesRouter = require("./notes.routes.js")
const tagsRouter = require("./tags.routes.js")
const sessionsRouter = require("./sessions.routes.js")

    
routes.use("/users", usersRouter)
routes.use("/notes", notesRouter)
routes.use("/tags", tagsRouter)
routes.use("/sessions", sessionsRouter)

module.exports = routes