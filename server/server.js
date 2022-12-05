const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const routes = require('./routes/index.route')
require('dotenv').config()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

// Config router
server.use(
  jsonServer.rewriter({
    '/api/users\\?id=:id': 'api/user/:id',
    '/blog/:resource/:id/show': '/:resource/:id',
  })
)

// Use default router
routes(server)
const PORT = 3003
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
