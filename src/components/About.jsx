import React from "react";
import AboutImg from "../assets/about.png";

const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] my-auto grid md:grid-cols-2">
            <img className="w-[500px] mx-auto my-4" src={AboutImg} alt="/" />
            <div className="flex flex-col justify-center">
                <p className="text-[#00DF9A] uppercase font-bold">Lorem ipsum dolor sit</p>
                <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis suscipit excepturi nulla doloremque cupiditate repellat, incidunt velit in fugit sed adipisci quasi, ut, magni at! Perferendis ratione deleniti id tempora.</p>
                <button className="text-[#00DF9A] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black">Get Started!</button>
            </div>
        </div>
    </div>
  )
}

export default About;