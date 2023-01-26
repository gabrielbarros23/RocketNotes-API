const sqliteConnection = require('../database/sqlite')


class userRepository {
    async findByEmail(email){
        const sqlite = await sqliteConnection()
        const user = await sqlite.get("SELECT * FROM users WHERE email = (?)", [email])

        return(user)
    }

    async create({name, email, password}){
        const sqlite = await sqliteConnection()
        const userId = await sqlite.run(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]
        ) 
        return(userId)
    }
}

module.exports = userRepository