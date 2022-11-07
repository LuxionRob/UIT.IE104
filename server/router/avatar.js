const express = require('express')
const router = express.Router()
const AvatarController = require('../controller/avatarController')

router.get('/', AvatarController.getAll)
router.get('/:userId', AvatarController.index)

module.exports = router
