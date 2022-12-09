import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({ imgSrc }) => {
  return (
    <div className='my-0 mx-auto max-w-[1100px]'>
      <Link className='' to='/products'>
        <img className='my-0 mx-auto mt-10 rounded-xl' src={imgSrc} alt='Banner' />
      </Link>
    </div>
  )
}
export default Banner
