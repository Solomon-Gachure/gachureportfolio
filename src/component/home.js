import React from 'react'
import Typewriter from 'typewriter-effect';
import profile from '../assets/newprofile.png'
import {FaGithub, FaLinkedin, FaSquareXTwitter} from 'react-icons/fa6'
const Home = () => {
    
  const textsToType = [
    "Software Engineer",
    "Technical Writer",
    "Tec Savvy",
  ];
  return (
    <div className='h-screen'>
        <div className='flex justify-center items-center md:p-4 pt-20   '>
            <div className='border-b  '>
                <div className='md:w-[350px] md:h-[200px]  w-[200px] h-[100px] rounded-t-full  '>
            <img className='w-full h-full object-cover rounded-t-full' src={profile} alt="profile" />
            <div className='flex justify-center items-center p-4 gap-4'>
                <a href="https://github.com/Solomon-Gachure" target='blank'><FaGithub size={25}/></a>
                <a href="https://www.linkedin.com/in/solomon-gachure-64a167183/" target='blank'><FaLinkedin size={25}/></a>
                <a href="https://twitter.com/" target='blank'><FaSquareXTwitter size={25}/></a>
            </div>
        </div>
            </div>
        </div>
        <div className='flex justify-center items-center gap-8 md:p-8 pt-20'>
            <div className='border p-4 pt-8 md:pt-20 w-[100px] md:w-[200px]'>
                <h1 className='text-2xl md:text-6xl text-right '>Hello</h1>
                <h1 className='text-4xl font-bold'>World!</h1>
            </div>
            <div>
                <h1 className='text-xl md:text-4xl'>I am Solomon Gachure</h1>
<h1 className='text-center text-lg'>a</h1>
<div className='ml-auto text-right text-xl md:text-2xl font-bold text-yellow-400 pt-2'>
    <Typewriter options={{ strings: textsToType, autoStart: true, loop: true }} />
</div>
            </div>
        </div>
        
    </div>
  )
}

export default Home