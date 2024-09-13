import React from 'react'

const Services = () => {
  return (
    <div id='services'>
      <div className='py-8 md:py-12'>
        <h1 className='text-center md:text-4xl text-3xl underline font-bold'>My Services</h1>
      </div>
      <div className='md:flex mt-4 space-x-5 space-y-6 md:space-y-0 px-10'>
        <div className='space-y-4 md:ml-0 ml-5 cursor-pointer hover:bg-gray-100 shadow-lg rounded-xl bg-slate-200 text-center p-5'>
        <i class="text-4xl fa-solid fa-globe"></i>
            <h1 className='text-3xl'>Web Development</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium labore atque aut ratione eius odit ducimus voluptatibus debitis fuga! Praesentium.</p>
        </div>
        <div className='space-y-4 cursor-pointer hover:bg-gray-100 shadow-lg rounded-xl bg-slate-200 text-center p-5'>
        <i class="text-4xl fa-solid fa-code"></i>
        <h1 className='text-3xl'>Backend Development</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium labore atque aut ratione eius odit ducimus voluptatibus debitis fuga! Praesentium.</p>
        </div>
        <div className='space-y-4 cursor-pointer hover:bg-gray-100 shadow-lg rounded-xl bg-slate-200 text-center p-5'>
        <i class="text-4xl fa-brands fa-aws"></i>
        <h1 className='text-3xl'>AWS Services</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium labore atque aut ratione eius odit ducimus voluptatibus debitis fuga! Praesentium.</p>
        </div>
      </div>
    </div>
  )
}

export default Services
