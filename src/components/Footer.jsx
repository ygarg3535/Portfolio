import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-gray-100 py-5 space-y-2 md:space-y-0 flex flex-col md:flex-row items-center justify-between md:px-48'>
        <div>
            <p>@2024 Yash Kumar All Rights Reserved</p>
        </div>
        <div className='space-x-5 '>
            <a className='hover:underline' href="">About</a>
            <a className='hover:underline' href="">Privacy Policy</a>
            <a className='hover:underline' href="">Licensing</a>
        </div>
      </div>
    </>
  )
}

export default Footer
