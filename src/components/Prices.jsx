import React from "react";
import { FaUser, FaUserGroup, FaBuildingUser } from "react-icons/fa6";

const Prices = () => {
  return (
    <div className="w-full py-20 px-4 bg-white">
      <div className="max-w-[1240px] mx-auto text-center mb-20">
        <p className="uppercase text-[#00DF9A] font-bold p-2">Flexible Pricing for Every Need</p>
        <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Choose the Right Plan</h2>
        <p>We offer flexible pricing plans to cater to your specific needs. Whether you're a solo entrepreneur, a small business, or a large enterprise, there's a plan that's perfect for you. Explore our pricing options below and select the plan that best suits your requirements.</p>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300">
              <FaUser className="mx-auto mt-[-2rem]" size={50} />
              <h3 className="text-2xl font-bold text-center py-8">Starter Plan</h3>
              <p className="text-center text-4xl font-bold mb-8">$19/month</p>
              <div className="text-center font-medium">
                  <p className="py-2 border-b mx-8">Single User License</p>
                  <p className="py-2 border-b mx-8">Basic Features</p>
                  <p className="py-2 border-b mx-8">Email Support</p>
              </div>
              <button className="w-full text-black rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-[#00DF9A]">Buy</button>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300">
              <FaUserGroup className="mx-auto mt-[-2rem]" size={50} />
              <h3 className="text-2xl font-bold text-center py-8">Pro Plan</h3>
              <p className="text-center text-4xl font-bold mb-8">$49/month</p>
              <div className="text-center font-medium">
                  <p className="py-2 border-b mx-8">Multi-User License</p>
                  <p className="py-2 border-b mx-8">Advanced Features</p>
                  <p className="py-2 border-b mx-8">Priority Support</p>
              </div>
              <button className="w-full text-black rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-[#00DF9A]">Buy</button>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300">
              <FaBuildingUser className="mx-auto mt-[-2rem]" size={50} />
              <h3 className="text-2xl font-bold text-center py-8">Enterprise Plan</h3>
              <p className="text-center text-4xl font-bold mb-8">$399/month</p>
              <div className="text-center font-medium">
                  <p className="py-2 border-b mx-8">Fully Customized</p>
                  <p className="py-2 border-b mx-8">Premium Features</p>
                  <p className="py-2 border-b mx-8">24/7 Priority Support</p>
              </div>
              <button className="w-full text-black rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-[#00DF9A]">Buy</button>
          </div>
      </div>
    </div>
  )
}

export default Prices;