const queryString = require('query-string')
const jsonServer = require('json-server')
const imagesRouter = require('./image.route')
const authRouter = require('./auth.route')
const path = require('path')
const router = jsonServer.router(path.join(__dirname, '../tmp/db.json'))

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
          _limit: Number.parseInt(queryParams._limit) || 12,
          _totalRows: Number.parseInt(totalCount),
        },
      }
      return res.jsonp(result)
    }
    res.jsonp(res.locals.data)
  }

  server.use('/api/images', imagesRouter)
  server.use('/api/auth', authRouter)
  server.use('/api', router)

  server.use('*', function (req, res) {
    res.sendFile(path.join(process.cwd(), 'public', 'index.html'))
  })
}

module.exports = routes
