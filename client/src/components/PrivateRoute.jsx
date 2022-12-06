import React, { useContext, Fragment } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from './Auth'
import Loading from './Loading'

const PrivateRoute = ({ ...otherProps }) => {
  const { isAuthenticated, isLoading } = useContext(AuthContext)

  return (
    <Fragment>
      {!isLoading ? (
        isAuthenticated ? (
          <Outlet />
        ) : (
          <Navigate to={otherProps.redirectTo ? otherProps.redirectTo : '/'} />
        )
      ) : (
        <Loading />
      )}
    </Fragment>
  )
}

export default PrivateRoute
