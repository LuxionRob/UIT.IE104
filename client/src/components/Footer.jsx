import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <div
      className='
        bg-neutral-800
         text-white
          pt-1 
          relative
           bottom-0
           w-full
        '
    >
      <span className='footer w-1/5 h-40 float-left font-black text-primary text-5xl text-center pt-14'>FiveTea.</span>
      <div>
        <ul
          className='
                    list-none 
                    flex
                    flex-nowrap
                    pl-0
                    w-9/12
                '
        >
          {/* column1 */}
          <li className='w-3/12 pl-10'>
            <h4 className='text-primary text-xl font-medium my-2.5 ml-6'>Địa chỉ liên hệ</h4>
            <ul className='list-none pl-0 flex items-center pb-2.5'>
              <li>
                <FaMapMarkerAlt color='#4d8b54' />
              </li>
              <li className='ml-2.5'> 5/15, đường 106, phường Tăng Nhơn Phú A, thành phố Thủ Đức</li>
            </ul>

            <ul className='list-none pl-0 flex items-center pb-2.5'>
              <li>
                <a href='tel:035267814' className='text-white no-underline'>
                  <FaPhoneAlt color='#4d8b54' />
                </a>
              </li>
              <li className='ml-2.5'>03-526-7814</li>
            </ul>
          </li>

          {/* column2 */}
          <li className='w-3/12 pl-10'>
            <h4 className='text-primary text-xl font-medium my-2.5 ml-6'>Gmail</h4>
            <ul
              className='list-none 
                        pl-0 flex items-center pb-2.5'
            >
              <li>
                <FaEnvelope color='#4d8b54' />
              </li>
              <li className='ml-2.5'>info@fiveTea.com </li>
            </ul>
          </li>
          {/* column3 */}
          <li className='w-3/12 pl-10'>
            <h4 className='text-primary text-xl font-medium my-2.5 ml-6'>Liên hệ trực tiếp</h4>
            <ul className='list-none pl-0 flex items-center pb-2.5'>
              <li>
                <a href='https://www.youtube.com/watch?v=HYP9DLNsYwk' className='text-white no-underline'>
                  <FaFacebook color='#4d8b54' />
                </a>
              </li>

              <li className='ml-2.5'>Link facebook</li>
            </ul>
            <ul className='list-none pl-0 flex items-center pb-2.5'>
              <li>
                <a href='https://www.youtube.com/watch?v=HYP9DLNsYwk' className='text-white no-underline'>
                  <FaYoutube color='#4d8b54' />
                </a>
              </li>
              <li className='ml-2.5'>Link youtube</li>
            </ul>
          </li>
          {/* column4 */}
          <li className='w-3/12 pl-10'>
            <h4 className='text-primary text-xl font-medium my-2.5 ml-6'>Chính sách</h4>
            <ul className='list-none pl-0 '>
              <li>Hình thức thanh toán</li>
              <li>Vận chuyển giao nhận</li>
              <li>Bảo trì, bảo hành</li>
              <li>Chính sách bảo mật</li>
            </ul>
          </li>
        </ul>
        <hr />
        <div className='text-center p-6'>
          <p className='col-slogan'>Chúng tôi biết bạn có nhiều sự lựa chọn,cảm ơn vì đã chọn chúng tôi</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
