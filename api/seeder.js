const fs = require('fs')
const path = require('path')
const users = require('./data/users.js')
const products = require('./data/products.js')

const start = () => {
  const db = {
    users,
    products,
  }
  // write db object to db.json
  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('Generate data successfully =))')
  })
}
start()
