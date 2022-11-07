const avatar = require('./avatar')

const BASE_URL = '/api'

function router(app) {
  app.use(BASE_URL + '/avatar', avatar)
  app.use('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
  })
}

module.exports = router
