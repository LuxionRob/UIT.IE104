import instance from './init'

export const getAllOrder = async () => {
  try {
    const res = await instance.get('/ordered')
    return Promise.resolve(res.data)
  } catch (error) {
    return Promise.reject(error)
  }
}
