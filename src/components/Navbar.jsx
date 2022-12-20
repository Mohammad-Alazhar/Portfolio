import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { navLinks } from '../constants'
import { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='flex justify-between items-center fixed w-full h-20 px-4 bg-black text-white'>
      <div>
        <h1 className='font-signature md:text-5xl text-3xl ml-2'>Mohammad</h1>
      </div>
      <div>
        <ul className='sm:flex hidden'>
          {navLinks.map((navLink)=>(
            <li key={navLink.id} 
                className='px-4 cursor-pointer font-bold text-gray-500 hover:scale-105 duration-200'>
              <a href={`#${navLink.id}`}>
                  {navLink.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div 
      onClick={() => setToggle((prev => !prev))} 
      className='sm:hidden flex cursor-pointer pr-4 text-gray-500 z-10'
      >
        {toggle ? <FaTimes size={25}/> : <FaBars size={25}/>}
      </div>
      <div
      className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gradient-to-b from-black to-gray-800 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>
        <ul>
          {navLinks.map((navLink,index)=>(
            <li key={navLink.id} 
                onClick={() => setToggle((prev => !prev))} 
                className={`${index !== navLink.length -1 ? "pb-3" : "pb-0"} cursor-pointer font-bold text-gray-500 hover:scale-105 duration-200`}
              >
              <a href={`#${navLink.id}`}>
                  {navLink.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar