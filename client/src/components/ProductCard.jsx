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
      <div className='mt-4 flex items-center justify-between px-3 pb-3 text-primary lg:mt-2 lg:flex-col lg:px-0 sm:mt-1 sm:px-0'>
        <h2 className='pl-3 text-3xl lg:self-start lg:text-left lg:text-xl'>{transformToVNCurrency(product.price)}</h2>

        <button
          className='rounded-lg border-2 border-primary p-2 hover:bg-primary hover:text-white lg:mt-2 lg:w-full'
          to='/payment'
        >
          Đặt hàng
        </button>
      </div>
    </Link>
  )
}

export default ProductCard
