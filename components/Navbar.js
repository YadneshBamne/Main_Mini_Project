"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/font/google";




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
          <div class="logo">
            {" "}
            {/* Logo section */}
            {/* Image component for displaying logo */}
            <div><Link href={"./"}>
              <Image
                src={"/letter-h.png"} // Image source
                width={50} // Image width
                height={50} // Image height
                className="-my-3 mb-4 rounded-xl " // Additional CSS classes
              />
            </Link></div>
            
            
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
              <Link href={"/ "}>
              <Image
                src={"/shopping-cart.png"} // Image source
                width={50} // Image width
                height={50} // Image height
                className="-my-3 mb-4 rounded-xl " // Additional CSS classes
              />
              </Link>
            </ul>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
