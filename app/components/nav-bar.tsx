import Link from 'next/link';
import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

import { FaSquareXTwitter } from "react-icons/fa6";
const NavBar = () => {

         const logoStyle = {
    background: 'linear-gradient(to right, #ff2d55, #ff5d2d, #ffb92e)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '2em', // Adjust the font size as needed
    fontWeight: 'bold', // Adjust the font weight as needed
    display: 'inline-block',
  };
  return (
    <div className='text-white flex  items-center justify-between'>
        <div>
         <h1 style={logoStyle}>Memllo</h1>
        </div>
        <div className='hidden md:flex space-x-6'>
             <Link className="text-gray-300 hover:text-blue-900 text-base" href="/pricing">Pricing</Link>
          <Link className="text-gray-300 hover:text-blue-900 text-base" href="/faq">About</Link>
          <Link className="text-gray-300 hover:text-blue-900 text-base" href="/doc">Documentation</Link>
          <Link className="text-gray-300 hover:text-blue-900 text-base" href="/features">Features</Link>


        </div>
        <div className='flex space-x-2'>
            <CiLinkedin className='h-7 w-7'/>
            <CiInstagram className='h-7 w-7' />
            <FaSquareXTwitter className='h-7 w-7' />



        </div>
      
    </div>
  )
}

export default NavBar
