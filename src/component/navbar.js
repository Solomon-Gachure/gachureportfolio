import React, { useState } from 'react'
import profile from '../assets/profile.JPG'
import { MdOutlineMenu,MdOutlineLightbulb, MdClose  } from "react-icons/md";
import { NavLink, Outlet } from 'react-router-dom'
const Navbar = () => {
  const [lightmode, setLightmode]=useState(false)
  const [menu, setMenu]=useState(false)
    const handleMenu=()=>{
      setMenu(!menu)
    }
    const handleClose=()=>{
      setMenu(false)
    }
    const handleClick=()=>{
      handleClose()
    }
    
    const switchLight=()=>{
      setLightmode(!lightmode)
    }
  
  return (
    <div className={`font-mono w-full h-full ${lightmode? 'bg-white text-black': 'bg-teal-950  text-white'}`}>
        <div className='flex justify-between items-center p-4'>
            {/**profile icon */}
            <div className='w-[40px] h-[40px] rounded-full'>
              <NavLink to="/home"><img className='w-full h-full object-cover rounded-full'
src={profile}
 alt="profile" /></NavLink>

            </div>
            {/**links to the pages */}
            <div className=' bg-opacity-60 backdrop-blur-lg backdrop-filter:blur(8px) bg-clip-padding'>
                
                  <ul className='hidden md:flex items-center gap-4 md:text-lg'>
                    
                  <NavLink to="/home">Home</NavLink>
                  <NavLink to="/about" >About</NavLink>
                  <NavLink to="/skills">Skills</NavLink>
                  <NavLink to="/projects">Projects</NavLink>
                 
                    <MdOutlineLightbulb onClick={switchLight} className={`cursor-pointer ${lightmode ? 'text-yellow-400': ''}`} size={30}   />
                </ul>
               <div className='flex gap-4 items-center'>
                <MdOutlineLightbulb size={30} onClick={switchLight} className={`cursor-pointer md:hidden ${lightmode ? 'text-yellow-400': ''}`}  />
                <MdOutlineMenu onClick={handleMenu} className='cursor-pointer flex md:hidden' size={30} />
               </div>
            </div>
        </div>
        {
      menu &&
      <div className='w-full h-screen'>
        <div className='h-screen w-full '>
                
                  <ul className='flex flex-col top-0 pt-16 p-8 text-4xl text-gray-300 bg-transparent/40 fixed z-50 inset-0 ease-in-out h-full w-full backdrop-blur-lg backdrop-filter:blur(8px) gap-4 transition duration-100'>
                  <div className=' ml-auto'>
                    <MdClose onClick={handleClose} className='cursor-pointer z-50 font-bold animate-bounce' size={35}/>
                  </div>
                  <NavLink to="/home" onClick={handleClick}>Home</NavLink>
                  <NavLink to="/about" onClick={handleClick} >About</NavLink>
                  <NavLink to="/skills" onClick={handleClick}>Skills</NavLink>
                  <NavLink to="/projects" onClick={handleClick}>Projects</NavLink>
                </ul>
            </div>
      </div>
    }
<main>
        <Outlet/>
    </main>
    
    </div>
  )
}

export default Navbar