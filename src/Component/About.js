import React from "react";
import aboutPic from '../assets/images/profile.webp';
import { Link } from "react-scroll";
const About = () =>{
    return(
        <div className="w-full bg-white py-16 px-4" id="about">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img src={aboutPic} alt="aboupic"  className="mx-auto my-4 "/>
                <div className="md:py-4 ml-20">
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4 font-serif">ABOUT <span className="text-[#FF7A00]">US</span></h1>
                <p className="md:text-1.5xl font-serif">Our story began back in 2014 with 3 founders and a shared dream: 
                    to become the best at delivering world-class visualisation and immersive experiences on robust architecture.</p>
                    <button className="bg-[#FF7A00] w-[170px] rounded font-medium my-6 mx-auto py-3 text-[#fff]"><Link to="hero"spy={true} smooth={true} offset={50} duration={500} >Get Started</Link></button>  
            </div>
            </div>
            
        </div>
    )
}
export default About;