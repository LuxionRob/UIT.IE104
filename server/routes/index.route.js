const jsonServer = require('json-server')
const router = jsonServer.router('db.json')
const imagesRouter = require('./image.route')

function routes(server) {
  router.render = (req, res) => {
    const headers = res.getHeaders()
    const totalCount = headers['x-total-count']
    if (req.originalMethod === 'GET' && totalCount) {
      const queryParams = queryString.parse(req._parsedOriginalUrl.query)
      const result = {
        data: res.locals.data,
        pagination: {
          _page: Number.parseInt(queryParams._page) || 1,
          _limit: Number.parseInt(queryParams._limit) || 10,
          _totalRows: Number.parseInt(totalCount),
        },
      }
      return res.jsonp(result)
    }
    res.jsonp(res.locals.data)
  }

  server.use('/api/images', imagesRouter)
  server.use('/api', router)

  server.use('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  })
}

module.exports = routes
