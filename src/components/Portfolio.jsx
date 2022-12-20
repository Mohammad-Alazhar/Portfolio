import React from 'react'
import { portfolio } from '../constants'
const Portfolio = () => {
  return (
    <div id="portfolio" 
    className='bg-gradient-to-b from-black to-gray-800 w-full text-white md: h-full pt-20'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolio.map((port)=>(
            <div key={port.id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={port.title} alt={port.title} className='rounded-t-md duration-200 hover:scale-105 object-contain'/>
            <div className='flex justify-center items-center p-4'>
              <button className='w-1/2 px-6 py-2 m-2 hover:scale-105 duration-200'>
                  <a href={port.link} target="_blank" >Demo</a>
              </button>
              <button className='w-1/2 px-6 py-2 m-2 hover:scale-105 duration-200'>
                  <a href={port.glink} target="_blank">Code</a> 
              </button>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Portfolio
