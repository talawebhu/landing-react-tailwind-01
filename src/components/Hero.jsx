import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center px-4">
            <p className="uppercase text-[#00DF9A] font-bold p-2">Welcome to STARTUPSW</p>
            <h2 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Empowering Your Business with Innovative Solutions</h2>
            <div className="flex justify-center items-center my-6">
                <Typed className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2" strings={[ "Explore.", "Transform.", "Succeed." ]} typeSpeed={120} backSpeed={140} loop />
            </div>
            <p className="md:text-2xl text-xl font-bold text-gray-500">STARTUPSW is a cutting-edge software that revolutionizes the way you work. Our powerful tools and features are designed to streamline your workflow, boost productivity, and drive success. Experience a new level of efficiency and performance with STARTUPSW.</p>
            <button className="bg-[#00DF9A] rounded-md font-medium my-6 mx-auto px-10 py-3 text-black">Get Started</button>
        </div>
    </div>
  )
}

export default Hero;