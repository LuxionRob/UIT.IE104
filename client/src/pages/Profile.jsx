import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../components/Auth'
import { getUserById } from '../api/user'
import { Link, useNavigate } from 'react-router-dom'

const Profile = () => {
  const [user, setUser] = useState({})
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

  const editProfile = async () => {}

  return (
    <div className='flex max-w-screen px-64 mb-16'>
      <div className='flex basis-1/3 flex-col items-center'>
        <img width='300' className='object-contain rounded-full' src={user.avatarImage} alt='avatar' />
        <span className='text-primary self-start font-bold text-2xl mt-8'>{user.name}</span>
        <div className='w-full'>
          <button
            onClick={editProfile}
            className='border-2 border-gray-200 rounded-lg w-full mt-4 text-black bg-gray-100 h-10 hover:bg-gray-200 active:shadow-inner'
          >
            Sửa thông tin
          </button>
          {user.role === 'admin' && (
            <Link
              to='/admin'
              className='inline-block text-center leading-[2.5rem] border-2 border-gray-200 rounded-lg w-full mt-4 text-black bg-gray-100 h-10 hover:bg-gray-200 active:shadow-inner'
            >
              Xem thống kê
            </Link>
          )}
        </div>
        <hr className='my-4 w-full' />
        <div className='self-start'>
          <span className='text-black font-bold text-xl mt-8'>Thông tin cá nhân</span>
          <ul>
            <li>Giới tính: {user.gender}</li>
            <li>Địa chỉ: {user.address}</li>
            <li>Số điện thoại: {user.phoneNumber}</li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  )
}
export default Profile
