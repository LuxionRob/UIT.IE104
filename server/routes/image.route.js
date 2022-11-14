const express = require('express')
const router = express.Router()
const ImageController = require('../controllers/image.controller')

router.get('/users/:id', ImageController.getUserImage)
router.post('/users/:id', ImageController.updateUserImage)
router.get('/products/:id', ImageController.getProductImage)

module.exports = router
