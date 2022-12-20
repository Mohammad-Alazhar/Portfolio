import React from 'react'
import {FaGithub,FaLinkedin,FaInstagram,FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
const SocialLinks = () => {
  return (
    <div className='lg:flex hidden flex-col top-[35%] left-0 fixed'>
      <ul>
        <li className='flex justify-between items-center w-40 h-14 px-4 rounded-t-md bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 '>
          <a href="https://github.com/Mohammad-Alazhar" target="_blank"
          className='flex justify-between items-center w-full text-white'>
            Github <FaGithub size={25}/>
            </a>
        </li>
        <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 '>
          <a href="https://www.facebook.com/mhd.alazhar.3" target="_blank"
          className='flex justify-between items-center w-full text-white'>
            Facebook <FaFacebook size={25}/>
            </a>
        </li>         
        <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 '>
          <a href="mailto:alazharmohammad331@gmail.com" target="_blank" 
          className='flex justify-between items-center w-full text-white'>
            Mail <HiOutlineMail size={25}/>
            </a>
        </li>         
        <li className='flex justify-between items-center w-40 h-14 px-4 rounded-b-md bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 '>
          <a href="./resume.pdf" download={true} target="_blank"
          className='flex justify-between items-center w-full text-white'>
            Resume <BsFillPersonLinesFill size={25}/>
            </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinks