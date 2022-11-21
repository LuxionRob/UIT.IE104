import { config } from 'dotenv'
config()
const PORT = process.env.MODE === 'dev' ? process.env.DEV_PORT : process.env.PRODUCTION_PORT

module.exports = [
  {
    id: 1,
    name: 'Nika Linh Lan',
    address: 'Phòng 1, Tầng 82, Landmark 81',
    phoneNumber: '0777777777',
    gender: 'male',
    email: 'nikalinhlan@nijigen.com',
    avatarImage: `http://localhost:${PORT}/api/images/users/1`,
    username: 'nikalinhlanvjppro123',
    password: '123456789',
    role: 'admin',
    cart: [2],
  },
  {
    id: 2,
    name: 'Bao The Whale',
    address: 'Phòng 2, Tầng 82, Landmark 81',
    phoneNumber: '0888888888',
    gender: 'female',
    email: 'whalewolfwolf@whale52hz.com',
    avatarImage: `http://localhost:${PORT}/api/images/users/2`,
    username: 'simpmoiminhem',
    password: '123456789',
    role: 'user',
    cart: [],
  },
  {
    id: 3,
    name: 'Hibiki Duca',
    address: 'Phòng 3, Tầng 82, Landmark 81',
    phoneNumber: '0999999999',
    gender: 'female',
    email: 'ducacuca@cockroache.com',
    avatarImage: `http://localhost:${PORT}/api/images/users/3`,
    username: 'chuateancap',
    password: '123456789',
    role: 'user',
    cart: [],
  },
]
