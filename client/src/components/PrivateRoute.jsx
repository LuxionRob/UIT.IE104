import React, { useContext, Fragment } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from './Auth'
import Loading from './Loading'

const PrivateRoute = () => {
  const { authenticatedAccount, isLoading } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <Fragment>
      {!isLoading ? (
        authenticatedAccount ? (
          <Outlet />
        ) : (
          <div className='fixed inset-0 bg-opacity-10 bg-black flex justify-center items-center z-10'>
            <div className='bg-slate-100 w-3/10 h-3/10 shawdow-md flex flex-col items-center justify-center py-8 rounded-xl relative'>
              <h1 className='text-center font-bold text-xl'>Chức năng cần đăng nhập để sử dụng</h1>
              <section className='my-4 w-3/5 text-center'>
                Oops! Bạn đang định sử dụng chức năng này sao, vậy thì hãy đăng nhập nhé {`<(")`}
              </section>
              <div className='flex justify-evenly w-full'>
                <Link to='/' className='button basis-1/3 text-center py-2'>
                  Đi về trang chủ
                </Link>
                <Link to='/login' className='button-primary basis-1/3 text-center py-2'>
                  Đi tới trang đăng nhập
                </Link>
              </div>
            </div>
          </div>
        )
      ) : (
        <Loading />
      )}
    </Fragment>
  )
}

export default PrivateRoute
