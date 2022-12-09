import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../components/Auth'
const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

const Login = () => {
  const [curEmail, setCurEmail] = useState('nikalinhlan@nijigen.com')
  const [curPassword, setCurPassword] = useState('123456789')
  const [error, setError] = useState({})
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

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
      errors.password = 'Mât khẩu không được để trống!'
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
        const resLogin = await login({ email: curEmail, password: curPassword })
        navigate('/')
      } catch (res) {
        console.log(res)
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
