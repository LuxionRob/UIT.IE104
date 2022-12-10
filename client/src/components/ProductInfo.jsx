import React from 'react'

const ProductInfo = ({ productInfo }) => {
  return (
    <div className='flex w-full items-center justify-between px-4'>
      <div className='flex items-center'>
        <img
          width='100'
          className='rounded-sm border-2 object-contain'
          src={productInfo.productImage}
          alt={productInfo.name}
        />
        <div className='ml-4'>
          <span>{productInfo.name}</span>
          <p className='text-slate-600'>{productInfo.type}</p>
          <span>x{productInfo.quanity}</span>
        </div>
      </div>
      <div>
        <p className='text-right'>{productInfo.price}</p>
        <button className='button-primary mt-2 px-8 py-2 font-bold'>Mua lại</button>
      </div>
    </div>
  )
}

export default ProductInfo
