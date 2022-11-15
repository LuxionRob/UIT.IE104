import axios from 'axios'
require('dotenv').config()

const PORT = process.env.MODE === 'dev' ? process.env.DEV_PORT : process.env.PRODUCTION_PORT

const instance = axios.create({
  baseURL: `http://localhost:${PORT}/api/`,
  timeout: 1000,
})

export default instance
