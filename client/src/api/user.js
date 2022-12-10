import instance from './init'

export const getUser = async () => {
  try {
    const res = await instance.get('/users').then((res) => res)
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const authLogin = async (data) => {
  try {
    const res = await instance.post('/auth/login', data)
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const authSignUp = async (data) => {
  try {
    const res = await instance.post('/auth/sign-up', data)
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const addUser = async (data) => {
  try {
    const res = await instance.post('/users', data)
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getUserById = async (id) => {
  try {
    const res = await instance.get(`/users/${id}`)
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const updateUser = async (user) => {
  try {
    const res = await instance.put(`/users/${user.id}`, user)
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}
