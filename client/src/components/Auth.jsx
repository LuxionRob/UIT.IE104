import React, { useState } from 'react'
import { authSignUp, authLogin } from '../api/user'

export const AuthContext = React.createContext({})

export default function Auth({ children }) {
  const [authenticatedAccount, setAuthenticatedAccount] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const login = async (credentials) => {
    try {
      setIsLoading(true)
      const res = await authLogin(credentials)
      setAuthenticatedAccount(res.data)
      setIsLoading(false)
      return Promise.resolve(res)
    } catch (error) {
      setAuthenticatedAccount(null)
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

  return (
    <AuthContext.Provider value={{ authenticatedAccount, isLoading, login, signUp }}>{children}</AuthContext.Provider>
  )
}
