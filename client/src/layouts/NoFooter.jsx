import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const NoFooter = () => {
  return (
    <div className='flex flex-col min-h-screen max-w-screen'>
      <Header />
      <Outlet />
    </div>
  )
}

export default NoFooter
