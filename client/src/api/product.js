import instance from './init'

export const getAllProduct = async () => {
  try {
    const productInfo = await instance.get('/products')
    return Promise.resolve(productInfo)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getPagedProduct = async (params) => {
  try {
    const productInfo = await instance.get('/products', { params })
    return Promise.resolve(productInfo)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getProductWithCondition = async (params) => {
  try {
    const productInfo = await instance.get('/products', { params })
    return Promise.resolve(productInfo)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getProductById = async (id) => {
  try {
    const productInfo = await instance.get(`/products/${id}`)
    return Promise.resolve(productInfo)
  } catch (error) {
    return Promise.reject(error)
  }
}
