import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { AuthContext } from '../components/Auth'
import { getProductById } from '../api/product'
import { updateUser } from '../api/user'
import { transformToVNCurrency } from '../utils'

const ProductInfo = () => {
  const { authenticatedAccount } = useContext(AuthContext)
  const [productInfo, setProductInfo] = useState(false)
  const [curPrice, setCurPrice] = useState(0)
  const [curQuanity, setCurQuanity] = useState(1)
  const router = useNavigate()
  const { id } = useParams()

  const fetchProduct = async () => {
    try {
      const res = await getProductById(id)
      setProductInfo(res.data)
      setCurPrice(res.data.price)
      return Promise.resolve()
    } catch (error) {
      if (error.response) {
        router('/404')
      }
    }
  }

  const handleQuanityChange = (e) => {
    setCurQuanity(Number.parseInt(e.target.value))
  }

  const handleIncreaseQuanity = () => {
    setCurQuanity((curQuanity) => Number.parseInt(curQuanity) + 1)
  }

  const handleDecreaseQuanity = () => {
    setCurQuanity((curQuanity) => Number.parseInt(curQuanity) - 1)
  }

  const addCart = async () => {
    try {
      const newProductInfo = { ...productInfo, quanity: curQuanity }
      const index = authenticatedAccount.cart.findIndex((item) => item.id === newProductInfo.id)
      if (index === -1) {
        authenticatedAccount.cart.push(newProductInfo)
      } else {
        authenticatedAccount.cart[index].quanity += curQuanity
      }
      const newUser = { ...authenticatedAccount }
      const res = await updateUser(newUser)
      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  }
  const handleOnBuy = () => {
    addCart()
  }

  useEffect(() => {
    if (!productInfo) fetchProduct()
  }, [])
  return (
    <div className='flex max-w-screen px-64 mb-16 grow'>
      <div className='bg-gray-100 flex bg-opacity-25 p-4 w-full'>
        <div>
          <img width='300' className='object-contain' src={productInfo.productImage} alt={productInfo.name} />
        </div>
        <div className='ml-8 grow'>
          <h1 className='text-xl'>{productInfo.name}</h1>
          <div className='flex'>
            <span className='text-2xl text-primary border-b-2 border-primary'>{productInfo.rate}.0</span>
            <div className='flex text-3xl ml-2'>
              {Array(5)
                .fill(0)
                .map((item, index) => {
                  if (index <= productInfo.rate - 1) {
                    return <AiFillStar key={index + 1} color='#FFBF00' />
                  }
                  return <AiOutlineStar key={index + 1} color='#FFBF00' />
                })}
            </div>
          </div>
          <h2 className='text-4xl mt-8 text-primary font-semibold'>{transformToVNCurrency(curPrice)}</h2>
          <div className='flex mt-8 w-64'>
            <span className='basis-5/10 grow'>Số lượng</span>
            <div className='ml-16 flex basis-5/10 justify-between items-center'>
              <button
                onClick={handleDecreaseQuanity}
                disabled={curQuanity === 0 ? true : false}
                className='button-primary flex justify-center items-center w-6 h-6 rounded-full'
              >
                -
              </button>
              <input
                onChange={handleQuanityChange}
                className='py-0 px-2.5 border-2 border-primary rounded-lg w-10 text-center'
                value={curQuanity}
              />
              <button
                onClick={handleIncreaseQuanity}
                className='button-primary flex justify-center items-center w-6 h-6 rounded-full'
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col h-full justify-evenly'>
          <button onClick={handleOnBuy} className='button-primary h-16 w-52'>
            Mua ngay
          </button>
          <button onClick={handleOnBuy} className='button-secondary text-primary  h-16 w-52'>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
