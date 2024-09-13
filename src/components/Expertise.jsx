import React from 'react'

const Expertise = () => {
  return (
    <div id="skills">
      <div className='py-12 md:py-14'>
        <h1 className='text-center text-3xl md:text-4xl underline font-bold'>My Expertise</h1>
      </div>
      <div style={{
        backgroundImage: "url(/banner_wallpaper.svg)",
        backgroundSize: "cover",
      }}
       className='md:flex py-8 items-center'>
        <div className='md:w-2/3 md:pl-24 px-10 md:px-0 text-center space-y-3 text-white'>
            <h1 className='text-2xl font-bold'>I love these technologies</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, soluta temporibus cum velit obcaecati accusamus deleniti doloremque explicabo atque rem.</p>
            <div>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMGCSXzzjglKsTtxfzLMKTpRbtQNKrXGwBvgRpxjhTQGsshnJhXfkFrfgQXqbRPmTnpfdM" target="_blank" className='bg-orange-500 px-3 py-2 rounded-full shadow-lg'>Hire Me</a>
            </div>
        </div>
        <div className='md:flex justify-center mt-7 md:mt-0 md:pl-36'>
        <div className='flex md:w-2/3 justify-center h-fit flex-wrap space-x-3 gap-y-3'>
            <p className='bg-gray-300 py-2 px-3 rounded-full w-fit hover:bg-gray-200 cursor-pointer'>Core Java</p>
            <p className='bg-gray-300 py-2 px-3 rounded-full w-fit hover:bg-gray-200 cursor-pointer'>Advance Java</p>
            <p className='bg-gray-300 py-2 px-3 rounded-full w-fit hover:bg-gray-200 cursor-pointer'>Spring Framework</p>
            <p className='bg-gray-300 py-2 px-3 rounded-full w-fit hover:bg-gray-200 cursor-pointer'>Spring Boot</p>
            <p className='bg-gray-300 py-2 px-3 rounded-full w-fit hover:bg-gray-200 cursor-pointer'>Hibernate(ORM)</p>
            <p className='bg-gray-300 py-2 px-3 rounded-full w-fit hover:bg-gray-200 cursor-pointer'>HTML</p>
            <p className='bg-gray-300 py-2 px-3 rounded-full w-fit hover:bg-gray-200 cursor-pointer'>CSS</p>
            <p className='bg-gray-300 py-2 px-3 rounded-full w-fit hover:bg-gray-200 cursor-pointer'>JavaScript</p>
            <p className='bg-gray-300 py-2 px-3 rounded-full w-fit hover:bg-gray-200 cursor-pointer'>Reactjs</p>
            <p className='bg-gray-300 py-2 px-3 rounded-full w-fit hover:bg-gray-200 cursor-pointer'>Tailwind CSS</p>
            <p className='bg-gray-300 py-2 px-3 rounded-full w-fit hover:bg-gray-200 cursor-pointer'>AWS Cloud</p>
            <p className='bg-gray-300 py-2 px-3 rounded-full w-fit hover:bg-gray-200 cursor-pointer'>EC2</p>
            <p className='bg-gray-300 py-2 px-3 rounded-full w-fit hover:bg-gray-200 cursor-pointer'>Elastic BeanStalk</p>
            <p className='bg-gray-300 py-2 px-3 rounded-full w-fit hover:bg-gray-200 cursor-pointer'>S3</p>
            <p className='bg-gray-300 py-2 px-3 rounded-full w-fit hover:bg-gray-200 cursor-pointer'>RDS</p>
            <p className='bg-gray-300 py-2 px-3 rounded-full w-fit hover:bg-gray-200 cursor-pointer'>Deploying on Cloud</p>
        </div>
        </div> 
      </div>
    </div>
  )
}

export default Expertise
