import instance from './init'

export const getProductById = async (id) => {
  try {
    const productInfo = await instance.get(`/products/${id}`)
    return Promise.resolve(productInfo)
  } catch (error) {
    return Promise.reject(error)
  }
}
