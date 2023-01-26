const UserCreateServices = require('./UserCreateServices')
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory")
const AppError = require('../utils/AppError')
describe("UserCreateServices",() => {
    let userRepositoryInMemory = null
    let userCreateServices = null

    .beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory()
        userCreateServices = new UserCreateServices(userRepositoryInMemory)
    })

    it("user should be create", async () => {
        const user = {
            name:"teste",
            email:"user@teste.com",
            password:"123"
        }
        
        const userCreated = await userCreateServices.excute(user)
    
        expect(userCreated).toHaveProperty("id")
    })

    it("user not should be create with exists email", async () => {
        const user1 = {
            name:"user1",
            email:"user@teste.com",
            password:"123"
        }
        const user2 = {
            name:"user2",
            email:"user@teste.com",
            password:"456"
        }

        await userCreateServices.excute(user1)

        await expect(userCreateServices.excute(user2)).rejects.toEqual(new AppError("esse email ja esta em uso."))
    })
})