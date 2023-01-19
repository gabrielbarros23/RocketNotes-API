const knex = require("../database/knex")
const AppError = require('../utils/AppError')
const {compare} = require('bcryptjs')

class SessionsController {
    async create(req, res) {
        const {password, email} = req.body 

        const user = await knex('users').where({email}).first()

        if(!user){
            throw new AppError('Email ou senha incorreta', 401)
        }

        const passwordVerify = await compare(password, user.password)

        if(!passwordVerify) {
            throw new AppError('Email ou senha incorreta', 401)
        }

        return res.json(user)
    }
}

module.exports = SessionsController