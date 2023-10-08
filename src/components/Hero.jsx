import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className="uppercase text-[#00DF9A] font-bold p-2">Lorem ipsum dolor sit amet</p>
            <h2 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Cupiditate blanditiis accusamus eligendi saepe quo.</h2>
            <div className="flex justify-center items-center">
                <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Maxime fuga at</p>
                <Typed className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2" strings={["lorem", "ipsum", "dolor"]} typeSpeed={120} backSpeed={140} loop />
            </div>
            <p className="md:text-2xl text-xl font-bold text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dignissimos autem, nostrum porro, amet iste aliquid praesentium natus ratione doloremque accusamus quod recusandae sed in nemo ea non odio numquam.</p>
            <button className="bg-[#00DF9A] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started!</button>
        </div>
    </div>
  )
}

export default Hero;