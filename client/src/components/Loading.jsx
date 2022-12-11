import React from 'react'

const Loading = ({ type = 'blur' }) => {
  const className = type === 'blur' ? 'bg-opacity-25' : ''
  return (
    <div className={`fixed inset-0 z-[999] flex items-center justify-center bg-gray-100 ${className}`}>
      <div className='h-16 w-16 animate-spin rounded-full border border-gray-400 border-t-black'></div>
    </div>
  )
}

export default Loading
