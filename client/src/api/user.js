import instance from './init'

export const getUser = async () => {
  try {
    const data = await instance.get('users').then((res) => res)
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}

export const authLogin = async ({ email, password }) => {
  try {
    const data = await instance
      .post('/auth/login', {
        email,
        password,
      })
      .then((res) => res)
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}

export const authSignUp = async ({ email, password }) => {
  try {
    const data = await instance
      .post('auth/sign-up', {
        email,
        password,
      })
      .then((res) => res)
    return data
  } catch (error) {}
}
