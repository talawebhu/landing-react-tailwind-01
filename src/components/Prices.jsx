import React from "react";
import { FaUser, FaUserGroup, FaBuildingUser } from "react-icons/fa6";

const Prices = () => {
  return (
    <div className="w-full py-20 px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            <div className="w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300">
                <FaUser className="mx-auto mt-[-2rem]" size={50} />
                <h3 className="text-2xl font-bold text-center py-8">Single User</h3>
                <p className="text-center text-4xl font-bold mb-8">$99</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8">Lorem</p>
                    <p className="py-2 border-b mx-8">Ipsum</p>
                    <p className="py-2 border-b mx-8">Dolor</p>
                </div>
                <button className="w-full text-black rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-[#00DF9A]">Buy</button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300">
                <FaUserGroup className="mx-auto mt-[-2rem]" size={50} />
                <h3 className="text-2xl font-bold text-center py-8">Multi User</h3>
                <p className="text-center text-4xl font-bold mb-8">$299</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8">Lorem</p>
                    <p className="py-2 border-b mx-8">Ipsum</p>
                    <p className="py-2 border-b mx-8">Dolor</p>
                </div>
                <button className="w-full text-black rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-[#00DF9A]">Buy</button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300">
                <FaBuildingUser className="mx-auto mt-[-2rem]" size={50} />
                <h3 className="text-2xl font-bold text-center py-8">Enterprise</h3>
                <p className="text-center text-4xl font-bold mb-8">$999</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8">Lorem</p>
                    <p className="py-2 border-b mx-8">Ipsum</p>
                    <p className="py-2 border-b mx-8">Dolor</p>
                </div>
                <button className="w-full text-black rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-[#00DF9A]">Buy</button>
            </div>
        </div>
    </div>
  )
}

export default Prices;