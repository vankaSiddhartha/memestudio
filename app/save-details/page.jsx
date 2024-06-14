"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import LogoGrid from '../components/logo-grid';

const CompanyDetails = () => {
    const route = useRouter()
    const [about,setAbout] = useState()
    const go =()=>{
        localStorage.setItem("about",about)
       route.push('/meme')
    }
    const aboutText = (e)=>{
        setAbout(e.target.value)
    }
           const logoStyle = {
    background: 'linear-gradient(to right, #ff2d55, #ff5d2d, #ffb92e)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '1.125em', // Adjust the font size as needed
    fontWeight: 'normal', // Adjust the font weight as needed
    display: 'inline-block',
  };
          const logoStyleMobile = {
    background: 'linear-gradient(to right, #ff2d55, #ff5d2d, #ffb92e)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '0.75rem', // Adjust the font size as needed
    fontWeight: 'normal', // Adjust the font weight as needed
    display: 'inline-block',
  };
  return (
        <div className='h-screen md:h-full w-full  bg-black flex justify-center items-center'>

        {/* <button onClick={click} className='bg-slate-400 rounded-lg h-12 w-32 text-black '>genrate meme</button> */}
         <div className=" h-full w-full bg-slate-950 ">
      <div className="  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
        {/* web view */}
         <div className="hidden md:flex flex-col items-center space-y-20 p-3 justify-center">
      <div className='flex justify-center items-center mt-5 space-y-10'>
        <p className='text-2xl text-white  text-center '><span  style={logoStyle}>Generate memes</span> using AI.<br/>Automagically picks from hundreds of curated templates.<br/><span style={logoStyle}>Turn Laughter into Leads</span>: Memes That Market!</p>
      </div>
        <div className='flex justify-center items-center  w-full'>
           <div className="mt-8 p-2  w-3/4 ">
            <label className='text-white'>Enter about your product in 40 charaters</label>
        <textarea
          id="jobDescription"
          onChange={aboutText}
          rows={6}
          className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-base p-2"
          placeholder="Example copy paste Amazon sde job discription"
        ></textarea>
      </div>
        </div>
        <div className='flex justify-center items-center'>
          <button onClick ={go} className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
    next
  </div>
  
</button>
          
          </div>
          </div>
          {/*mobile view */}
          <div className='flex justify-center items-center mt-5 space-y-10'>
        <p className='md:hidden text-white text-sm  text-center '><span  style={logoStyleMobile}>Generate memes</span> using AI.<br/>Automagically picks from hundreds of curated templates.<br/><span style={logoStyle}>Turn Laughter into Leads</span>: Memes That Market!</p>
      </div>
       <div className='md:hidden  flex justify-center items-center h-full w-full flex-col space-y-40'>


           <div className="mt-8 p-2  w-3/4  h-[40px] text-black">
                          <label className='text-white'>Enter about your product in 40 charaters</label>

        <textarea
        onChange={aboutText}
          id="jobDescription"
          rows={4}
          className="text-black mt-2 block w-full border border-gray-300  rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-base p-2"
          placeholder="Example copy paste Amazon sde job discription"
        ></textarea>
      </div>
         <div className='flex justify-center items-center h-full w-full'>
          <button onClick={go} className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
    next
  </div>
  
</button>
          
          </div>
        </div>
      <LogoGrid/>
  
          </div>
          </div>
          </div>
  )
}

export default CompanyDetails
