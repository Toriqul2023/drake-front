import Image from 'next/image'
import React from 'react'
import './Introduce.css'

const Introduce = () => {
  return (
    <>
      <div className='mb-[115px]'>
      <button className="border text-[14px] rounded-3xl py-2  px-5">INTRODUCE</button>
         <div className=''>
            <h1 className='text-[75px] mb-5 font-light'> Say Hi from <span className='text-[#28E98C]'>Toriqul</span>, Webflow Designer and Developer</h1>
            <p className='max-w-[488px] text-gray-400 my-5 mb-[50px]'>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
            
            <div className="border ml-[auto] mr-[20px] mb-[20px] rounded-full relative w-[175px] h-[175px] flex items-center  relative">
             <Image id='img'  src={'https://wpriverthemes.com/drake/wp-content/uploads/2023/03/round-text.png'} height={500} width={500} />
            </div>
           
           
            <div className='flex w-[500px] justify-between'>
              <div>
                 <h3 className='text-5xl  text-[#28E98C]'>10+</h3>
                 <p className='text-gray-400 text-[14px] mt-3'>
                 YEARS OF
                 EXPERIENCE         
                 </p>
              </div>
              <div>
                 <h3 className='text-5xl text-[#28E98C]'>182+</h3>
                 <p className='text-gray-400 text-[14px] mt-3'>
                 PROJECTS COMPLETED ON LOCALS
                 </p>
              </div>
              
               
            </div>
         </div>
      </div>
         
    </>
  )
}

export default Introduce