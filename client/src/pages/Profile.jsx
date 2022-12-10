import React, { useState, useEffect, useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { AuthContext } from '../components/Auth'
import ProductInfo from '../components/ProductInfo'
import { getUserById, updateUser } from '../api/user'

const Profile = () => {
  const [user, setUser] = useState({})
  const [userInfo, setUserInfo] = useState({})
  const nameRef = useRef()
  const addressRef = useRef()
  const phoneNumberRef = useRef()
  const [popUp, setPopUp] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { authenticatedAccount } = useContext(AuthContext)

  const fetchUser = async () => {
    try {
      const res = await getUserById(authenticatedAccount.id)
      setUserInfo(res.data)
      return Promise.resolve()
    } catch (error) {
      return Promise.reject({ 2: error })
    }
  }

  useEffect(() => {
    fetchUser()
    setUser(authenticatedAccount)
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
      setIsLoading(true)
      const newInfo = {
        ...user,
        name: nameRef.current.value,
        address: addressRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
      }
      setUser(newInfo)
      const res = await updateUser(newInfo)
      setIsLoading(false)
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
    <div className='mb-16 grid grid-cols-3 px-64 xl:px-8 lg:px-4 sm:mt-28 sm:grid-cols-1 sm:pt-4'>
      <div className='mb-8 flex flex-col items-center'>
        <img width='300' className='rounded-full object-contain' src={user.avatarImage} alt='avatar' />
        <span className='mt-8 self-start text-2xl font-bold text-primary'>{user.name}</span>
        <div className='w-full'>
          {isUpdating ? (
            <form>
              <div className='mt-2 flex flex-col'>
                <label htmlFor='name'>Tên</label>
                <input ref={nameRef} className='input rounded-md' name='name' id='name' type='text' placeholder='Tên' />
              </div>
              <div className='mt-2 flex flex-col'>
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
              <div className='mt-2 flex flex-col'>
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
              <button className='button ml-1 px-4' onClick={onCancel}>
                Cancel
              </button>
            </form>
          ) : (
            <button onClick={toggleEditProfile} className='button mt-4 w-full py-2'>
              Sửa thông tin
            </button>
          )}
          {user.role === 'admin' && (
            <Link to='/admin' className='button mt-4 inline-block w-full py-2 text-center'>
              Xem thống kê
            </Link>
          )}
        </div>
        <hr className='my-4 w-full' />
        {isUpdating || (
          <div className='self-start'>
            <span className='mt-8 text-xl font-bold text-black'>Thông tin cá nhân</span>
            <ul>
              <li key={0}>Giới tính: {user.gender}</li>
              <li key={1}>Địa chỉ: {user.address}</li>
              <li key={2}>Số điện thoại: {user.phoneNumber}</li>
            </ul>
          </div>
        )}
      </div>
      <div className='col-span-2 ml-16 flex flex-col rounded-md border-2 border-slate-200 bg-opacity-50 sm:ml-0'>
        <h1 className='w-full py-4 text-center text-2xl font-bold'>Lịch sử mua hàng</h1>
        <hr />
        <div className='my-4'>
          {user.history &&
            user.history.map((products, key) => {
              return (
                <>
                  <div className='pl-4 font-bold text-primary'>
                    Ngày đặt hàng:{' '}
                    {new Date(products.date).getDate() +
                      '/' +
                      (new Date(products.date).getMonth() + 1) +
                      '/' +
                      new Date(products.date).getFullYear()}
                  </div>
                  {products.cart
                    .map((product, index) => {
                      return <ProductInfo key={index + key} productInfo={product} />
                    })
                    .reduce((prev, curr) => [prev, '', curr])}
                  <hr className='my-4' />
                </>
              )
            })}
        </div>
        {user.history && user.history?.length === 0 && (
          <div className='flex grow flex-col items-center justify-center'>
            <span>Hiện không có sản phẩm nào</span>
            <Link className='button-primary mt-4 px-8 py-2' to='/products'>
              Đi tới mua sắm
            </Link>
          </div>
        )}
      </div>
      {popUp && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-10'>
          <div className='shawdow-md relative flex h-3/10 w-3/10 flex-col items-center justify-center rounded-xl border-2 bg-slate-100 py-8'>
            <h1 className='text-center text-xl font-bold'>Bạn có muốn hủy thay đổi không?</h1>
            <section className='mt-2'>Những thay đổi của bạn sẽ bị xóa!</section>
            <div className='flex w-full justify-evenly'>
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
              className='absolute top-4 right-4 text-3xl leading-none hover:text-primary'
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
      )}
      {isLoading && <Loading />}
    </div>
  )
}
export default Profile
