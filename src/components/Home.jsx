import React from 'react'
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import heroImagec from '../assets/heroImagec.png'
const Home = () => {
  return (
<div
      id="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-around h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p className="text-gray-500 py-4 max-w-md">
           Hello, I'm Mohammad
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            Frontend Developer
          </h2>
          <h3 className="text-2xl sm:text-4xl font-bold text-white">
            I bulid websites
          </h3>
          <div>
            <a href="#portfolio">
                <button 
                className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md         bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer tracking-wider'>
                  Portfolio
                  <span className='group-hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardArrowRight size={25}/>
                  </span>
                </button>
              </a>
            
          </div>
        </div>

        <div className='lg:flex hidden'>
          <img
            src={heroImagec}
            alt="my profile"
            className="mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
