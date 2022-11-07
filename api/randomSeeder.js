const { faker } = require('@faker-js/faker')
const fs = require('fs')

const userList = (numberOfElement) => {
  return {
    userId: 1,
    username: 'nikalinhlanvjppro123',
    password: '123456789',
  }
}
const productList = (numberOfElement) => {
  return [
    {
      id: 1,
      type: 'milk tea',
      name: "Lan's milk tea",
      price: 999.999,
      description: 'Đây là sữa của Tinh linh, rất ngon.',
    },
    {
      id: 2,
      type: 'milk tea',
      name: "Whale's milk tea",
      price: 999999999,
      description: 'Sữa của tinh linh gọi sữa cá voi bằng cụ. <(")',
    },
  ]
}
const userInfo = (numberOfElement) => {
  return [
    {
      userId: 1,
      name: 'Nika Linh Lan',
      address: 'Phòng 1, Tầng 82, Landmark 81',
      phoneNumber: '0922338756',
      gender: 'male',
      email: 'nikalinhlan@nijigen.com',
      aveUrl: '../frontend/src/images/ava/lankuto.png',
    },
    {
      userId: 2,
      name: 'Bao The Whale',
      address: 'Phòng 2, Tầng 82, Landmark 81',
      phoneNumber: '0922338757',
      gender: 'animal',
      email: 'whalewolfwolf@whale52hz.com',
      aveUrl: '../frontend/src/images/ava/baoshort.png',
    },
  ]
}

const start = () => {
  // random data
  const users = userList(4)
  const products = productList(5)
  const userInfos = userInfo(1)

  // prepare db object
  const db = {
    users,
    products,
    userInfos,
  }

  // write db object to db.json
  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('Generate data successfully =))')
  })
}
start()
