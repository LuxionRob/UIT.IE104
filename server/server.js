// server.js
const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/images/:userId', function (req, res) {
  res.sendFile(path.join(__dirname, `../api/images/avatar/${req.params.userId}.webp`))
})

// app.use('/api', router)
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
  
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('JSON Server is running in http://localhost:3000')
})
