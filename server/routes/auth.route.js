const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/auth.controller')

router.post('/sign-up', AuthController.authSignUp)
router.post('/login', AuthController.authLogin)

module.exports = router
