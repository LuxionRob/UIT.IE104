const express = require('express')
const router = express.Router()
const ImageController = require('../controllers/image.controller')

router.get('/users/:id', ImageController.getUserImage)
router.post('/users/:id', ImageController.updateUserImage)
router.get('/products/:id', ImageController.getProductImage)
router.get('/member-avatars/:id', ImageController.getMemberImage)

module.exports = router
