import React, { useState } from 'react'
import { Link } from 'react-scroll'
import resume from "/Yash_Resume.pdf"

const Header = () => {
  return (
    <div className='md:flex justify-between space-y-2 md:space-y-0 h-20 items-center border px-6 md:px-16 bg-gray-100'>
      <div className='md:text-2xl text-center text-xl font-bold mt-2 md:mt-0'>Yash Kumar</div>
      <div className='space-x-6 text-center cursor-pointer'>
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} >Home</Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} >About</Link>
        <Link activeClass="active" to="services" spy={true} smooth={true} offset={50} duration={1000} >Services</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={1000} >Skills</Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={1000} >Projects</Link>
      </div>
      <div className='hidden md:flex'>
        <a href={resume} download="Resume" className='px-4 py-2 bg-orange-500 rounded-full font-bold'>Download CV</a>
      </div>
    </div>
  )
}

export default Header
