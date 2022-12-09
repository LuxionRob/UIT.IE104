import instance from './init'
import { getProductById } from './product'
import { getUserById } from './user'

export const updateCart = async (userInfo, cart) => {
  try {
    const userCart = userInfo.cart
    const needToChangeCart = cart.filter((v) => userCart.find((item) => item.id === v.id))
    const needToAddCart = cart.filter((v) => userCart.find((item) => item.id !== v.id))
    let output = [...userCart, ...needToAddCart]

    needToChangeCart.forEach((element) => {
      const index = output.findIndex((item) => item.id === element.id)
      output[index].quanity += element.quanity
    })
    const user = { ...userInfo, cart: output }
    console.log({ user })
    const res = await instance.put(`/users/${user.id}`, user)
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}
