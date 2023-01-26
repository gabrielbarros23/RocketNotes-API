const AppError = require('../utils/AppError')
const {hash} = require('bcryptjs')

class UserCreateServices {
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async excute({name, email, password}){

        const checkUserEmail = await this.userRepository.findByEmail(email)
        
        if(checkUserEmail) {
            throw new AppError("esse email ja esta em uso.")
        }
        if(!name) {
            throw new AppError("nome é obrigatorio")
        }

        const hashedPassword = await hash(password, 8)

        const userCreated = await this.userRepository.create({name, email, password: hashedPassword})

        return userCreated
    }

}

module.exports = UserCreateServices