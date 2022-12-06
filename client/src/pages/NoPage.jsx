import React from 'react'

const NoPage = () => {
  return (
    <div className='mx-auto px-4 md:px-12 lg:px-20 grow flex justify-center items-center flex-col'>
      <div className='w-full mx-auto text-center'>
        <h1 className='text-7xl m-4 text-primary'>
          <strong>Chào mừng đến với vũ trụ 404</strong>
        </h1>
        <h2 className='text-5xl leading-snug text-primary'>
          Có vẻ bạn tìm thấy phiên bản khác của shop nhưng rất tiếc, không có gì ở đây cả.
        </h2>
      </div>
    </div>
  )
}
export default NoPage
