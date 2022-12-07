const path = require('path')

class productController {
  getUserImage(req, res) {
    res.sendFile(path.join(process.cwd(), 'images', 'avatars', req.params.id + '.webp'))
  }
  updateUserImage(req, res) {}
  getProductImage(req, res) {
    res.sendFile(path.join(process.cwd(), 'images', 'products', req.params.id + '.webp'))
  }
  getMemberImage(req, res) {
    res.sendFile(path.join(process.cwd(), 'images', 'member-avatars', req.params.id + '.webp'))
  }
}

module.exports = new productController()
