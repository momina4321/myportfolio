import React from "react";
import {
    FaGithub,
    FaLinkedin,
  } from 'react-icons/fa';
  import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import resume from '../assets/resume.pdf';

const Contact =() =>{
return(
    <div name='contact' className='w-full h-screen bg-[#0a192f] text-gray-300'>
<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Contact</p>
              </div>
              <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

          <div className='rounded w-[160px] h-[60px] flex bg-blue-600 px-8'>
            <a
              className='flex justify-between items-center w-full text-gray-300 '
              href='https://www.linkedin.com/in/momina-nadeem-02a9301ba/' target="__blank"
              
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </div>
          <div className='rounded w-[160px] h-[60px] flex  bg-[#333333] px-8'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/momina4321' target="__blank"
            >
              Github <FaGithub size={30} />
            </a>
          </div>
          <div className='rounded w-[160px] h-[60px] flex  bg-[#6fc2b0] px-8'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:mominanadeem90@gmail.com' 
            >
              Email <HiOutlineMail size={30} />
            </a>
          </div>
          <div className='rounded w-[160px] h-[60px] flex  bg-[#565f69] px-8'>
            <a target="__blank"
              className='flex justify-between items-center w-full text-gray-300'
              href={resume}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </div>
</div>
</div> 
</div>

    )

}

export default Contact;