import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-screen relative bottom-0 mt-8 overflow-x-hidden pt-1 sm:mx-8'>
      <hr className='bg-primary mb-10 h-[1.5px]' />
      <div className='grid w-full grid-cols-3 sm:grid-cols-1'>
        <div className='flex items-center justify-center sm:mb-4'>
          <div className='text-primary text-center font-sans text-5xl font-black lg:text-3xl'>FireTea.</div>
        </div>
        <div className='flex flex-col items-center sm:mb-4'>
          <div className='sm:flex sm:flex-col sm:items-center'>
            <h4 className='text-primary text-xl font-semibold sm:ml-0 sm:text-xl lg:text-lg'>Địa chỉ liên hệ</h4>
            <div className='flex items-center pl-0'>
              <div className='sm:text-center'>5/15, đường 106, phường Tăng Nhơn Phú A, thành phố Thủ Đức</div>
            </div>
            <div className='flex items-center pl-0'>
              <span>Phone: 03-526-7814</span>
            </div>
            <a href='mailto:info@fiveTea.com' className='flex items-center justify-start'>
              <span>Email: info@fiveTea.com</span>
            </a>
          </div>
        </div>
        <div className='ml-4 grid justify-center lg:grid-cols-1 lg:justify-start'>
          <div className='mb-2 flex flex-col items-start sm:mb-4 sm:items-center'>
            <h4 className='text-primary text-left text-xl font-semibold lg:text-lg'>Chính sách</h4>
            <ul className='pl-0'>
              <li>Hình thức thanh toán</li>
              <li>Vận chuyển giao nhận</li>
              <li>Bảo trì, bảo hành</li>
              <li>Chính sách bảo mật</li>
            </ul>
          </div>
          <div className='flex flex-col items-start sm:items-center'>
            <h4 className='text-primary text-left text-xl lg:text-lg'>Liên hệ trực tiếp</h4>
            <div className='flex justify-start'>
              <a target='_bank' href='https://www.facebook.com' className='mr-2 text-3xl'>
                <FaFacebook className='hover:opacity-90 active:opacity-100' />
              </a>
              <a target='_bank' href='https://www.youtube.com' className='text-3xl'>
                <FaYoutube className='hover:opacity-90 active:opacity-100' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className='bg-primary mt-10 h-[1.5px]' />
      <div className='mt-4 flex justify-center'>
        <Link
          to='about-us'
          className='text-primary hover:border-primary text-2xl font-bold hover:border-b-2 active:text-[#4d8b54cc]'
        >
          Về chúng tôi
        </Link>
      </div>
      <div className='mt-4 mb-6 text-center'>
        <p>Chúng tôi biết bạn có nhiều sự lựa chọn, cảm ơn vì đã chọn chúng tôi</p>
      </div>
    </div>
  )
}

export default Footer
