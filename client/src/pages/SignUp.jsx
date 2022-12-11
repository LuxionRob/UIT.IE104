import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../components/Auth'
import Loading from '../components/Loading'
import { addUser } from '../api/user'

const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

const SignUp = () => {
  const [curEmail, setCurEmail] = useState('nikalinhlan3@nijigen.com')
  const [curPassword, setCurPassword] = useState('12315434656')
  const [curRePassword, setRePassword] = useState('12315434656')
  const [error, setError] = useState({})
  const { signUp, isLoading } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {}, [])
  const onEmailChange = (e) => {
    setError({})
    setCurEmail(e.target.value)
  }
  const onPasswordChange = (e) => {
    setError({})
    setCurPassword(e.target.value)
  }
  const onRePasswordChange = (e) => {
    setError({})
    setRePassword(e.target.value)
  }
  const validate = () => {
    const errors = { status: 'OK', email: '', password: '', rePassword: '' }
    if (!curEmail) {
      errors.status = 'ERROR'
      errors.email = 'Email không được để trống!'
    } else if (!emailRegExp.test(curEmail)) {
      errors.status = 'ERROR'
      errors.email = 'Địa chỉ email không hợp lệ!'
    }
    if (!curPassword.length > 0) {
      errors.status = 'ERROR'
      errors.password = 'Mật khẩu không được để trống!'
    } else if (curPassword.length < 6 || curPassword.length > 24) {
      errors.status = 'ERROR'
      errors.password = 'Mật khẩu phải có từ 6 đến 24 kí tự!'
    }
    if (!curRePassword.length > 0) {
      errors.status = 'ERROR'
      errors.rePassword = 'Mật khẩu không được để trống!'
    } else if (curPassword !== curRePassword) {
      errors.status = 'ERROR'
      errors.rePassword = 'Mật khẩu nhập lại không giống nhau'
    }
    return errors
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = validate()
    if (errors.status === 'ERROR') {
      setError(errors)
    } else {
      try {
        const signUpRes = await signUp({
          email: curEmail,
          password: curPassword,
        })
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
  const handleBlur = () => {
    const errors = validate()
    setError(errors)
  }
  return (
    <div className='max-w-screen flex h-screen items-center justify-center'>
      <div className='flex w-3/10 flex-col items-center justify-center rounded-lg border border-gray-400 px-16 py-8 shadow-md xl:w-9/10 sm:px-4'>
        <div>
          <div className='flex items-center justify-center font-sans text-3xl font-bold text-primary'>FiveTea.</div>
          <h1 className='mt-2 mb-8 text-center text-2xl'>Đăng ký</h1>
        </div>
        <input
          className='input my-1 w-full'
          placeholder='Email'
          type='text'
          id='email'
          name='email'
          onChange={onEmailChange}
          onBlur={handleBlur}
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
          onBlur={handleBlur}
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
          onBlur={handleBlur}
          value={curRePassword}
        />
        {error.rePassword && <span className='self-start text-red-500'>{error.rePassword}</span>}
        <div className='mt-4 flex w-full flex-col items-center justify-between'>
          <button
            onClick={handleSubmit}
            className='button-primary px-8 py-3 xl:px-4 xl:py-2'
            disabled={error.status === 'ERROR' ? true : false}
          >
            Tạo tài khoản
          </button>
          <hr className='mt-8 h-[2px] w-5/10 bg-primary' />
          <span className='mt-2 font-bold text-primary'>Bạn đã có tài khoản rồi?</span>
          <Link to='/login' className='button mt-2 px-4 py-2'>
            Đăng nhập
          </Link>
        </div>
      </div>
      {isLoading && <Loading type='solid' />}
    </div>
  )
}
export default SignUp
