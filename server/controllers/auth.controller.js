const fs = require('fs')
const path = require('path')
class userController {
  async authSignUp(request, response) {
    const db = fs.readFileSync(path.resolve(process.cwd(), 'db.json'))
    const userList = JSON.parse(db).users
    const checkEmailExist = userList.find((user) => user.email === request.body.email)
    if (checkEmailExist) return response.status(422).send({ email: 'Địa chỉ email đã tồn tại!' })

    const createdAt = new Date()
    const user = {
      email: request.body.email,
      password: request.body.password,
      createdAt: createdAt.toISOString(),
    }

    try {
      response.send(user)
    } catch (err) {
      response.status(404).send(err)
    }
  }
  async authLogin(request, response) {
    const db = fs.readFileSync(path.resolve(process.cwd(), 'db.json'))
    const userList = JSON.parse(db).users
    const checkEmailExist = userList.find((user) => user.email === request.body.email)
    if (!checkEmailExist) return response.status(422).send({ email: 'Địa chỉ email không chính xác!' })
    const userInfo = userList.find(
      (user) => user.email === request.body.email && user.password === request.body.password
    )
    if (!userInfo) return response.status(422).send({ password: 'Mật khẩu không chính xác' })

    const user = {
      id: userInfo.id,
      email: request.body.email,
      role: userInfo.role,
    }

    try {
      response.send(user)
    } catch (err) {
      response.status(404).send(err)
    }
  }
}

module.exports = new userController()
