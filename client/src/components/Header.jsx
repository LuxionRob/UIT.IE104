import React, { useState, useEffect, useContext, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ImMenu } from 'react-icons/im'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { AuthContext } from './Auth'
import { imageWidthResponsive } from '../utils'

const nav = [
  { name: 'Trang chủ', path: '/' },
  { name: 'Sản phẩm', path: '/products' },
]

const Header = () => {
  const { authenticatedAccount, signOut } = useContext(AuthContext)
  const [isAvatarDropdownShow, setAvatarIsDropdownShow] = useState(false)
  const [isPopup, setIsPopUp] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        setAvatarIsDropdownShow(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
  }, [ref])

  const onClickLogOut = () => {
    setIsPopUp(true)
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
    <div className='z-10 h-fit bg-white px-64 xl:px-8 lg:px-4 sm:fixed sm:top-0 sm:left-0 sm:right-0 sm:pt-4 sm:shadow-sm'>
      <div className='relative flex w-full justify-between'>
        <NavLink
          to='/'
          className='flex items-center justify-center font-sans text-2xl font-bold text-primary sm:text-xl'
        >
          FireTea.
        </NavLink>
        <ul className='ml-12 flex grow basis-1/2 xl:grow-0 xl:basis-1/3 lg:m-0 sm:hidden'>
          {nav.map((item) => {
            return (
              <NavLink key={item.name} to={item.path} className='navbar-item responsive sm:leading-normal'>
                {item.name}
              </NavLink>
            )
          })}
        </ul>

        <div className='flex basis-2/5 items-center justify-end xl:grow'>
          <input
            className='input h-9 rounded-full border-2 border-solid border-primary pl-4 shadow-md shadow-primary sm:hidden'
            type='text'
            placeholder='Bạn muốn uống gì...'
          />
          <div className='hidden sm:block' onClick={handleClickOnSearch}>
            <AiOutlineSearch />
          </div>
          {authenticatedAccount ? (
            <div className='relative ml-8 xl:ml-4'>
              <img
                onClick={() => {
                  setAvatarIsDropdownShow((isAvatarDropdownShow) => !isAvatarDropdownShow)
                }}
                width={imageWidthResponsive('avatar')}
                className='h-[65px] w-[65px] cursor-pointer rounded-full bg-gray-300 object-contain lg:h-[55px] lg:w-[55px] sm:h-[45px] sm:w-[45px]'
                src={authenticatedAccount.avatarImage}
                alt={authenticatedAccount.name}
              />
              {isAvatarDropdownShow && (
                <ul
                  ref={ref}
                  className='absolute top-full right-0 z-20 w-64 rounded-lg border-2 border-gray-200 bg-white shadow-lg'
                >
                  <div className='py-4 pl-4'>
                    <h2 className='font-bold'>{authenticatedAccount.name}</h2>
                    <span className='font-normal capitalize'>{authenticatedAccount.role}</span>
                  </div>
                  <hr />
                  <div>
                    <Link
                      to='/profile'
                      className='button inline-block w-full rounded-none border-none bg-white py-2 pl-4'
                      onClick={() => setAvatarIsDropdownShow(false)}
                    >
                      Hồ sơ
                    </Link>
                    <Link
                      to='/payment'
                      className='button inline-block w-full rounded-none border-none bg-white py-2 pl-4'
                      onClick={() => setAvatarIsDropdownShow(false)}
                    >
                      Thanh toán
                    </Link>
                    {authenticatedAccount.role === 'admin' && (
                      <Link
                        to='/admin'
                        className='button inline-block w-full rounded-none border-none bg-white py-2 pl-4'
                        onClick={() => setAvatarIsDropdownShow(false)}
                      >
                        Thống kê
                      </Link>
                    )}
                  </div>
                  <hr />
                  <button
                    className='button w-full rounded-none border-none bg-white py-2 pl-4 text-left'
                    onClick={onClickLogOut}
                  >
                    Đăng xuất
                  </button>
                </ul>
              )}
            </div>
          ) : (
            <Link
              to='/login'
              className='ml-8 whitespace-nowrap rounded-lg bg-primary py-2 px-4 text-white sm:px-2 sm:py-1 sm:text-sm'
            >
              Đăng nhập
            </Link>
          )}
        </div>
      </div>
      <input
        id='search-input'
        className='m-0 h-0 w-full p-0 pl-4 opacity-0 transition-all delay-200 ease-linear'
        type='text'
        placeholder='Bạn muốn uống gì...'
      />
      <ul className='hidden flex-col justify-center sm:flex' id='navbar'>
        <div className='flex items-center justify-between'>
          <NavLink to='/' className='inline-block h-8 w-full font-semibold leading-loose text-primary'>
            Trang chủ
          </NavLink>
          <div className='mr-2 flex h-8 w-8 items-center justify-center' onClick={onMobileClick}>
            <ImMenu />
          </div>
        </div>
        <NavLink
          to='/products'
          className='dropdown h-0 w-full font-semibold leading-loose text-primary opacity-0 transition-all delay-200 ease-linear'
          onClick={cancelNavbar}
        >
          Sản phẩm
        </NavLink>
      </ul>
      {isPopup && (
        <div className=' fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-10'>
          <div className='shawdow-md relative flex h-3/10 w-3/10 flex-col items-center justify-center rounded-xl bg-slate-100 py-8 lg:w-8/10'>
            <h1 className='text-center text-xl font-bold'>Đăng xuất</h1>
            <section className='my-4 w-3/5 text-center'>Bạn có chăc chắn muốn đăng xuất?</section>
            <div className='flex w-full justify-evenly'>
              <button
                onClick={() => {
                  signOut()
                  setIsPopUp(false)
                }}
                className='button basis-1/3 py-2 text-center'
              >
                Có
              </button>
              <button
                onClick={() => {
                  setIsPopUp(false)
                }}
                className='button-primary basis-1/3 py-2 text-center'
              >
                Không
              </button>
            </div>
            <button
              onClick={(e) => {
                setIsPopUp(false)
              }}
              className='absolute top-4 right-4 text-3xl leading-none hover:text-red-500'
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
