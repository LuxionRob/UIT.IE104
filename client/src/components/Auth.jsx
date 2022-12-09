import React, { useState } from 'react'
import { updateCart } from '../api/cart'
import { getUserById, authSignUp, authLogin, updateUser } from '../api/user'

export const AuthContext = React.createContext({})

export default function Auth({ children }) {
  const [authenticatedAccount, setAuthenticatedAccount] = useState(false)
  const [cart, setCart] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const login = async (credentials) => {
    try {
      setIsLoading(true)
      const account = await authLogin(credentials)
      let user = await getUserById(account.data.id)
      console.log({ user, cart })
      const res = await updateCart(user.data, cart)
      console.log(res.data)
      setAuthenticatedAccount(res.data)
      setIsLoading(false)
      return Promise.resolve(user)
    } catch (error) {
      console.log(error)
      setAuthenticatedAccount(false)
      setIsLoading(false)
      return Promise.reject(error)
    }
  }
  const signUp = async (credentials) => {
    try {
      setIsLoading(true)
      const res = await authSignUp(credentials)
      setIsLoading(false)
      return Promise.resolve(res)
    } catch (error) {
      setIsLoading(false)
      return Promise.reject(error)
    }
  }

  const signOut = () => {
    setAuthenticatedAccount(false)
    setCart([])
  }

  return (
    <AuthContext.Provider value={{ cart, setCart, authenticatedAccount, isLoading, login, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
