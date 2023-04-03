import React from "react";
const ContactUs = () =>{
    return(
        <div className="w-full text-white py-16 px-4" id="contact">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2">
                <div className="md:py-8">
                <h1 className="md:text-5xl uppercase font-serif text-3xl ">Get In Touch</h1>
                <p className="md:text-2xl sm:text-1xl font-serif py-3">Experience  in action with a free, personalised demo.</p>
                </div>
                <div className="my-5">
                <div className=" sm:flex-row">
                    <input className="p-3 rounded-md w-full text-black my-4" type="text" placeholder="Enter Your Name" />
                    <input type="email" placeholder="Enter Your Email" className="w-full rounded-md p-3 text-black my-4"/>
                    <textarea typeof="text" placeholder="Enter Your Message" className="w-full p-3 text-black rounded-md my-4" />
                    <button className="bg-[#FF7A00] w-[180px] rounded font-medium my-6 mx-auto py-3 md:justify-center flex "> Get Connect Now</button> 
                </div>
                </div>
            </div>
           
        </div>
    )
}
export default ContactUs;