const registerValidator = require('../validations/authorization')
const loginValidator = require('../validations/authorization')
const userData = require('../data/users')
class userController {
  async authSignUp(request, response) {
    const { error } = registerValidator(request.body)

    if (error) return response.status(422).send(error.details[0].message)

    const checkEmailExist = userData.find((user) => user.email === request.body.email)
    if (checkEmailExist) return response.status(422).send('Email is exist')
    const createdAt = new Date()

    const user = {
      status: 200,
      id: userData.length + 1,
      email: request.body.email,
      password: request.body.password,
      createdAt: createdAt.toISOString(),
    }

    try {
      response.send(user)
    } catch (err) {
      response.status(400).send(err)
    }
  }
  async authLogin(request, response) {
    const { error } = loginValidator(request.body)

    if (error) return response.status(422).send(error.details[0].message)

    const checkEmailExist = userData.find((user) => user.email === request.body.email)
    if (!checkEmailExist) return response.status(422).send('Email is not exists!')
    const checkPassword = userData.find(
      (user) => user.email === request.body.email && user.password === request.body.password
    )
    if (!checkPassword) return response.status(422).send('Password is not correct!')

    const user = {
      status: 200,
      email: request.body.email,
      password: request.body.password,
    }

    try {
      response.send(user)
    } catch (err) {
      response.status(400).send(err)
    }
  }
}

module.exports = new userController()
