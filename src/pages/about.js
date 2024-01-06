import React from 'react'
import pic from '../assets/profilepic.jpeg'
const About = () => {
  return (
    <div className='p-2 h-full' >
        <div>
<div className='flex justify-center items-center'>
  <h1 className='text-4xl md:text-6xl font-bold border-b w-[600px] pb-4 '>About</h1>
</div>
<div className='flex flex-col justify-center items-center p-6'>
  <div className='w-[250px] h-[250px] rounded-full'>
  <img className='w-full h-full object-cover rounded-full'
  src={pic}
   alt="profile" />
</div>
<div className='p-2'>
  <h1 className='text-3xl font-bold'>Solomon Gachure</h1>
</div>
<div>
  <p className='text-lg'>Salut!👋🏾 <b>Solomon Gachure</b> here, however you can call me Solomon!<br/>
  
  </p>
</div>
</div>
        </div>
    </div>
  )
}

export default About