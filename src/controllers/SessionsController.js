const knex = require("../database/knex")
const AppError = require('../utils/AppError')
const {compare} = require('bcryptjs')
const authConfig = require('../configs/auth')
const {sign} = require('jsonwebtoken')


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

        const {secret, expiresIn} = authConfig.jwt
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        })

        return res.json({token, user})
    }
}

module.exports = SessionsController