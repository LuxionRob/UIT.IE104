import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllProduct } from '../api/product'
import Banner from '../components/Banner'
import Loading from '../components/Loading'
import ProductCard from '../components/ProductCard'
const Home = () => {
  const [product, setproducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetch()
  }, [])

  const fetch = async () => {
    try {
      setIsLoading(true)
      const res = await getAllProduct()
      setIsLoading(false)
      setproducts(res.data)
      return Promise.resolve()
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }

  return (
    <div className='max-w-screen mx-64 mb-10 sm:mt-32 lg:mx-4 xl:mx-8'>
      {/* Banner */}
      <Banner imgSrc={'http://localhost:3003/api/images/banners/1'} />

      {/* Product */}

      <div className='mx-auto mt-10 mb-10 text-2xl'>Sản phẩm mới</div>

      <div className='grid grid-cols-4 gap-6 sm:grid-cols-2'>
        {product &&
          product.splice(0, 4).map((product, index) => <ProductCard key={index} product={product}></ProductCard>)}
      </div>

      <div className='mx-auto mt-10 mb-10 text-2xl'>Sản phẩm bán chạy</div>

      <div className='grid grid-cols-4 gap-6 sm:grid-cols-2'>
        {product &&
          product.splice(5, 4).map((product, index) => <ProductCard key={index} product={product}></ProductCard>)}
      </div>

      <Banner imgSrc={'http://localhost:3003/api/images/banners/2'} />
      {isLoading && <Loading />}
    </div>
  )
}
export default Home
