import React, { Fragment } from 'react'
const Payment = () => {
  return (
    <Fragment>
      <div className='flex w-full flex-col'>
        <div className='flex flex-row'>
          <div className='Product-detail-left'>
            <img
              className='pr-7 pb-5 ml-2.5'
              width='180'
              src='http://localhost:3003/api/images/products/1'
              alt='Hình ảnh sữa Chua Mận Hạt Sen'
            />
          </div>
          <div className='Product-detail-right'>
            <div className='text-lg text-black font-semibold'>Sữa Chua Mận Hạt Sen</div>
            <div className='text-primary text-base font-medium '>28.000đ</div>
            <div className='flex h-5'>
              <div className='text-base text-black font-medium leading-5'>Size :</div>
              <div className='text-black font-medium pl-2.5 leading-5'> S </div>
            </div>

            <div className='flex h-5'>
              <div className='text-base text-black font-medium leading-5'>Số lượng :</div>
              <div className='h-5 flex pl-2.5'>
                <div className='Change-decrease text-white bg-primary w-5 leading-4 text-xl font-semibold text-center cursor-pointer border-0 rounded-full h-5'>
                  -
                </div>
                <div className='py-0 px-2.5'>1</div>
                <div className='Change-increase text-white bg-primary w-5 leading-4 text-xl font-semibold text-center cursor-pointer border-0 rounded-full h-5'>
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='Product-detail-left'>
            <img
              className='pr-7 pb-5 ml-2.5'
              width='180'
              src='http://localhost:3003/api/images/products/20'
              alt='Hình ảnh trà Xoài Bưởi Hồng'
            />
          </div>
          <div className='Product-detail-right'>
            <div className='text-lg text-black font-semibold'>Trà Xoài Bưởi Hồng</div>
            <div className='text-primary text-base font-medium'>30.000đ</div>
            <div className='flex h-5'>
              <div className='text-base text-black font-medium leading-5'>Size :</div>
              <div className='text-black font-medium pl-2.5 leading-5'> M </div>
            </div>

            <div className='flex h-5'>
              <div className='text-base text-black font-medium leading-5'>Số lượng :</div>
              <div className='h-5 flex pl-2.5'>
                <div className='Change-decrease  text-white bg-primary w-5 leading-4 text-xl font-semibold text-center cursor-pointer border-0 rounded-full h-5'>
                  -
                </div>
                <div className='py-0 px-2.5'>1</div>
                <div className='Change-increase text-white bg-primary w-5 leading-4 text-xl font-semibold text-center cursor-pointer border-0 rounded-full h-5'>
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-col flex'>
          <div className='flex self-end'>
            <div className=' text-xl font-bold leading-9 text-primary mr-12'>Mã khuyến mãi</div>
            <div className='h-9 flex rounded-lg bg-white border border-black border-solid'>
              <input
                type='mail'
                placeholder='Nhập mã giảm giá...'
                className='text-base w-9/12 border-none py-2 pr-0 pl-4 rounded-lg font-medium focus-visible:outline-nonev'
              />
              <button className='w-32 bg-primary text-white font-semibold text-xl px-2 rounded-lg border-none h-9 '>
                Áp dụng
              </button>
            </div>
          </div>
          <div className='mt-2.5 self-end text-xl font-bold leading-9 text-primary mr-32'>Tổng cộng: ....</div>
        </div>
        <div className='w-full text-center'>
          <button className='w-2/12 bg-primary text-white font-semibold text-2xl py-0 px-5 rounded-2xl border-none h-10 leading-10 Login-item1'>
            Thanh toán
          </button>
        </div>
      </div>
    </Fragment>
  )
}
export default Payment
