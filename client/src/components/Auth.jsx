import React, { useState } from 'react'
import { authSignUp, authLogin } from '../api/user'

export const AuthContext = React.createContext({})

export default function Auth({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const login = async (credentials) => {
    try {
      setIsLoading(true)
      const res = await authLogin(credentials)
      setIsAuthenticated(true)
      setIsLoading(false)
      return Promise.resolve(res)
    } catch (error) {
      setIsAuthenticated(false)
      setIsLoading(false)
      return Promise.reject(error)
    }
  }
  const signUp = (credentials) => {
    try {
      setIsLoading(true)
      authSignUp(credentials).then(() => {
        setIsAuthenticated(true)
        setIsLoading(false)
      })
    } catch (error) {
      setIsAuthenticated(false)
      setIsLoading(false)
    }
  }

  return <AuthContext.Provider value={{ isAuthenticated, isLoading, login, signUp }}>{children}</AuthContext.Provider>
}
