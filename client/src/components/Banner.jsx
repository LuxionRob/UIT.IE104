import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({ img }) => {
  return (
    <div className='my-0 mx-auto max-w-[1100px]'>
      <Link className='' to='/products'>
        <img
          className='my-0 mx-auto mt-10 rounded-xl'
          src='https://f7-zpcloud.zdn.vn/2722194454812017275/9b06c849ccb715e94ca6.jpg'
          alt='Banner'
        />
      </Link>
    </div>
  )
}
export default Banner
