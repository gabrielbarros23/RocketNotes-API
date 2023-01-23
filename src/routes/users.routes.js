const { Router } = require("express")
const usersRouter = Router()

const UsersController = require("../controllers/UsersController")
const usersController = new UsersController()
const UserAvatarController = require("../controllers/UserAvatarController")
const userAvatarControllers = new UserAvatarController()
const ensureAutheticated = require('../middlewares/ensureAutheticated')
const multerConfig = require('../configs/upload')
const multer = require('multer')

const upload = multer(multerConfig.MULTER)




usersRouter.post('/', usersController.create)
usersRouter.put('/', ensureAutheticated, usersController.update)
usersRouter.patch('/avatar', ensureAutheticated, upload.single("avatar"), userAvatarControllers.update)


module.exports = usersRouter