// server.js
const path = require('path')
const jsonServer = require('json-server')
const express = require('express')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
server.use(middlewares)

server.get('/api/images/:userId', function (req, res) {
  res.sendFile(path.join(__dirname, `../api/images/avatar/${req.params.userId}.webp`));
});
// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

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
server.use(router)
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log('JSON Server is running in http://localhost:3000')
})
