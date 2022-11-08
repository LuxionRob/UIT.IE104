const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
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

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// Use default router
server.use('/api', router)

server.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000')
})
