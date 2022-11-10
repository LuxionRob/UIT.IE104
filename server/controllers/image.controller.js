const path = require('path')

class productController {
  getUserImage(req, res) {
    res.sendFile(path.join(process.cwd(), 'images', 'avatars', req.params.id + '.webp'))
  }
  updateUserImage(req, res) {}
  getAllProductImage(req, res) {}
  getProductImage(req, res) {}
  updateProductImage(req, res) {}
}

module.exports = new productController()
