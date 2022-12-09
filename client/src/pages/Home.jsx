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
      return Promise.reject(error)
    }
  }

  return (
    <div>
      {/* Banner */}
      <Banner></Banner>

      {/* Product */}

      <div className='mt-10 text-[25px] max-w-[1000px] my-0 mx-auto mb-10'>Sản phẩm mới</div>

      <div className='flex m-w-[1100px] justify-center'>
        {product &&
          product
            .splice(0, 4)
            .map((product, index) => <ProductCard className={'mx-5'} key={index} product={product}></ProductCard>)}
      </div>

      <div className='mt-10 text-[25px] max-w-[1000px] my-0 mx-auto mb-10'>Sản phẩm bán chạy</div>

      <div className='flex m-w-[1100px] justify-center mb-24'>
        {product &&
          product.splice(5, 4).map((product, index) => <ProductCard key={index} product={product}></ProductCard>)}
      </div>

      <div className='my-0 mx-auto max-w-[1200px] mb-32'>
        <Link to='/product'>
          <img className='my-0 mx-auto mt-10 rounded-xl' src='http://localhost:3003/api/images/banners/2' alt='' />
        </Link>
      </div>
    </div>
  )
}
export default Home
