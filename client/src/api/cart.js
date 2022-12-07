import instance from './init'
import { getProductById } from './product'
import { getUserById } from './user'

export const updateCart = async (userId, productsId) => {
  try {
    const products = await Promise.all(
      productsId.map(async (productId) => {
        const res = await getProductById(productId)
        return res.data
      })
    )
    const userRes = await getUserById(userId)
    const user = userRes.data
    user.cart = products
    const res = await instance.put(`/users/${userId}`, user)
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}
