import React, { useState } from "react";
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
const Navbar=() =>{
    const logo = "https://exarta.com/wp-content/uploads/2022/09/logo-2.svg";
    const [navbar, setnavbar] =useState(true);
    const handleNavbar = () =>{
        setnavbar(!navbar);
    }
    return(
        <div className="flex justify-between items-end mx-auto px-4 max-w-[1240px] h-24 text-white ">
        
         <img src={logo} />
         <ul className=" hidden md:flex">
            <li className="p-4 font-serif cursor-pointer">Home</li>
            <li className="p-4 font-serif cursor-pointer">About Us</li>
            <li className="p-4 font-serif cursor-pointer ">Contact Us</li>
         </ul>
         <div onClick={handleNavbar} className="block md:hidden">
            {!navbar ?<AiOutlineClose size={20}/>: <AiOutlineMenu size={20}/>}
           
         </div>
         <div className={!navbar ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500':'fixed left-[-100%]'}>
         <img src={logo} className="ml-9 mt-5"/>
            <ul className=" uppercase p-4">
            <li className="p-4 font-serif border-b border-b-gray-600">Home</li>
            <li className="p-4 font-serif border-b border-b-gray-600">About Us</li>
            <li className="p-4 font-serif border-b border-b-gray-600 ">Contact Us</li>
            </ul>
         </div>
        </div>
    )
}
export default Navbar;