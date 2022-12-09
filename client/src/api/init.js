import axios from 'axios'

const PORT = 3003
const instance = axios.create({
  baseURL: `http://localhost:${PORT}/api/`,
  timeout: 1000,
})

export default instance
