import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export function Footer() {
      const logoStyle = {
    background: 'linear-gradient(to right, #ff2d55, #ff5d2d, #ffb92e)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '2em', // Adjust the font size as needed
    fontWeight: 'bold', // Adjust the font weight as needed
    display: 'inline-block',
  };
  return (
    <footer className=" text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2  style = {logoStyle} className="text-2xl font-bold">Memllo</h2>
            <p className="mt-2">
              Crafted in Srikakulam with 💖 and passion. 
            </p>
          </div>

          {/* Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><Link className="text-gray-300 hover:text-blue-900 text-base" href="/pricing">Pricing</Link></li>
              <li><Link className="text-gray-300 hover:text-blue-900 text-base" href="/about">About</Link></li>
              <li><Link className="text-gray-300 hover:text-blue-900 text-base" href="/doc">Documentation</Link></li>
              <li> <Link className="text-gray-300 hover:text-blue-900 text-base" href="/features">Features</Link></li>
            </ul>
          </div>
         

          {/* Social Media */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
  <Link href="https://www.instagram.com/siddhartha100000000?utm_source=qr&igsh=cmo3NnoyMm11bTk%3D" className="text-gray-400 hover:text-white">
    <FaInstagram />

  </Link>
  <Link href="https://x.com/Siddhartha13691" className="text-gray-400 hover:text-white">
    <FaSquareXTwitter />

  </Link>
  <Link href={"https://www.linkedin.com/in/vanka-siddhartha-35b767229/"}  className="text-gray-400 hover:text-white">
   <FaLinkedin />

  </Link>
  <Link href={"https://github.com/vankaSiddhartha"}  className="text-gray-400 hover:text-white">
    <FaGithub />

  </Link>
 
</div>

          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-gray-500">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
