import React, { useState } from 'react'
import { authSignUp, authLogin } from '../api/user'

export const AuthContext = React.createContext({})

export default function Auth({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const login = async (credentials) => {
    try {
      setIsLoading(true)
      authLogin(credentials).then(() => {
        setIsAuthenticated(true)
        setIsLoading(false)
        console.log('Login success')
      })
    } catch (error) {
      alert(error)
      setIsAuthenticated(false)
      setIsLoading(false)
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
      alert(error)
      setIsAuthenticated(false)
      setIsLoading(false)
    }
  }

  return <AuthContext.Provider value={{ isAuthenticated, isLoading, login, signUp }}>{children}</AuthContext.Provider>
}
