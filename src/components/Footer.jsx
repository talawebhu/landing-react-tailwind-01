import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="max-w-[1240px] my-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
            <h2 className="w-full text-3xl font-bold text-[#00DF9A]">REACT</h2>
            <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facilis eum vel inventore quas porro, sunt reiciendis dolorem sed ab possimus dolor temporibus. Eum tempora dolorum accusamus facilis placeat molestias.</p>
            <div className="flex justify-between md:w-[75%] my-6">
                <FaFacebookF size={30} />
                <FaInstagram size={30} />
                <FaXTwitter size={30} />
            </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
                <h4 className="font-bold text-xl text-gray-400">Solutions</h4>
                <ul>
                    <li className="py-2 text-sm">Analytics</li>
                    <li className="py-2 text-sm">Marketing</li>
                    <li className="py-2 text-sm">Commerce</li>
                    <li className="py-2 text-sm">Insights</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-xl text-gray-400">Support</h4>
                <ul>
                    <li className="py-2 text-sm">Pricing</li>
                    <li className="py-2 text-sm">Documentation</li>
                    <li className="py-2 text-sm">Guides</li>
                    <li className="py-2 text-sm">API Status</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-xl text-gray-400">Company</h4>
                <ul>
                    <li className="py-2 text-sm">About</li>
                    <li className="py-2 text-sm">Blog</li>
                    <li className="py-2 text-sm">Jobs</li>
                    <li className="py-2 text-sm">Press</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-xl text-gray-400">Legal</h4>
                <ul>
                    <li className="py-2 text-sm">Claim</li>
                    <li className="py-2 text-sm">Policy</li>
                    <li className="py-2 text-sm">Terms</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer;