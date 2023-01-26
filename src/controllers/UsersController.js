const AppError = require('../utils/AppError')
const {hash, compare} = require('bcryptjs')
const sqliteConnection = require('../database/sqlite')
const UserRepository = require('../repositories/userRepository') 
const UserCreateServices = require('../services/UserCreateServices')


class UsersController {
    async create(req, res) {
        const {name, email, password} = req.body

        const userRepository = new UserRepository()
        const userCreateServices = new UserCreateServices(userRepository)
        await userCreateServices.excute({name, email, password})

       
        return res.status(201).json()
    }
    async update(req, res) {
        const {name, email,password, oldpassword} = req.body
        const user_id = req.user.id

        const database = await sqliteConnection()
        const user = await database.get('SELECT * FROM users WHERE id = (?)', [user_id])

        if(!user) {
            throw new AppError('usuario não encontrado')
        }
        const userWithUpdateEmail = await database.get('SELECT * FROM users WHERE email = (?)', [email])

        if(userWithUpdateEmail && userWithUpdateEmail.id !== user.id) {
            throw new AppError('email ja em uso.')
        }

        if(password && oldpassword) {
            const checkOldPassword = await compare(oldpassword, user.password)
            console.log(checkOldPassword)
            if(!checkOldPassword) {
                throw new AppError('a senha antiga esta errada')
            }
            user.password = await hash(password, 8)
        }

        user.name = name ?? user.name
        user.email = email ?? user.email

        await database.run(`
        UPDATE users SET 
        name = ?, 
        email = ?,
        password = ?, 
        updated_at = DATETIME ('now')
        WHERE id = ?`, [user.name, user.email, user.password, user_id ])

        return res.status(201).json()
    } 
}
/*
    * Index - GET para listar vários registros.
    * Show - GET para exibir um registro especifico.
    * Create - POST para criar um registro.
    * Update - Put para atualizar um registro.
    * Delete - DELETE para remover um registro.
*/

module.exports = UsersController