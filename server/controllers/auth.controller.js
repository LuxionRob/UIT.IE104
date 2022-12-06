const userData = require('../data/users')
class userController {
  async authSignUp(request, response) {
    const checkEmailExist = userData.find((user) => user.email === request.body.email)
    if (checkEmailExist) return response.status(422).send({ email: 'Email is exist' })
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
    const checkEmailExist = userData.find((user) => user.email === request.body.email)
    if (!checkEmailExist) return response.status(422).send({ email: 'Email is not exists!' })
    const userInfo = userData.find(
      (user) => user.email === request.body.email && user.password === request.body.password
    )
    if (!userInfo) return response.status(422).send({ password: 'Password is not correct!' })

    const user = {
      status: 200,
      email: request.body.email,
      role: userInfo.role,
    }

    try {
      response.send(user)
    } catch (err) {
      response.status(400).send(err)
    }
  }
}

module.exports = new userController()
