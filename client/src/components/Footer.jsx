import React from 'react'
import { FaFacebook, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-1 relative bottom-0 w-full'>
      <hr className='mb-10 bg-primary h-[1.5px]' />
      <div className='flex items-center'>
        <span className='w-1/5 font-black text-primary text-5xl text-center font-sans'>FireTea.</span>
        <ul className='flex flex-nowrap pl-0 w-9/12'>
          {/* column1 */}
          <li className='basis-1/4'>
            <h4 className='text-primary text-xl font-medium mb-2.5 ml-6'>Địa chỉ liên hệ</h4>
            <ul className='pl-0 flex items-center pb-2.5'>
              <li>
                <FaMapMarkerAlt color='#4d8b54' />
              </li>
              <li className='ml-2.5 w-7/10'> 5/15, đường 106, phường Tăng Nhơn Phú A, thành phố Thủ Đức</li>
            </ul>
            <ul className='pl-0 flex items-center pb-2.5'>
              <li>
                <a href='tel:035267814' className='text-white no-underline'>
                  <FaPhoneAlt color='#4d8b54' />
                </a>
              </li>
              <li className='ml-2.5'>03-526-7814</li>
            </ul>
          </li>
          {/* column2 */}
          <li className='basis-1/4'>
            <h4 className='text-primary text-xl font-medium ml-[1.25rem]'>Gmail</h4>
            <a href='mailto:info@fireTea.com' className='flex justify-start items-center'>
              <FaEnvelope color='#4d8b54' />
              <span className='ml-2'>info@fireTea.com</span>
            </a>
          </li>
          {/* column3 */}
          <li className='basis-1/4'>
            <h4 className='text-primary text-xl font-medium mb-2.5'>Liên hệ trực tiếp</h4>
            <div className='flex justify-start'>
              <a target='_bank' href='https://www.facebook.com' className='text-3xl mr-2'>
                <FaFacebook className='hover:opacity-90 active:opacity-100' />
              </a>
              <a target='_bank' href='https://www.youtube.com' className='text-3xl'>
                <FaYoutube className='hover:opacity-90 active:opacity-100' />
              </a>
            </div>
          </li>
          {/* column4 */}
          <li className='basis-1/4'>
            <h4 className='text-left text-primary text-xl font-medium mb-2.5'>Chính sách</h4>
            <ul className='pl-0 '>
              <li>Hình thức thanh toán</li>
              <li>Vận chuyển giao nhận</li>
              <li>Bảo trì, bảo hành</li>
              <li>Chính sách bảo mật</li>
            </ul>
          </li>
        </ul>
      </div>
      <hr className='mt-10 bg-primary h-[1.5px]' />
      <div className='text-center p-6'>
        <p>Chúng tôi biết bạn có nhiều sự lựa chọn, cảm ơn vì đã chọn chúng tôi</p>
      </div>
    </div>
  )
}

export default Footer
