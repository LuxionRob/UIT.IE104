const fs = require('fs')
const path = require('path')

class avatarController {
  index(req, res) {
    res.sendFile(path.join(__dirname, '../images/avatar/', req.params.userId + '.webp'))
  }
  getAll(req, res) {
    const pathAvatar = path.join(__dirname, '../images/avatar')
		const avatarArray = []
    fs.readdir(pathAvatar, function (error, files) {
      if (error) {
        onError(error)
        return
      }
      files.forEach((file) => {
				const filePath = path.join(__dirname, '../images/avatar/', file)
				avatarArray.push({
					id: file.split('.webp')[0],
					avatarUrl: filePath,
				})
      })
			res.send('avatar ne =))')
    })
  }
}

module.exports = new avatarController()
