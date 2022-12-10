import React from 'react'
import { Link } from 'react-router-dom'
import { transformToVNCurrency, stringCut } from '../utils'

const ProductCard = ({ product, className }) => {
  return (
    <Link to={`/products/${product.id}`} className={`flex w-full flex-col hover:shadow-2xl ${className}`}>
      <img alt={product.name} className='w-full' src={product.productImage} />
      <div className='mx-auto mt-4 h-px w-3/4 bg-primary' />
      <span data-text={product.name} className='tooltip px-3 pt-2'>
        {stringCut(product.name)}
      </span>
      <div className='mt-7 flex justify-between px-3 text-primary'>
        <h2>{transformToVNCurrency(product.price)}</h2>

        <button
          className='border-spacing-2 -translate-y-[12px] rounded-lg border-2 border-primary p-2 hover:bg-primary hover:text-white'
          to='/payment'
        >
          Đặt hàng
        </button>
      </div>
    </Link>
  )
}

export default ProductCard
