import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-8">
            <div className="my-4">
                <p className="text-[#00DF9A] uppercase font-bold">Stay Informed</p>
                <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Subscribe to Our Newsletter</h2>
                <p>Don't miss out on the latest updates, tips, and insights. Subscribe to our newsletter to receive exclusive content and stay up-to-date with all the exciting developments at STARTUPSW.</p>
            </div>
            <div className="my-4">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                    <input className="p-3 w-full rounded-md text-black" type="emal" placeholder="Email Address" />
                    <button className="text-black rounded-md font-medium ml-4 my-6 px-10 py-3 bg-[#00DF9A]">Subscribe</button>
                </div>
                <p className="text-end text-sm">We care about the protection of your data. Read our <span className="text-[#00DF9A]">Privacy Policy</span>.</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter;