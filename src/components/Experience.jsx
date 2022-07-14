import React from 'react'
import {SiJava, SiCsharp, SiPython, SiCplusplus, SiC, SiDotnet} from 'react-icons/si'
import Typed from 'react-typed'

const Experience = () => {
  return (
    <div name='experience' className='w-full h-screen bg-[#0a192f] text-[#9c9898]'>
        {/*Container for Icons*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <Typed strings={[
                'Experienced in: Embedded System Developement', 
                'Experienced in: Algorithm Analysis',
                'Experienced in: Curriculum Development',
                'Experienced in: App Developement', 
                'Experienced in: Web Development',
                'Experienced in: Windows Application Development',
                'Experienced in: Mobile Application Development',
                'Experienced in: RESTful API Development',
                'Experienced in: CRUD',
                'Experienced in: REST',
                'Experienced in: Enterprise Systems Development',
                'Experienced in: Game Development',
                'Experienced in: 3D Graphics Programming', 
                'Experienced in: Data Science',
                'Experienced in: Framework Development']}
                className='text-3xl mt-2 font-bold inline border-b-4 border-[#8cc04b] text-[#df0047]'
                typeSpeed={50} backSpeed={70} backDelay={1} loop smartBackSpace/>
            </div>
            <p className='py-2'>These are some of the technologies I've worked with.</p>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='group shadow-md shadow-black border-4 border-black p-4 hover:scale-110 duration-500 '>
                    <SiC className=" fill-gray-500 mx-auto group-hover:fill-[#59115c] duration-300" size={50}/>
                    <Typed className='text-[#dd4814] md:text-3xl sm:text-2xl font-bold pt-2 inline border-b-4 border-[#5e2450]'
                    strings={['C','gcc','KLone','inih', 'MSYS2']} typeSpeed={30} backspeed={50} loop/>
                </div>
                <div className='group shadow-md shadow-black border-4 border-black p-4 hover:scale-110 duration-500 '>
                    <SiCsharp className=" fill-gray-500 mx-auto group-hover:fill-[#823085] duration-300" size={50}/>
                    <Typed className='text-[#dd4814] md:text-3xl sm:text-2xl font-bold pt-2 inline border-b-4 border-[#5e2450]'
                    strings={['C#','Xamarin']} typeSpeed={30} backspeed={50} loop/>
                </div>
                <div className='group shadow-md shadow-black  border-4 border-black p-4 hover:scale-110 duration-500 '>
                    <SiCplusplus className=" fill-gray-500 mx-auto group-hover:fill-[#8c1eff] duration-300" size={50}/>
                    <Typed className='text-[#dd4814] md:text-3xl sm:text-2xl font-bold pt-2 inline border-b-4 border-[#5e2450]'
                    strings={['C++','Windows Template Library','Boost','POCO C++','JUCE','FunctionalPlus', 'ETL']} typeSpeed={30} backspeed={50} loop/>
                </div>
                <div className='group shadow-md shadow-black  border-4 border-black p-4 hover:scale-110 duration-500 '>
                    <SiDotnet className=" fill-gray-500 mx-auto group-hover:fill-[#59325a] duration-300" size={50}/>
                    <Typed className='text-[#dd4814] md:text-3xl sm:text-2xl font-bold pt-2 inline border-b-4 border-[#5e2450]'
                    strings={['.NET','CLR','Xamarin','Mono','ASP','MVC', 'ASP.NET']} typeSpeed={30} backspeed={50} loop/>
                </div>
                <div className=' group shadow-md shadow-black  border-4 border-black p-4 hover:scale-110 duration-500 '>
                    <SiJava className="fill-gray-500 mx-auto group-hover:fill-[#f89820] duration-300" size={50}/>
                    <Typed className='text-[#dd4814] md:text-3xl sm:text-2xl font-bold pt-2 inline border-b-4 border-[#5e2450]'
                    strings={['Java','Spring','Hibernate','Struts','Grails','Scala', 'Kotlin']} typeSpeed={30} backspeed={50} loop/>
                </div>
                <div className='group shadow-md shadow-black  border-4 border-black p-4 hover:scale-110 duration-500 '>
                    <SiPython className=" fill-gray-500 mx-auto group-hover:fill-[#FFD43B] duration-300" size={50}/>
                    <Typed className='text-[#dd4814] md:text-3xl sm:text-2xl font-bold pt-2 inline border-b-4 border-[#5e2450]'
                    strings={['Python','Django','Numpy','Pandas','Scikit-learn','Natural Language Toolkit', 'Tensorflow','Keras','RaspberryPi']} typeSpeed={30} backspeed={50} loop/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience