// server.js
const path = require('path')
const express = require('express')
const morgan = require('morgan')

const router = require('./router')
const app = express()
morgan('tiny')
app.use(express.static(path.join(__dirname, 'public')))


router(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('JSON Server is running in http://localhost:3000')
})
