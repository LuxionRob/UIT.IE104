import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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
    <div className='max-w-screen mb-16 flex grow px-64'>
      <div className='flex w-full bg-gray-100 bg-opacity-25 p-4'>
        <div>
          <img width='300' className='object-contain' src={productInfo.productImage} alt={productInfo.name} />
        </div>
        <div className='ml-8 grow'>
          <h1 className='text-xl'>{productInfo.name}</h1>
          <div className='flex'>
            <span className='text-primary border-primary border-b-2 text-2xl'>{productInfo.rate}.0</span>
            <div className='ml-2 flex text-3xl'>
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
          <h2 className='text-primary mt-8 text-4xl font-semibold'>{transformToVNCurrency(curPrice)}</h2>
          <div className='mt-8 flex w-64'>
            <span className='basis-5/10 grow'>Số lượng</span>
            <div className='basis-5/10 ml-16 flex items-center justify-between'>
              <button
                onClick={handleDecreaseQuanity}
                disabled={curQuanity === 0 ? true : false}
                className='button-primary flex h-6 w-6 items-center justify-center rounded-full'
              >
                -
              </button>
              <input
                onChange={handleQuanityChange}
                className='border-primary w-10 rounded-lg border-2 py-0 px-2.5 text-center'
                value={curQuanity}
              />
              <button
                onClick={handleIncreaseQuanity}
                className='button-primary flex h-6 w-6 items-center justify-center rounded-full'
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className='flex h-full flex-col justify-evenly'>
          <button onClick={handleOnBuy} className='button-primary h-16 w-52'>
            Mua ngay
          </button>
          <button onClick={handleOnBuy} className='button-secondary text-primary  h-16 w-52'>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
      <hr className='w-7/10 bg-primary mt-8 h-[2px]' />
      <div className='mt-8 flex flex-col items-center'>
        <h1 className='text-primary text-3xl font-bold'>Sản phẩm liên quan</h1>
        <div className='mt-4 grid grid-cols-4 gap-8 sm:mt-2 sm:grid-cols-2'>
          {relatedProduct?.length && relatedProduct.map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
