import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../components/Auth'

const Login = () => {
  const [curEmail, setCurEmail] = useState('nikalinhlan@nijigen.com')
  const [curPassword, setCurPassword] = useState('123456789')
  const { login, isAuthenticated } = useContext(AuthContext)

  useEffect(() => {}, [])
  const onEmailChange = (e) => {
    setCurEmail(e.target.value)
  }
  const onPasswordChange = (e) => {
    setCurPassword(e.target.value)
  }
  const handleSubmit = () => {
    login({ email: curEmail, password: curPassword })
    alert(isAuthenticated)
  }

  return (
    <div className='h-screen max-w-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center border-gray-400 border shadow-md px-16 py-8 w-3/10 rounded-lg'>
        <div>
          <img
            src='http://localhost:3003/api/images/logo'
            alt='Logo'
            className='object-contain object-center'
            width='200'
          />
          <h1 className='text-2xl text-center mt-2 mb-8'>Đăng nhập</h1>
        </div>
        <input
          className='input my-1 w-full'
          placeholder='Email'
          type='text'
          id='email'
          name='email'
          onChange={onEmailChange}
          value={curEmail}
        />
        <input
          className='input my-1 w-full'
          placeholder='Mật khẩu'
          type='password'
          id='password'
          name='password'
          onChange={onPasswordChange}
          value={curPassword}
        />
        <Link to='/forgot-password' className='text-primary self-start font-bold mt-2 mb-4'>
          Quên mật khẩu
        </Link>
        <div className='flex justify-between items-center w-full'>
          <Link to='/sign-up' className='text-primary hover:bg-gray-300 hover:shadow-gray-300'>
            Tạo tài khoản
          </Link>
          <button onClick={handleSubmit} className='text-white w-32 text-center rounded-lg py-1 bg-primary'>
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  )
}
export default Login
