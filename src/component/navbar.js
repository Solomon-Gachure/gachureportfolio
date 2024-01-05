import React from 'react'
import profile from '../assets/profile.JPG'
import { MdOutlineMenu,MdOutlineLightbulb } from "react-icons/md";
import { NavLink, Outlet } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='p-4 w-full'>
        <div className='flex justify-between'>
            {/**profile icon */}
            <div className='w-[40px] h-[40px] rounded-full'>
<img className='w-full h-full object-cover rounded-full'
src={profile}
 alt="profile" />
            </div>
            {/**links to the pages */}
            <div>
                <ul className='flex gap-2'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Socials</li>
                    <MdOutlineLightbulb size={25}  />
                    <MdOutlineMenu size={25} />

                </ul>
            </div>
        </div>
<main>
        <Outlet/>
    </main>
    </div>
  )
}

export default Navbar