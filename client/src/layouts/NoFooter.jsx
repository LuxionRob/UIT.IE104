import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const NoFooter = () => {
  return (
    <div className='max-w-screen flex min-h-screen flex-col'>
      <Header />
      <Outlet />
    </div>
  )
}

export default NoFooter
