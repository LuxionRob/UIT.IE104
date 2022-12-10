import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../components/Auth'
import { addUser } from '../api/user'
const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

const Register = () => {
  const [curEmail, setCurEmail] = useState('nikalinhlan3@nijigen.com')
  const [curPassword, setCurPassword] = useState('12315434656')
  const [curRePassword, setRePassword] = useState('12315434656')
  const [error, setError] = useState({})
  const { signUp } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {}, [])
  const onEmailChange = (e) => {
    setCurEmail(e.target.value)
  }
  const onPasswordChange = (e) => {
    setCurPassword(e.target.value)
  }
  const onRePasswordChange = (e) => {
    setRePassword(e.target.value)
  }
  const validate = (email, password, rePassword) => {
    const errors = { status: 'OK', email: '', password: '', rePassword: '' }
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
    if (!rePassword.length > 0) {
      errors.status = 'ERROR'
      errors.rePassword = 'Mật khẩu không được để trống!'
    } else if (password !== rePassword) {
      errors.status = 'ERROR'
      errors.rePassword = 'Mật khẩu nhập lại không giống nhau'
    }
    return errors
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = validate(curEmail, curPassword, curRePassword)
    if (errors.status === 'ERROR') {
      setError(errors)
    } else {
      try {
        const signUpRes = await signUp({ email: curEmail, password: curPassword })
        const userInfo = {
          ...signUpRes.data,
          adderss: '',
          phoneNumber: '',
          avatarImage: 'http://localhost:3003/api/images/users/0',
          role: 'user',
          cart: [],
          gender: '',
          name: '',
        }
        await addUser(userInfo)
        alert('Sign up success! Go to login to continue!')
        navigate('/login')
      } catch (res) {
        if (Number.parseInt(res.response.status) === 422) {
          if (res.response.data.email) {
            errors.status = 'ERROR'
            errors.email = res.response.data.email
          } else if (res.response.data.password) {
            errors.status = 'ERROR'
            errors.password = res.response.data.password
          }
          setError(errors)
        } else {
          navigate('/404')
        }
      }
    }
  }

  return (
    <div className='h-screen max-w-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center border-gray-400 border shadow-md px-16 py-8 w-3/10 rounded-lg xl:w-9/10 sm:px-4'>
        <div>
          <div className='flex justify-center items-center font-sans font-bold text-primary text-3xl'>FireTea.</div>
          <h1 className='text-2xl text-center mt-2 mb-8'>Đăng ký</h1>
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
        <input
          className='input my-1 w-full'
          placeholder='Nhập lại mật khẩu'
          type='password'
          id='re-password'
          name='re-password'
          onChange={onRePasswordChange}
          value={curRePassword}
        />
        {error.rePassword && <span className='self-start text-red-500'>{error.rePassword}</span>}
        <div className='flex flex-col justify-between items-center w-full mt-4'>
          <button onClick={handleSubmit} className='button-primary px-8 py-3 xl:px-4 xl:py-2'>
            Tạo tài khoản
          </button>
          <hr className='bg-primary h-[2px] mt-8 w-5/10' />
          <span className='mt-2 text-primary font-bold'>Bạn đã có tài khoản rồi?</span>
          <Link to='/login' className='button px-4 py-2 mt-2'>
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Register
