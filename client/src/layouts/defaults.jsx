import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const DefaultLayout = () => {
  return (
    <React.Fragment>
      <h1>Layout ne</h1>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}

export default DefaultLayout
