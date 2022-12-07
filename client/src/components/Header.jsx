import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  const nav = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Sản phẩm', path: '/products' },
    { name: 'Voucher', path: '/voucher' },
    { name: 'Về chúng tôi', path: '/about-us' },
    { name: 'Thông tin cá nhân', path: '/profile' },
  ]

  return (
    <div className='mx-auto h-24'>
      <div className='flex mx-auto'>
        <Link to='/' className='font-sans px-10 font-bold leading-[6rem] text-primary'>
          FiveTea.
        </Link>
        <ul className='flex'>
          {nav.map((item) => {
            return (
              <Link key={item.name} to={item.path} className='text-primary mr-5 px-3 leading-[6rem]'>
                {item.name}
              </Link>
            )
          })}
        </ul>

        <div className='my-auto'>
          <input
            className='input rounded-full w-52 border-2 border-solid border-primary pl-2 shadow-primary shadow-md'
            type='text'
            placeholder='Bạn muốn uống gì ...'
          />
        </div>
        <Link to='/login' className='ml-16 bg-primary my-auto py-1 px-2 rounded-lg text-white'>
          Đăng nhập
        </Link>
      </div>
    </div>
  )
}

export default Header
