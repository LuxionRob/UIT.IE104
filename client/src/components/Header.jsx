import React, { Fragment } from 'react'

const Header = () => {
  const nav = ['Trang chủ', 'Sản phẩm', 'Voucher', 'Về chúng tôi', 'Thông tin cá nhân']

  return (
    <div className='wrapper max-w-8xl my-0 mx-auto h-24'>
      <div className='header flex my-0 mx-auto'>
        <div
          className='header_logo font-[system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans,
    Helvetica Neue, sans-serif] py-0 px-10 font-black text-fz leading-[96px] text-primary'
        >
          FiveTea.
        </div>
        <div className='list_folder px-20'>
          <ul className='nav flex'>
            {nav.map((item) => {
              return (
                <li className='subnav items-center cursor-pointer flex text-primary mr-5 px-3 leading-[96px]'>
                  {item}
                </li>
              )
            })}
          </ul>
        </div>

        <div className='search my-auto'>
          <input
            className='search_input rounded-full w-52 border-2 border-solid border-primary pl-2 shadow-primary shadow-lg'
            type='text'
            placeholder='Bạn muốn uống gì ...'
          />
        </div>
        <div className='Login ml-16 bg-primary my-auto py-1 px-2 rounded-lg'>
          <span>Đăng nhập</span>
        </div>
      </div>
    </div>
  )
}

export default Header
