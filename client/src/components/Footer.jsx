import React from 'react'
import { FaFacebook, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-1 relative bottom-0 max-w-screen overflow-x-hidden sm:mx-8'>
      <hr className='mb-10 bg-primary h-[1.5px]' />
      <div className='grid grid-cols-3 w-full sm:grid-cols-1'>
        <div className='flex items-center justify-center sm:mb-4'>
          <div className='font-black text-primary text-5xl text-center font-sans lg:text-3xl'>FireTea.</div>
        </div>
        <div className='flex flex-col items-center sm:mb-4'>
          <div className='sm:flex sm:flex-col sm:items-center'>
            <h4 className='text-primary text-xl lg:text-lg sm:text-xl ml-6 sm:ml-0'>Địa chỉ liên hệ</h4>
            <div className='pl-0 flex items-center'>
              <div className='sm:hidden'>
                <FaMapMarkerAlt color='#4d8b54' />
              </div>
              <div className='ml-2.5 sm:ml-0 sm:text-center'>
                5/15, đường 106, phường Tăng Nhơn Phú A, thành phố Thủ Đức
              </div>
            </div>
            <div className='pl-0 flex items-center'>
              <div className='ml-2.5'>Phone: 03-526-7814</div>
            </div>
            <a href='mailto:info@fireTea.com' className='flex justify-start items-center'>
              <span className='ml-2'>Email: info@fireTea.com</span>
            </a>
          </div>
        </div>
        <div className='grid lg:grid-cols-1 ml-4 justify-center lg:justify-start'>
          <div className='flex flex-col items-start sm:items-center mb-2 sm:mb-4'>
            <h4 className='text-left text-primary text-xl lg:text-lg'>Chính sách</h4>
            <ul className='pl-0'>
              <li>Hình thức thanh toán</li>
              <li>Vận chuyển giao nhận</li>
              <li>Bảo trì, bảo hành</li>
              <li>Chính sách bảo mật</li>
            </ul>
          </div>
          <div className='flex flex-col items-start sm:items-center'>
            <h4 className='text-left text-primary text-xl lg:text-lg'>Liên hệ trực tiếp</h4>
            <div className='flex justify-start'>
              <a target='_bank' href='https://www.facebook.com' className='text-3xl mr-2'>
                <FaFacebook className='hover:opacity-90 active:opacity-100' />
              </a>
              <a target='_bank' href='https://www.youtube.com' className='text-3xl'>
                <FaYoutube className='hover:opacity-90 active:opacity-100' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className='mt-10 bg-primary h-[1.5px]' />
      <div className='text-center p-6'>
        <p>Chúng tôi biết bạn có nhiều sự lựa chọn, cảm ơn vì đã chọn chúng tôi</p>
      </div>
    </div>
  )
}

export default Footer
