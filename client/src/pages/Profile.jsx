import React, { useState, useEffect, useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { AuthContext } from '../components/Auth'
import ProductInfo from '../components/ProductInfo'
import { getUserById, updateUser } from '../api/user'

const Profile = () => {
  const [user, setUser] = useState({})
  const nameRef = useRef()
  const addressRef = useRef()
  const phoneNumberRef = useRef()
  const [popUp, setPopUp] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const { authenticatedAccount } = useContext(AuthContext)
  const navigate = useNavigate()

  const fetchUserInfo = async () => {
    try {
      const userInfo = await getUserById(authenticatedAccount.id)
      setUser(userInfo.data)
      console.log(userInfo.data)
      return Promise.resolve()
    } catch (error) {
      if (error.response) {
        navigate('/404')
      }
    }
  }

  useEffect(() => {
    fetchUserInfo()
  }, [])

  const toggleEditProfile = () => {
    setIsUpdating(true)
  }

  const checkChangedInput = () => {
    if (nameRef.current.value !== '') {
      return true
    }
    if (addressRef.current.value !== '') {
      return true
    }
    if (phoneNumberRef.current.value !== '') {
      return true
    }
    return false
  }

  const updateUserInfo = async () => {
    try {
      const newInfo = {
        ...user,
        name: nameRef.current.value,
        address: addressRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
      }
      setUser(newInfo)
      const res = await updateUser(newInfo)
      return Promise.resolve(res)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (checkChangedInput()) {
      updateUserInfo()
      setIsUpdating(false)
    } else {
      setIsUpdating(false)
    }
  }

  const onCancel = (e) => {
    e.preventDefault()
    if (checkChangedInput()) {
      setPopUp(true)
    } else {
      setIsUpdating(false)
    }
  }

  return (
    <div className='flex px-64 mb-16'>
      <div className='flex basis-1/3 flex-col items-center'>
        <img width='300' className='object-contain rounded-full' src={user.avatarImage} alt='avatar' />
        <span className='text-primary self-start font-bold text-2xl mt-8'>{user.name}</span>
        <div className='w-full'>
          {isUpdating ? (
            <form>
              <div className='flex flex-col mt-2'>
                <label htmlFor='name'>Tên</label>
                <input ref={nameRef} className='input rounded-md' name='name' id='name' type='text' placeholder='Tên' />
              </div>
              <div className='flex flex-col mt-2'>
                <label htmlFor='address'>Địa chỉ</label>
                <input
                  ref={addressRef}
                  className='input rounded-md'
                  name='address'
                  id='address'
                  type='text'
                  placeholder='Địa chỉ'
                />
              </div>
              <div className='flex flex-col mt-2'>
                <label htmlFor='phone-number'>Số điện thoại</label>
                <input
                  ref={phoneNumberRef}
                  className='input rounded-md'
                  name='phone-number'
                  id='phone-number'
                  type='number'
                  placeholder='Số điện thoại'
                />
              </div>
              <button className='button-primary px-8' onClick={onSubmit}>
                Save
              </button>
              <button className='button px-4 ml-1' onClick={onCancel}>
                Cancel
              </button>
            </form>
          ) : (
            <button onClick={toggleEditProfile} className='button w-full py-2 mt-4'>
              Sửa thông tin
            </button>
          )}
          {user.role === 'admin' && (
            <Link to='/admin' className='button w-full inline-block text-center py-2 mt-4'>
              Xem thống kê
            </Link>
          )}
        </div>
        <hr className='my-4 w-full' />
        {isUpdating || (
          <div className='self-start'>
            <span className='text-black font-bold text-xl mt-8'>Thông tin cá nhân</span>
            <ul>
              <li>Giới tính: {user.gender}</li>
              <li>Địa chỉ: {user.address}</li>
              <li>Số điện thoại: {user.phoneNumber}</li>
            </ul>
          </div>
        )}
      </div>
      <div className='ml-16 border-2 border-slate-200 w-full bg-opacity-50 rounded-md flex flex-col'>
        <h1 className='w-full py-4 text-center font-extrabold'>Lịch sử mua hàng</h1>
        <hr />
        <div className='my-4'>
          {user.history && user.history.map((product) => <ProductInfo key={product.id} productInfo={product} />)}
        </div>
        {user.history && user.history.length === 0 && (
          <div className='flex justify-center items-center grow flex-col'>
            <span>Hiện không có sản phẩm nào</span>
            <Link className='button-primary px-8 py-2 mt-4' to='/products'>
              Đi tới mua sắm
            </Link>
          </div>
        )}
      </div>
      {popUp && (
        <div className='fixed inset-0 bg-opacity-10 bg-black flex justify-center items-center'>
          <div className='bg-slate-100 w-3/10 h-3/10 border-2 shawdow-md flex flex-col items-center justify-center py-8 rounded-xl relative'>
            <h1 className='text-center font-bold text-xl'>Bạn có muốn hủy thay đổi không?</h1>
            <section className='mt-2'>Những thay đổi của bạn sẽ bị xóa!</section>
            <div className='flex justify-evenly w-full'>
              <button
                onClick={() => {
                  setPopUp(false)
                  setIsUpdating(false)
                }}
                className='button w-1/3'
              >
                Có
              </button>
              <button
                onClick={() => {
                  setPopUp(false)
                }}
                className='button-primary w-1/3'
              >
                Không
              </button>
            </div>
            <button
              onClick={() => {
                setPopUp(false)
              }}
              className='absolute top-4 right-4 text-3xl hover:text-primary leading-none'
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
export default Profile
