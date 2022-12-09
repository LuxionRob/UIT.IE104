import React, { useState, useEffect, useContext, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AuthContext } from '../components/Auth'
const nav = [
  { name: 'Trang chủ', path: '/' },
  { name: 'Sản phẩm', path: '/products' },
  { name: 'Liên hệ', path: '/about-us' },
]

const Header = () => {
  const { authenticatedAccount, signOut } = useContext(AuthContext)
  const [isDropdownShow, setIsDropdownShow] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        setIsDropdownShow(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
  }, [ref])

  const onLogOut = () => {
    signOut()
    setIsDropdownShow(false)
  }
  return (
    <div className='px-64 h-24 max-w-screen '>
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

        <div className='flex items-center justify-between'>
          <input
            className='input h-9 rounded-full grow border-2 border-solid border-primary pl-4 shadow-primary shadow-md'
            type='text'
            placeholder='Bạn muốn uống gì ...'
          />
          {authenticatedAccount ? (
            <div className='ml-8 relative'>
              <img
                onClick={() => setIsDropdownShow(!isDropdownShow)}
                width='65'
                className='object-contain rounded-full cursor-pointer'
                src={authenticatedAccount.avatarImage}
                alt={authenticatedAccount.name}
              />
              {isDropdownShow && (
                <ul
                  ref={ref}
                  className='z-10 absolute top-full right-0 w-64 shadow-lg bg-white border-2 border-gray-200 rounded-lg'
                >
                  <div className='pl-4 py-4'>
                    <h2 className='font-bold'>{authenticatedAccount.name}</h2>
                    <span className='font-normal capitalize'>{authenticatedAccount.role}</span>
                  </div>
                  <hr />
                  <div>
                    <Link
                      to='/profile'
                      className='button w-full bg-white rounded-none border-none pl-4 py-2 inline-block'
                    >
                      Hồ sơ
                    </Link>
                    <Link
                      to='/payment'
                      className='button w-full bg-white rounded-none border-none pl-4 py-2 inline-block'
                    >
                      Thanh toán
                    </Link>
                    {authenticatedAccount.role === 'admin' && (
                      <Link
                        to='/admin'
                        className='button w-full bg-white rounded-none border-none pl-4 py-2 inline-block'
                      >
                        Thống kê
                      </Link>
                    )}
                  </div>
                  <hr />
                  <button
                    className='button w-full text-left bg-white rounded-none border-none pl-4 py-2'
                    onClick={onLogOut}
                  >
                    Đăng xuất
                  </button>
                </ul>
              )}
            </div>
          ) : (
            <NavLink to='/login' className='ml-8 bg-primary my-auto py-2 px-4 rounded-lg text-white whitespace-nowrap'>
              Đăng nhập
            </NavLink>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
