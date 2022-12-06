import axios from 'axios'

const PORT = 3003
const instance = axios.create({
  baseURL: `http://localhost:${PORT}/api/`,
  timeout: 10000,
})

export default instance
