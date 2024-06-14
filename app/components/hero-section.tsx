"use client"
import React, { useEffect } from 'react'
import LogoGrid from './logo-grid';
import CTA from './cta';
import { useRouter } from 'next/navigation';
const HeroSection = () => {
     useEffect (() => {
        const isLogin = localStorage.getItem('auth-meme')
        if(isLogin==="yes"){
          router.push('/meme')
        }
}, []);
    const router = useRouter()

    const go = () =>{
    router.push('/signup')
  }
  const signIn = ()=>{
    router.push('/login')

  }
        const logoStyle = {
   background: 'white',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '2em', // Adjust the font size as needed
    display: 'inline-block',
     fontWeight: 'normal',
  };
  return (
    <div className='flex flex-col justify-center items-center'>
        <button onClick={go} className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
    <span>
      Memllo ⚡ try now
    </span>
    <svg
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</button>
{/* mobile view */}
 <div className=' md:hidden text-white mt-3' >
    <p className='text-center text-lg	'>
  Unleash the Power of Meme Marketing 
</p>


      </div> 
            <div className='md:hidden  text-white mt-1'>
    <p className='text-center text-lg	'>
   make your product go viral
</p>

<div className='md:hidden text-xs x p-3 text-slate-400	 justify-center items-center '>
          <h1 className=' text-center '>
          memllo empowers you to effortlessly craft memes in no time and kickstart your meme marketing campaigns with trending collections
        </h1>
        </div>  
{/*web view */}
      </div>
     <div className='hidden md:flex mt-5' >
    <p style={logoStyle} className='text-center'>
  Unleash the Power of Meme Marketing 
</p>


      </div>     
        <div className='hidden md:flex '>
    <p style={logoStyle} className='text-center'>
   make your product go viral
</p>


      </div> 
      <div className='hidden md:flex p-3 text-slate-400	 justify-center items-center '>
          <h1 className=' text-center '>
          memllo empowers you to effortlessly craft memes in no time<br />and kickstart your meme marketing campaigns with trending collections
        </h1>
        </div>  
        
        <div className='flex justify-center items-center space-x-6 mt-2'>
        <button onClick = {signIn} className="px-8 py-2   text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
  Sign In
</button>
<button onClick={go} className="px-8 py-2  bg-white text-black text-sm rounded-md font-semibold hover:shadow-lg">
 Sign Up
</button>
        </div>
         <div className="mt-3 flex justify-center items-center gap-x-4 text-gray-400 text-sm">
                            <div className="flex">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                            </div>
                            <p><span className="text-gray-100">5.0</span> by over 200 users</p>
                        </div>
                           <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-4">
                    

                </div>
                
            
                    
    </div>
  )
}

export default HeroSection
