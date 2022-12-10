import React from 'react'

export default function LoadingSpinner() {
  return (
    <div className='spinner-container'>
      <div className='h-16 w-16 animate-spin rounded-full border border-gray-400 border-t-black'></div>
    </div>
  )
}
