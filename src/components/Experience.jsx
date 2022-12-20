import React from 'react'
import { experiences } from '../constants'
const Experience = () => {
  return (
    <div id="experience" 
    className='bg-gradient-to-b from-gray-800 to-black w-full h-full pt-20'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Experience</p>
          <p className='py-6'>These are the technologies i've workd with</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 text-center'>
          {experiences.map((exp)=>(
            <div id={exp.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${exp.style}`}>
            <img src={exp.src} alt="" className='w-20 mx-auto'/>
            <p className='mt-4'>{exp.title}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience