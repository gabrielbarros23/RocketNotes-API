const {Router} = require('express')
const sessionsroute = Router()

const SessionsController = require('../controllers/SessionsController')
const sessionsController = new SessionsController()

sessionsroute.post('/', sessionsController.create)

module.exports = sessionsroute
