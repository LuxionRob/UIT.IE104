import React from 'react'

const NoPage = () => {
  return (
    <div className='mx-auto flex grow flex-col items-center justify-center px-4 sm:mt-32 md:px-12 lg:px-20'>
      <div className='mx-auto w-full text-center'>
        <h1 className='text-primary m-4 text-7xl sm:text-xl lg:text-3xl'>
          <strong>Chào mừng đến với vũ trụ 404</strong>
        </h1>
        <h2 className='text-primary text-5xl leading-snug sm:text-base lg:text-lg'>
          Có vẻ bạn tìm thấy phiên bản khác của shop nhưng rất tiếc, không có gì ở đây cả.
        </h2>
      </div>
    </div>
  )
}
export default NoPage
