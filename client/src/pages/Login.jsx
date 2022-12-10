import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../components/Auth'
const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

const Login = () => {
  const [curEmail, setCurEmail] = useState('nikalinhlan@nijigen.com')
  const [curPassword, setCurPassword] = useState('123456789')
  const [error, setError] = useState({})
  const { login } = useContext(AuthContext)
  const router = useNavigate()

  useEffect(() => {}, [])
  const onEmailChange = (e) => {
    setCurEmail(e.target.value)
  }
  const onPasswordChange = (e) => {
    setCurPassword(e.target.value)
  }
  const validate = (email, password) => {
    const errors = { status: 'OK', email: '', password: '' }
    if (!email) {
      errors.status = 'ERROR'
      errors.email = 'Email không được để trống!'
    } else if (!emailRegExp.test(email)) {
      errors.status = 'ERROR'
      errors.email = 'Địa chỉ email không hợp lệ!'
    }
    if (!password.length > 0) {
      errors.status = 'ERROR'
      errors.password = 'Mật khẩu không được để trống!'
    } else if (password.length < 6 || password.length > 24) {
      errors.status = 'ERROR'
      errors.password = 'Mật khẩu phải có từ 6 đến 24 kí tự!'
    }
    return errors
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const errors = validate(curEmail, curPassword)
    if (errors.status === 'ERROR') {
      setError(errors)
    } else {
      try {
        const resLogin = await login({
          email: curEmail,
          password: curPassword,
        })
        router('/')
      } catch (res) {
        if (res.response.data?.email) {
          errors.email = res.response.data?.email
          setError(errors)
        } else if (res.response.data?.password) {
          errors.password = res.response.data?.password
          setError(errors)
        }
      }
    }
  }

  return (
    <div className='max-w-screen flex h-screen items-center justify-center'>
      <div className='flex w-3/10 flex-col items-center justify-center rounded-lg border border-gray-400 px-16 py-8 shadow-md xl:w-7/10 lg:w-9/10 sm:px-4'>
        <div>
          <div className='flex items-center justify-center font-sans text-3xl font-bold text-primary'>FireTea.</div>
          <h1 className='mt-2 mb-8 text-center text-2xl'>Đăng nhập</h1>
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
        {error.email && <span className='self-start text-red-500'>{error.email}</span>}
        <input
          className='input my-1 w-full'
          placeholder='Mật khẩu'
          type='password'
          id='password'
          name='password'
          onChange={onPasswordChange}
          value={curPassword}
        />
        {error.password && <span className='self-start text-red-500'>{error.password}</span>}
        {/* <Link to='/forgot-password' className='text-primary self-start font-bold mt-2 mb-4'>
          Quên mật khẩu
        </Link> */}
        <div className='mt-2 flex w-full items-center justify-between'>
          <Link to='/sign-up' className='text-primary hover:bg-gray-300 hover:shadow-gray-300'>
            Tạo tài khoản
          </Link>
          <button onClick={handleSubmit} className='button-primary px-4 py-2'>
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  )
}
export default Login
