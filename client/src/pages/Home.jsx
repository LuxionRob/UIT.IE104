import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllProduct } from '../api/product'
import Banner from '../components/Banner'
import ProductCard from '../components/ProductCard'
const Home = () => {
  const [product, setproducts] = useState([])
  useEffect(() => {
    fetch()
  }, [])

  const fetch = async () => {
    try {
      const res = await getAllProduct()
      setproducts(res.data)
      return Promise.resolve()
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }

  return (
    <div className='max-w-screen mx-64 xl:mx-8 lg:mx-4 mb-10 sm:mt-28'>
      {/* Banner */}
      <Banner imgSrc={'http://localhost:3003/api/images/banners/1'} />

      {/* Product */}

      <div className='mt-10 text-2xl mx-auto mb-10'>Sản phẩm mới</div>

      <div className='grid grid-cols-4 sm:grid-cols-2 gap-6'>
        {product &&
          product.splice(0, 4).map((product, index) => <ProductCard key={index} product={product}></ProductCard>)}
      </div>

      <div className='mt-10 text-2xl mx-auto mb-10'>Sản phẩm bán chạy</div>

      <div className='grid grid-cols-4 sm:grid-cols-2 gap-6'>
        {product &&
          product.splice(5, 4).map((product, index) => <ProductCard key={index} product={product}></ProductCard>)}
      </div>

      <Banner imgSrc={'http://localhost:3003/api/images/banners/2'} />
    </div>
  )
}
export default Home
