import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPagedProduct } from '../api/product'
import Banner from '../components/Banner'
import ProductCard from '../components/ProductCard'
const Home = () => {
  const [product, setproducts] = useState([])
  useEffect(() => {
    fetch()
  }, [])

  const fetch = async () => {
    try {
      const res = await getPagedProduct({ _page: 1, _limit: 10 })
      setproducts(res.data.data)
      return Promise.resolve()
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }

  return (
    <div className='max-w-screen mx-64 mb-10'>
      {/* Banner */}
      <Banner imgSrc={'http://localhost:3003/api/images/banners/1'} />

      {/* Product */}

      <div className='mt-10 text-2xl mx-auto mb-10'>Sản phẩm mới</div>

      <div className='grid grid-cols-4 gap-6'>
        {product &&
          product.splice(0, 4).map((product, index) => <ProductCard key={index} product={product}></ProductCard>)}
      </div>

      <div className='mt-10 text-2xl mx-auto mb-10'>Sản phẩm bán chạy</div>

      <div className='grid grid-cols-4 gap-6'>
        {product &&
          product.splice(5, 4).map((product, index) => <ProductCard key={index} product={product}></ProductCard>)}
      </div>

      <div className='my-0 mx-auto max-w-[1200px] mb-32'>
        <Link to='/products'>
          <img className='my-0 mx-auto mt-10 rounded-xl' src='http://localhost:3003/api/images/banners/2' alt='' />
        </Link>
      </div>
    </div>
  )
}
export default Home
