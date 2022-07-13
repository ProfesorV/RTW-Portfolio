import React from 'react'
import {SiJava, SiCsharp, SiPython, SiCplusplus, SiC, SiDotnet} from 'react-icons/si'
import Typed from 'react-typed'

const Experience = () => {
  return (
    <div name='experience' className='w-full h-screen bg-[#0a192f] text-[#9c9898]'>
        {/*Container for Icons*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-3xl font-bold inline border-b-4 border-t-4 border-[#00FF00]'>Experience</p>
                <p className='py-4'>Technologies, Frameworks, and Languages I've worked with.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
                <div className='group shadow-md shadow-black  hover:scale-110 duration-500 '>
                    <SiC className=" fill-white mx-auto group-hover:fill-[#59115c] duration-300" size={125}/>
                    <Typed className='text-[#9800df] md:text-3xl sm:text-2xl text-xl font-bold pt-2 inline border-b-4 border-[#47df00]'
                    strings={['C','gcc','KLone','inih', 'MSYS2']} typeSpeed={30} backspeed={50} loop/>
                    <div><Typed className='text-[#df0047] md:text-3xl sm:text-2xl text-xl font-bold pt-2'
                    strings={['Embedded Systems', 'Algorithms','Education']} typeSpeed={30} backspeed={50} loop/></div>
                </div>
                <div className='group shadow-md shadow-black hover:scale-110 duration-500 '>
                    <SiCsharp className=" fill-white mx-auto group-hover:fill-[#823085] duration-300" size={125}/>
                    <Typed className='text-[#9800df] md:text-3xl sm:text-2xl text-xl font-bold pt-2 inline border-b-4 border-[#47df00]'
                    strings={['C#','Xamarin']} typeSpeed={30} backspeed={50} loop/>
                    <div><Typed className='text-[#df0047] md:text-3xl sm:text-2xl text-xl font-bold pt-2'
                    strings={['Apps', 'RESTful APIs','CRUD','REST','Web Development','Enterprise Systems Development']} typeSpeed={30} backspeed={50} loop/></div>
                </div>
                <div className='group shadow-md shadow-black  hover:scale-110 duration-500 '>
                    <SiCplusplus className=" fill-white mx-auto group-hover:fill-[#8c1eff] duration-300" size={125}/>
                    <Typed className='text-[#9800df] md:text-3xl sm:text-2xl text-xl font-bold pt-2 inline border-b-4 border-[#47df00]'
                    strings={['C++','Windows Template Library','Boost','POCO C++','JUCE','FunctionalPlus', 'ETL']} typeSpeed={30} backspeed={50} loop/>
                    <div><Typed className='text-[#df0047] md:text-3xl sm:text-2xl text-xl font-bold pt-2'
                    strings={['Apps', 'Embedded Systems','Game Development','Education','Graphics Programming','Enterprise Systems Development']} typeSpeed={30} backspeed={50} loop/></div>
                </div>
                <div className='group shadow-md shadow-black  hover:scale-110 duration-500 '>
                    <SiDotnet className=" fill-white mx-auto group-hover:fill-[#59325a] duration-300" size={125}/>
                    <Typed className='text-[#9800df] md:text-3xl sm:text-2xl text-xl font-bold pt-2 inline border-b-4 border-[#47df00]'
                    strings={['.NET','CLR','Xamarin','Mono','ASP','MVC', 'ASP.NET']} typeSpeed={30} backspeed={50} loop/>
                    <div><Typed className='text-[#df0047] md:text-3xl sm:text-2xl text-xl font-bold pt-2'
                    strings={['Windows Apps','Game Development','Education','Mobile Apps','Enterprise Systems Development', 'Web Apps']} typeSpeed={30} backspeed={50} loop/></div>
                </div>
                <div className=' group shadow-md shadow-black  hover:scale-110 duration-500 '>
                    <SiJava className="fill-white mx-auto group-hover:fill-[#f89820] duration-300" size={125}/>
                    <Typed className='text-[#9800df] md:text-3xl sm:text-2xl text-xl font-bold pt-2 inline border-b-4 border-[#47df00]'
                    strings={['Java','Spring','Hibernate','Struts','Grails','Scala', 'Kotlin']} typeSpeed={30} backspeed={50} loop/>
                    <div><Typed className='text-[#df0047] md:text-3xl sm:text-2xl text-xl font-bold pt-2'
                    strings={['Desktop Apps','Networking','Education','Mobile Apps','Enterprise Systems Development', 'Web Apps']} typeSpeed={30} backspeed={50} loop/></div>
                </div>
                <div className='group shadow-md shadow-black  hover:scale-110 duration-500 '>
                    <SiPython className=" fill-white mx-auto group-hover:fill-[#FFD43B] duration-300" size={125}/>
                    <Typed className='text-[#9800df] md:text-3xl sm:text-2xl text-xl font-bold pt-2 inline border-b-4 border-[#47df00]'
                    strings={['Python','Django','Numpy','Pandas','Scikit-learn','Natural Language Toolkit', 'Tensorflow','Keras','RaspberryPi']} typeSpeed={30} backspeed={50} loop/>
                    <div><Typed className='text-[#df0047] md:text-3xl sm:text-2xl text-xl font-bold pt-2'
                    strings={['Data Science','Networking','Education','Mobile Apps','Scripting', 'Web Apps','Embedded Systems']} typeSpeed={30} backspeed={50} loop/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience