'use client';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Oswald } from 'next/font/google';
  
const Nerko = Oswald({
  subsets: ["cyrillic"],
  weight: ["400"],
});

const Navbar = () => {
  return (
    <nav className="bg-white right-0 left-0 top-0 bottom-0 h-16 p-5 text-black">
      <div className={Nerko.className}>
      <div className="flex justify-between">
        {" "}
        {/* Flex container for layout */}
        <div class="logo" className=' text-xl'>
          {" "}
          {/* Logo section */}
          {/* Image component for displaying logo */}
          <Link href={"./"}><Image
            src={"/letter-h.png"} // Image source
            width={50} // Image width
            height={50} // Image height
            className="-my-3 mb-4 rounded-xl " // Additional CSS classes
          /></Link>
          
        </div>
        <div class="li-items">
          {" "}
          {/* List items section */}
          <ul className="flex text-xl">
            {" "}
            {/* Unordered list for navigation */}
            <Link href={"/"}>
              <li className="mx-12 text-black">Home</li>
            </Link>{" "}
            {/* Link to Home page */}
            <Link href={"/About"}>
              <li className="mx-10 text-black">About Us</li>
            </Link>{" "}
            {/* Link to About Us page */}
            <Link href={"/Contact"}>
              <li className="mx-12 text-black">Contact Us</li>
            </Link>
            
          </ul>
        </div>

        
        <Link href={"./register"}>
          <div class="login-btn">
            {" "}
            {/* Login button section */}
            {/* Button for login */}
            <button
              type="button"
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 -my-5"
            >
              Join Us
            </button>
          </div>
        </Link>

        
      </div>
      </div>
    </nav>
  )
}

export default Navbar