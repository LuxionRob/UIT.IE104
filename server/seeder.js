const fs = require('fs')
const { faker } = require('@faker-js/faker')
const userList = require('./data/users')
const productList = require('./data/products')
const orderedList = require('./data/order')

function generateUserList() {
  userList.map((user) => {
    user.createAt = faker.date.past(2)
  })
  return userList
}

function generateProductList() {
  productList.map((product) => {
    product.createAt = faker.date.past(5)
  })
  return productList
}

function generateOrderedList() {
  orderedList.map((product) => {
    product.ordered = Array(10000)
      .fill(0)
      .map((_) => {
        return {
          orderedAt: faker.date.past(3),
          quanity: Math.floor(Math.random() * 20),
        }
      })
  })
  return orderedList
}

function start() {
  const users = generateUserList()
  const products = generateProductList()
  const ordered = generateOrderedList()
  const db = {
    users,
    products,
    ordered,
  }

  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('Generate data successfully =))')
  })
}

start()
