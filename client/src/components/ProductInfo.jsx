import React from 'react'

const ProductInfo = ({ productInfo }) => {
  return (
    <div className='w-full flex justify-between items-center px-4'>
      <div className='flex items-center'>
        <img
          width='100'
          className='border-2 rounded-sm object-contain'
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
        <button className='button-primary px-8 py-2 font-bold mt-2'>Mua lại</button>
      </div>
    </div>
  )
}

export default ProductInfo
