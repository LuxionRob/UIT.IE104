import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({ img }) => {
  return (
    <div className='my-0 mx-auto max-w-[1100px]'>
      <Link className='' to='/products'>
        <img className='my-0 mx-auto mt-10 rounded-xl' src='http://localhost:3003/api/images/banners/1' alt='Banner' />
      </Link>
    </div>
  )
}
export default Banner
