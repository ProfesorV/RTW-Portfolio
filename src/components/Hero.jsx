import React from 'react'
import {AiOutlineSmile} from 'react-icons/ai'
import Typed from 'react-typed'
import {SiReact, SiUbuntu} from 'react-icons/si'

const Hero = () => {
  return (
    <div name='base' className='w-full h-screen bg-[#0a192f]'>
    {/* Container for base*/}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <div className='flex'>
      <p className='text-[#00FF00]'>Made with love using</p> 
      <Typed className='text-[#61DBFB] md:text-5xl sm:text-4xl text-xl font-bold pl-2'
      strings={['React']} />
      <SiReact className='fill-[#61DBFB] mt-2' size={25}/>
      <Typed className='text-[#dd4814] md:text-5xl sm:text-4xl text-xl font-bold pl-2'
      strings={['Ubuntu']} />
      <SiUbuntu className='fill-[#dd4814] mt-2' size={25}/>
      </div>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#f9f2f2]'>Victor C</h1>
      <Typed className='text-4xl sm:text-7xl font-bold text-[#9c9898]'
      strings={['Software Engineer', 'MIS Specialist','Embedded Systems Developer','Information Technology Technician']} typeSpeed={50} backspeed={60} loop/>
      <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FF00] hover:border-black hover:text-black'>Welcome 
        <span className='group-hover:rotate-180 duration-500'>
        <AiOutlineSmile className='ml-2'/>
        </span>
        </button>
      </div>
    </div>
    </div>
  )
}

export default Hero