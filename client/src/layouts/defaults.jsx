import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const DefaultLayout = () => {
  return (
    <div className='flex flex-col min-h-screen max-w-screen'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default DefaultLayout
