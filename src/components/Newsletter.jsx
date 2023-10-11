import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2 my-4">
                <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nulla esse nobis minus. Accusantium aliquid suscipit vitae. Vitae veniam quibusdam deserunt natus nisi quod cum, sit, distinctio error eaque architecto!</p>
            </div>
            <div className="my-4">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                    <input className="p-3 w-full rounded-md text-black" type="emal" placeholder="Email Address" />
                    <button className="text-black w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 bg-[#00DF9A]">Subscribe</button>
                </div>
            </div>
            <p>We care about the protection of your data. Read our <span className="text-[#00DF9A]">Privacy Policy</span>.</p>
        </div>
    </div>
  )
}

export default Newsletter;