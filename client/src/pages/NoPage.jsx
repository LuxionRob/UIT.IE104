import React from 'react'

const NoPage = () => {
  return (
    <div className='mx-auto flex grow flex-col items-center justify-center px-4 lg:px-20 md:px-12 sm:mt-28'>
      <div className='mx-auto w-full text-center'>
        <h1 className='m-4 text-7xl text-primary lg:text-3xl sm:text-xl'>
          <strong>Chào mừng đến với vũ trụ 404</strong>
        </h1>
        <h2 className='text-5xl leading-snug text-primary lg:text-lg sm:text-base'>
          Có vẻ bạn tìm thấy phiên bản khác của shop nhưng rất tiếc, không có gì ở đây cả.
        </h2>
      </div>
    </div>
  )
}
export default NoPage
