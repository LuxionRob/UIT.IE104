import React, { useState, useEffect, useContext, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ImMenu } from 'react-icons/im'
import { AiOutlineSearch } from 'react-icons/ai'
import { AuthContext } from './Auth'
const nav = [
  { name: 'Trang chủ', path: '/' },
  { name: 'Sản phẩm', path: '/products' },
]

const Header = () => {
  const { authenticatedAccount, signOut } = useContext(AuthContext)
  const [isAvatarDropdownShow, setAvatarIsDropdownShow] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        setAvatarIsDropdownShow(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
  }, [ref])

  const onLogOut = () => {
    signOut()
    setAvatarIsDropdownShow(false)
  }

  const onMobileClick = () => {
    const navbar = document.getElementById('navbar')
    navbar.classList.toggle('responsive')
  }

  const cancelNavbar = () => {
    const navbar = document.getElementById('navbar')
    navbar.classList.remove('responsive')
  }

  const handleClickOnSearch = () => {
    const searchInput = document.getElementById('search-input')
    searchInput.classList.toggle('search')
  }

  return (
    <div className='px-64 xl:px-8 lg:px-4 h-fit sm:pt-4 sm:fixed sm:top-0 sm:left-0 sm:right-0 bg-white z-10 sm:shadow-sm'>
      <div className='flex justify-between relative w-full'>
        <NavLink
          to='/'
          className='flex justify-center items-center font-sans font-bold text-primary text-2xl sm:text-xl'
        >
          FireTea.
        </NavLink>
        <ul className='flex basis-1/2 grow xl:grow-0 xl:basis-1/3 ml-12 lg:m-0 sm:hidden'>
          {nav.map((item) => {
            return (
              <NavLink key={item.name} to={item.path} className='navbar-item sm:leading-normal responsive'>
                {item.name}
              </NavLink>
            )
          })}
        </ul>

        <div className='flex items-center justify-end xl:grow basis-2/5'>
          <input
            className='input sm:hidden h-9 rounded-full border-2 border-solid border-primary pl-4 shadow-primary shadow-md'
            type='text'
            placeholder='Bạn muốn uống gì...'
          />
          <div className='hidden sm:block' onClick={handleClickOnSearch}>
            <AiOutlineSearch />
          </div>
          {authenticatedAccount ? (
            <div className='ml-8 relative xl:ml-4'>
              <img
                onClick={() => {
                  setAvatarIsDropdownShow((isAvatarDropdownShow) => !isAvatarDropdownShow)
                }}
                width={window.innerWidth < 640 ? '45' : '65'}
                className='object-contain rounded-full cursor-pointer'
                src={authenticatedAccount.avatarImage}
                alt={authenticatedAccount.name}
              />
              {isAvatarDropdownShow && (
                <ul
                  ref={ref}
                  className='z-20 absolute top-full right-0 w-64 shadow-lg bg-white border-2 border-gray-200 rounded-lg'
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
                      onClick={() => setAvatarIsDropdownShow(false)}
                    >
                      Hồ sơ
                    </Link>
                    <Link
                      to='/payment'
                      className='button w-full bg-white rounded-none border-none pl-4 py-2 inline-block'
                      onClick={() => setAvatarIsDropdownShow(false)}
                    >
                      Thanh toán
                    </Link>
                    {authenticatedAccount.role === 'admin' && (
                      <Link
                        to='/admin'
                        className='button w-full bg-white rounded-none border-none pl-4 py-2 inline-block'
                        onClick={() => setAvatarIsDropdownShow(false)}
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
            <Link
              to='/login'
              className='ml-8 bg-primary py-2 px-4 rounded-lg text-white whitespace-nowrap sm:text-sm sm:px-2 sm:py-1'
            >
              Đăng nhập
            </Link>
          )}
        </div>
      </div>
      <input
        id='search-input'
        className='transition-all delay-200 ease-linear p-0 pl-4 opacity-0 w-full h-0 m-0'
        type='text'
        placeholder='Bạn muốn uống gì...'
      />
      <ul className='hidden sm:flex flex-col justify-center' id='navbar'>
        <div className='flex justify-between items-center'>
          <NavLink to='/' className='w-full inline-block text-primary h-8 font-semibold leading-loose'>
            Trang chủ
          </NavLink>
          <div className='mr-2 w-8 h-8 justify-center flex items-center' onClick={onMobileClick}>
            <ImMenu />
          </div>
        </div>
        <NavLink
          to='/products'
          className='dropdown opacity-0 w-full text-primary font-semibold h-0 transition-all delay-200 ease-linear leading-loose'
          onClick={cancelNavbar}
        >
          Sản phẩm
        </NavLink>
      </ul>
    </div>
  )
}

export default Header
