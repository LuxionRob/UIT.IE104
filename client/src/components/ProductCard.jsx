import React from 'react'
import { Link } from 'react-router-dom'
import { stringCut } from '../utils'

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className='flex flex-col w-[200px] h-[330px] hover:shadow-xl relative'>
      <img alt={product.name} className='w-full' src={product.productImage} />

      <div className='h-px w-3/4 bg-black mt-4 mx-auto'></div>
      <span data-text={product.name} className='tooltip px-3 pt-2'>
        {stringCut(product.name)}
      </span>
      <div className='px-3 mt-7 flex justify-between text-primary absolute bottom-1 right-1 left-1'>
        <h2>{product.price}</h2>

        <Link
          className='rounded-lg border-primary border-spacing-2 border-2 p-2 -translate-y-[12px] hover:text-white hover:bg-primary'
          to='/payment'
        >
          Đặt hàng
        </Link>
      </div>
    </Link>
  )
}

export default ProductCard
