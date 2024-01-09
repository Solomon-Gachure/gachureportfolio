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
  As a seasoned software engineer specializing in the frontend domain, I bring a wealth of knowledge and experience to the table. Armed with a comprehensive foundation in HTML, CSS, and JavaScript, I have honed my skills in crafting seamless and visually appealing user interfaces. My proficiency extends to cutting-edge technologies like <b>React, Next.js, and Tailwind CSS</b>, allowing me to create dynamic and responsive web applications.

What sets me apart is not only my technical acumen but also my commitment to collaboration and effective communication.<br/>
<br/>
 Valuing teamwork as a core principle, I thrive in collaborative environments, leveraging collective expertise to deliver exceptional results.<br/>
  My dedication to fostering a positive team dynamic ensures that I contribute not just as an individual but as a cohesive part of a greater whole.
  <br/>

As a frontend professional, I am driven by a passion for user-centric design, striving to create interfaces that not only meet but exceed user expectations, delivering superb user experiences. Whether in the fast-paced world of deadlines or the ever-evolving tech landscape, I approach challenges with professionalism, a strong work ethic, and an unwavering commitment to excellence. Adaptable to any work environment, I am ready to contribute my skills and expertise to drive innovation and success in the realm of frontend development.
  
  </p>
</div>
</div>
<div className='flex flex-col justify-center items-center p-4 w-full'>
  <h1 className='text-4xl md:text-6xl font-bold border-b pb-4 '>Experience</h1>
  <div>
    <div>
      <h1 className='text-stone-300 font-bold'>Software Engineer - <b className='text-amber-400'>Awol</b></h1>
      <p>August 2021 - December 2022</p>
      <ol className=' list-disc'>
        <li>Designing and implementing user interfaces that are visually appealing, intuitive, and functional.</li>
        <li>Utilizing frontend frameworks and libraries such as React & NextJs to build dynamic web applications.</li>
        <li>Working closely with backend developers, designers, and other team members to integrate frontend components with backend systems and databases.</li>
        <li>Effectively communicating with team members, stakeholders, and clients to understand requirements, provide updates, and address concerns.</li>

      </ol>
    </div>
  </div>
</div>
        </div>
    </div>
  )
}

export default About