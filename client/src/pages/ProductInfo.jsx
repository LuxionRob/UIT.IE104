import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { AuthContext } from '../components/Auth'
import ProductCard from '../components/ProductCard'
import Loading from '../components/Loading'
import { getProductById } from '../api/product'
import { getProductWithCondition } from '../api/product'
import { updateUser } from '../api/user'
import { transformToVNCurrency, imageWidthResponsive } from '../utils'

const ProductInfo = () => {
  const { authenticatedAccount } = useContext(AuthContext)
  const [relatedProduct, setRelatedProduct] = useState({})
  const [productInfo, setProductInfo] = useState(false)
  const [curPrice, setCurPrice] = useState(0)
  const [curQuanity, setCurQuanity] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const router = useNavigate()
  const { id } = useParams()

  const fetchProduct = async () => {
    try {
      setIsLoading(true)
      const res = await getProductById(id)
      const productList = await getProductWithCondition({
        _page: 1,
        _limit: '4',
        type: res.data.type,
      })
      setIsLoading(false)
      setProductInfo(res.data)
      setCurPrice(res.data.price)
      setRelatedProduct(productList.data.data)
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
      setIsLoading(true)
      const newProductInfo = { ...productInfo, quanity: curQuanity }
      const index = authenticatedAccount.cart.findIndex((item) => item.id === newProductInfo.id)
      if (index === -1) {
        authenticatedAccount.cart.push(newProductInfo)
      } else {
        authenticatedAccount.cart[index].quanity += curQuanity
      }
      const newUser = { ...authenticatedAccount }
      const res = await updateUser(newUser)
      setIsLoading(false)
      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  }
  const handleOnBuy = () => {
    addCart()
  }

  useEffect(() => {
    if (!productInfo) {
      fetchProduct()
    }
  }, [])

  return (
    <div className='max-w-screen flex grow flex-col items-center px-64 xl:px-8 lg:px-4 sm:mt-32'>
      <div className='grid h-8/10 w-full grid-cols-4 lg:grid-cols-3'>
        <div className='col-span-1'>
          <img
            width={imageWidthResponsive('product')}
            className='object-contain'
            src={productInfo.productImage}
            alt={productInfo.name}
          />
        </div>
        <div className='col-span-2 ml-8 mb-4 lg:col-span-1 lg:-ml-2 sm:col-span-2 sm:ml-2'>
          <h1 className='text-xl sm:text-lg'>{productInfo.name}</h1>
          <div className='flex'>
            <span className='border-b-2 border-primary text-2xl text-primary sm:text-xl'>{productInfo.rate}.0</span>
            <div className='ml-2 flex text-3xl sm:text-lg'>
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
          <h2 className='mt-8 text-4xl font-semibold text-primary lg:text-2xl sm:mt-2 sm:text-xl'>
            {transformToVNCurrency(curPrice)}
          </h2>
          <div className='mt-8 flex sm:mt-2'>
            <span className='sm:text-md basis-2/10 lg:basis-5/10'>Số lượng</span>
            <div className='ml-16 flex basis-2/10 items-center justify-between lg:basis-5/10 sm:ml-8'>
              <button
                onClick={handleDecreaseQuanity}
                disabled={curQuanity === 0 ? true : false}
                className='button-primary flex h-6 w-6 items-center justify-center rounded-full'
              >
                -
              </button>
              <input
                onChange={handleQuanityChange}
                className='w-10 rounded-lg border-2 border-primary py-0 px-2.5 text-center'
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
        <div className='col-span-1 flex h-full flex-col items-end justify-evenly sm:col-span-3 sm:flex-row'>
          <button
            onClick={() => {
              handleOnBuy()
              router('/payment')
            }}
            className='button-primary h-16 w-52 sm:mr-2'
          >
            Mua ngay
          </button>
          <button onClick={handleOnBuy} className='button-secondary h-16 w-52 text-primary'>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
      <hr className='mt-8 h-[2px] w-7/10 bg-primary' />
      <div className='mt-8 flex flex-col items-center'>
        <h1 className='text-3xl font-bold text-primary'>Sản phẩm liên quan</h1>
        <div className='mt-4 grid grid-cols-4 gap-8 sm:mt-2 sm:grid-cols-2'>
          {relatedProduct?.length && relatedProduct.map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  )
}

export default ProductInfo
