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
      setproducts(res.data.data)
      return Promise.resolve()
      console.log(res.data.data)
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
        {product.slice(0, 4).map((product, index) => (
          <ProductCard className={'mx-5'} key={index} product={product}></ProductCard>
        ))}
      </div>

      <div className='mt-10 text-[25px] max-w-[1000px] my-0 mx-auto mb-10'>Sản phẩm bán chạy</div>

      <div className='flex m-w-[1100px] justify-center mb-24'>
        {product.slice(5, 9).map((product, index) => (
          <ProductCard key={index} product={product}></ProductCard>
        ))}
      </div>

      <div className='my-0 mx-auto max-w-[1200px] mb-32'>
        <Link to='/product'>
          <img
            className='my-0 mx-auto mt-10 rounded-xl'
            src='https://f6-zpcloud.zdn.vn/4750480079226129552/97642a4639b8e0e6b9a9.jpg'
            alt=''
          />
        </Link>
      </div>
    </div>
  )
}
export default Home
