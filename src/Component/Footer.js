import React from "react";
import { Link } from "react-scroll";
const Foot = () => {
  return (
    <div className="w-full md:w-auto bg-[#FF7A00]  ">
      <div class="grid gap-x-8 gap-y-4 grid-cols-3 justify-items-center	">
        <div className="pt-5"><p className="font-serif">© 2023  | All rights reserved</p></div>
        <div></div>
        <div>
            <ul className="inline-block flex">
            <li className="p-4 font-serif cursor-pointer"><Link to="hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
            <li className="p-4 font-serif cursor-pointer"><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About Us</Link></li>
            <li className="p-4 font-serif cursor-pointer "><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact Us</Link></li>
            </ul>
        </div>
      </div>
      {/* <div className="grid gap-4 grid-cols-2" >
                <div><img src={logo} /></div>
            <div > <h1>hhh</h1></div>
              
            </div> */}
    </div>
  );
};
export default Foot;
