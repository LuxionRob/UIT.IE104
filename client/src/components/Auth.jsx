import React, { useState } from 'react'
import { getUserById, authSignUp, authLogin } from '../api/user'

export const AuthContext = React.createContext({})

export default function Auth({ children }) {
  const [authenticatedAccount, setAuthenticatedAccount] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const login = async (credentials) => {
    try {
      setIsLoading(true)
      const info = await authLogin(credentials)
      const user = await getUserById(info.data.id)
      setAuthenticatedAccount(user.data)
      setIsLoading(false)
      return Promise.resolve(user)
    } catch (error) {
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
  }

  return (
    <AuthContext.Provider value={{ authenticatedAccount, login, isLoading, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
