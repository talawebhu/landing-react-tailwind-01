import React from "react";
import AboutImg from "../assets/about.png";

const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className="w-[500px] mx-auto my-4" src={AboutImg} alt="/" />
            <div className="flex flex-col justify-center">
                <p className="text-[#00DF9A] uppercase font-bold">Our Commitment to Excellence</p>
                <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">About STARTUPSW</h2>
                <p>STARTUPSW is a leading software solution that has been crafted with your needs in mind. We have a dedicated team of experts working tirelessly to provide you with the best-in-class features and support. With a focus on innovation, reliability, and user-friendliness, STARTUPSW is your partner for success.</p>
                <button className="text-[#00DF9A] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black">Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default About;