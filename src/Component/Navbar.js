import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const logo = "https://exarta.com/wp-content/uploads/2022/09/logo-2.svg";
  const [navbar, setnavbar] = useState(true);
  const handleNavbar = () => {
    setnavbar(!navbar);
  };
  
  return (
    <div className="flex justify-between items-end mx-auto px-4 max-w-[1240px] h-24 text-white ">
      <Link to="hero" spy={true} smooth={true} offset={50} duration={500}><img src={logo} className="cursor-pointer" /></Link>
      <ul className=" hidden md:flex">
        <li className="p-4 font-serif cursor-pointer" ><Link to="hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
        <li className="p-4 font-serif cursor-pointer" ><Link to="about" spy={true} smooth={true} offset={50} duration={500}>Abou Us</Link></li>
        <li className="p-4 font-serif cursor-pointer" ><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact US</Link></li>

      </ul>
      <div onClick={handleNavbar} className="block md:hidden">
        {!navbar ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !navbar
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <img src={logo} className="ml-9 mt-5" />
        <ul className=" uppercase p-4">
          <li className="p-4 font-serif border-b border-b-gray-600">
            <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
            
          <li className="p-4 font-serif border-b border-b-gray-600">
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>Abou Us</Link>
          </li>
          <li className="p-4 font-serif border-b border-b-gray-600 ">
          <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact US</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
