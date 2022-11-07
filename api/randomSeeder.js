const { faker } = require('@faker-js/faker')
const fs = require('fs')

const userList = (numberOfElement) => {
	return {
		username: 'Nika Linh Lan',
		password: '123456789'
	}
}
const productList = (numberOfElement) => {}

const start = () => {
  // random data
  const users = userList(4)
  const products = productList(5)

  // prepare db object
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
