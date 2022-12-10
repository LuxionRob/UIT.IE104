import instance from './init'

export const getAllOrder = async () => {
  try {
    const res = await instance.get('/ordered').then((res) => res)
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const updateOrder = async (order) => {
  try {
    const res = await instance.put(`/ordered/${order.id}`, order)
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}
