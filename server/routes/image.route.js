const express = require('express')
const router = express.Router()
const ImageController = require('../controllers/image.controller')

router.get('/users/:id', ImageController.getUserImage)
router.post('/users/:id', ImageController.updateUserImage)
router.get('/products/:id', ImageController.getProductImage)
router.get('/members/:id', ImageController.getMemberImage)
router.get('/logo', ImageController.getLogo)

module.exports = router
