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
          <div className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-10'>
            <div className='shawdow-md relative flex h-3/10 w-3/10 flex-col items-center justify-center rounded-xl bg-slate-100 py-8'>
              <h1 className='text-center text-xl font-bold'>Chức năng cần đăng nhập để sử dụng</h1>
              <section className='my-4 w-3/5 text-center'>
                Oops! Bạn đang định sử dụng chức năng này sao, vậy thì hãy đăng nhập nhé {`<(")`}
              </section>
              <div className='flex w-full justify-evenly'>
                <Link to='/' className='button basis-1/3 py-2 text-center'>
                  Đi về trang chủ
                </Link>
                <Link to='/login' className='button-primary basis-1/3 py-2 text-center'>
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
