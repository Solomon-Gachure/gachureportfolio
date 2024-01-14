import React from 'react'
import dee from '../assets/dee.png'
import matatu from '../assets/matatu.png'
const Projects = () => {
  return (
    <div className='h-full'>
        <div className='flex justify-center items-center p-2'>
  <h1 className='text-4xl md:text-6xl font-bold border-b w-[600px] pb-4 '>Projects</h1>
</div>
<div className='flex justify-center items-center p-4 md:mx-auto'>
    <div className='grid gap-8 md:grid-cols-2'>
<div className='border md:h-[400px] md:max-w-[350px]'>
    <a href="https://dee-smoky.vercel.app/" target='blank'>
        <img className='w-full'
    src={dee}
     alt="" />
    </a>
<div className='p-4'>
    <a href="https://dee-smoky.vercel.app/" target='blank'><h1 className='text-2xl font-bold'>Dees Makeup Studio</h1></a>
    <p className='text-xl text-stone-500'>A simple website for Dee makeup studios showcasing their services portfolio, also customers can book for the services.</p>
</div>
</div>
<div className='border md:h-[400px] md:max-w-[350px] h-[200px]'>
    <img className='w-full'
    src={matatu}
     alt="" />
<a href="https://shato-mat.vercel.app/" target='blank'><h1 className='text-2xl font-bold'>Dees Makeup Studio</h1></a>
    <p className='text-xl text-stone-500'>A simple website for Dee makeup studios showcasing their services portfolio, also customers can book for the services.</p>
</div>
<div className='border md:h-[400px] md:max-w-[350px] h-[200px]'>
    <img className='w-full'
    src={dee}
     alt="" />
<p></p>
</div>
<div className='border md:h-[400px] md:max-w-[350px] h-[200px]'>
    <img className='w-full'
    src={dee}
     alt="" />
<p></p>
</div>


    </div>
</div>
        </div>
  )
}

export default Projects