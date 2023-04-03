import React from "react";
import Typed from 'react-typed';
import profile from '../assets/images/avator.png';
import { Link } from "react-scroll";
const  Hero = () =>{
    return(
        <div className="text-white" id="hero">
            <div className="max-w-[800px] mx-auto text-center h-screen w-full  flex flex-col justify-center mt-[-90px]">
                
                <p className="text-[#FF7A00] font-bold p-2 text-1xl font-serif">Bio</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4">ZUlqarnain Sarwar</h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-4xl sm:text-4xl text-xl font-serif " > Front-End Dev ,Wordpress </p>
                    <Typed  strings={[ 'Dev', 'In Exarta']} typeSpeed={120} backSpeed={150} loop className="md:text-3xl  sm:text-2xl text-xl font-serif pl-2  text-[#FF7A00]"/>
                    
                </div>
                <img src={profile} alt="profile"  className="h-36 min-h-min	 rounded-full	w-36 mx-auto  mt-5"/>
                 <button className="bg-[#FF7A00] w-[170px] rounded font-medium my-6 mx-auto py-3"> <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Get Connect Now</Link></button>
            </div>
        </div>
    )
}
export default Hero;