import React, { Fragment, useEffect, useState, useContext } from 'react'
import { AiTwotoneDelete } from 'react-icons/ai'
import { getUserById } from '../api/user'
import { updateUser } from '../api/user'
import { AuthContext } from '../components/Auth'
import { transformToVNCurrency } from '../utils'

const Payment = () => {
  const { authenticatedAccount } = useContext(AuthContext)
  const [userInfo, setUserInfo] = useState('')

  const fetchUser = async () => {
    try {
      const res = await getUserById(authenticatedAccount.id)
      setUserInfo(res.data)
      return Promise.resolve()
    } catch (error) {
      return Promise.reject({ 2: error })
    }
  }

  const updateUserCart = async () => {
    try {
      const res = await updateUser(userInfo)
      return Promise.resolve()
    } catch (error) {
      return Promise.reject()
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  useEffect(() => {
    if (userInfo?.id) {
      updateUserCart()
    }
  }, [userInfo])

  const handleIncreaseQuanity = (e, index) => {
    let newUserInfo = { ...userInfo }
    newUserInfo.cart[index].quanity += 1
    setUserInfo(newUserInfo)
  }
  const handleDecreaseQuanity = (e, index) => {
    let newUserInfo = { ...userInfo }
    const quanity = (newUserInfo.cart[index].quanity -= 1)
    if (quanity == 0) {
      newUserInfo.cart.splice(index, 1)
    }
    setUserInfo(newUserInfo)
  }
  return (
    <Fragment>
      <div className='flex w-full flex-col px-64 '>
        <div>
          <div className='flex border-2 border-slate-500 rounded-t-xl pl-16 py-4'>
            <input className='basis-1/10' type='checkbox' />
            <h2 className='text-xl basis-6/10 grow'>Sản phẩm</h2>
            <h2 className='text-xl basis-2/10 grow text-center'>Sổ tiền</h2>
            <h2 className='text-xl basis-1/10 text-center'>Thao tác</h2>
          </div>
          <div className='border-2 border-slate-500 rounded-b-xl py-4'>
            {userInfo?.cart &&
              userInfo?.cart.length > 0 &&
              userInfo.cart.map((product, index) => {
                return (
                  <div key={product.id} className='flex items-center pl-16'>
                    <input className='basis-1/10' type='checkbox' />
                    <div className='basis-1/10'>
                      <img className='pr-7 pb-5' width='180' src={product.productImage} alt={product.name} />
                    </div>
                    <div className='basis-1/2 grow self-start'>
                      <div className='text-lg text-black font-semibold'>{product.name}</div>
                      <div className='text-base font-medium '>{transformToVNCurrency(product.price)}</div>
                      <div className='flex h-5'>
                        <div className='text-base text-black font-medium leading-5'>Size:</div>
                        <div className='text-black font-medium pl-2.5 leading-5'> {product.size}</div>
                      </div>
                      <div className='flex items-center h-5'>
                        <div className='text-base text-black font-medium'>Số lượng:</div>
                        <div className='h-5 flex pl-2.5'>
                          <button
                            onClick={(e) => handleDecreaseQuanity(e, index)}
                            className='button-primary flex justify-center items-center w-6 h-6 rounded-full'
                          >
                            -
                          </button>
                          <div className='py-0 px-2.5'>{product.quanity}</div>
                          <button
                            onClick={(e) => handleIncreaseQuanity(e, index)}
                            className='button-primary flex justify-center items-center w-6 h-6 rounded-full'
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='basis-2/10 grow text-center'>
                      {transformToVNCurrency(product.price * product.quanity)}
                    </div>
                    <div className='basis-1/10 flex justify-center items-center'>
                      <AiTwotoneDelete />
                    </div>
                  </div>
                )
              })}
          </div>
        </div>

        <div className='flex-col flex'>
          <div className='flex self-end'>
            <div className=' text-xl font-bold leading-9 text-primary mr-12'>Mã khuyến mãi</div>
            <div className='h-9 flex rounded-lg bg-white border border-black border-solid'>
              <input
                type='mail'
                placeholder='Nhập mã giảm giá...'
                className='text-base w-9/12 border-none py-2 pr-0 pl-4 rounded-lg font-medium focus-visible:outline-nonev'
              />
              <button className='w-32 bg-primary text-white font-semibold text-xl px-2 rounded-lg border-none h-9 '>
                Áp dụng
              </button>
            </div>
          </div>
          <div className='mt-2.5 self-end text-3xl text-right font-bold leading-9 text-primary mr-32'>
            Tổng cộng:{' '}
            {userInfo?.cart &&
              userInfo?.cart.length > 0 &&
              transformToVNCurrency(
                userInfo.cart.reduce((total, product) => total + product.price * product.quanity, 0)
              )}
          </div>
        </div>
        <div className='w-full text-center'>
          <button className='w-2/12 bg-primary text-white font-semibold text-2xl py-0 px-5 rounded-2xl border-none h-10 leading-10 Login-item1'>
            Thanh toán
          </button>
        </div>
      </div>
    </Fragment>
  )
}
export default Payment
