import React from 'react'

const About = () => {
  return (
    <div id='about'>
      <div className='md:py-12 py-6 mt-96 md:mt-0 bg-gray-100'>
        <h1 className='text-center md:text-4xl text-3xl underline font-bold pb-16'>About Me</h1>

        <div className='md:flex items-center'>
            <div className='w-full flex justify-center'>
                <img className='md:w-96 md:h-96 w-56 h-56 ' src="/avatarImage.png" alt="" />
            </div>
            <div className='w-full py-8 md:py-0 flex justify-center'>
                <div className='space-y-5 w-2/3'>
                <h1 className='md:text-4xl text-xl font-semibold'>Full Stack Java Developer & Backend Developer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dignissimos laborum laboriosam deserunt repudiandae magnam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro quam impedit asperiores, ex minus expedita ducimus quod est fugiat.</p>
                <button className='bg-orange-500 ml-16 md:ml-0 px-3 py-2 rounded-full shadow-lg'>Read More..</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
