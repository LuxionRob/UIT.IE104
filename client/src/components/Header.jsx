import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  const nav = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Sản phẩm', path: '/products' },
    { name: 'Thông tin cá nhân', path: '/profile' },
    { name: 'Liên hệ', path: '/about-us' },
  ]

  return (
    <div className='px-0 md:px-32 xl:px-64 h-24 max-w-screen '>
      <div className='flex justify-between'>
        <NavLink to='/' className='font-sans font-bold leading-[6rem] text-primary text-2xl'>
          FireTea.
        </NavLink>
        <ul className='flex basis-1/2 grow ml-12'>
          {nav.map((item) => {
            return (
              <NavLink key={item.name} to={item.path} className='navbar-item'>
                {item.name}
              </NavLink>
            )
          })}
        </ul>

        <div className='my-auto'>
          <input
            className='input rounded-full w-6/12 border-2 border-solid border-primary pl-4 shadow-primary shadow-md'
            type='text'
            placeholder='Bạn muốn uống gì ...'
          />
          <NavLink to='/login' className='ml-8 bg-primary my-auto py-2 px-4 rounded-lg text-white whitespace-nowrap'>
            Đăng nhập
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
