import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-pink-50 text-gray-700 py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          {/* Logo + Tagline */}
          <div className="mb-3">
            <img
              src={logo}
              alt="Makeover Me"
              className="h-20 mb-2"
            />
            <p className="text-pink-500 italic text-xl">The Key to a New Me</p>
            <h2 className="text-pink-600 font-bold text-3xl">Makeover Me</h2>
          </div>

          {/* About */}
          <p className="text-md leading-relaxed">
            "Makeover Me" is a unique e-commerce platform aimed at
            revolutionizing the way people experience personal
            transformations. It offers a seamless and interactive online
            space where users can explore various beauty, fashion, and
            wellness services tailored to their individual needs.
          </p>
        </div>

        {/* MM Categories */}
        <div>
          <h3 className="text-pink-500  font-semibold mb-3">MM Categories</h3>
          <ul className="space-y-2 text-md">
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
            <li>Beauty</li>
            <li>Plus</li>
            <li>Offers</li>
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h3 className="text-pink-500 font-semibold mb-3">Help & Support</h3>
          <ul className="space-y-2 text-md">
            <li>Who are we?</li>
            <li>Our Services</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Help</li>
            <li>Shipping and Delivery</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-pink-500 font-semibold mb-3">Follow Us</h3>

          {/* Subscribe Box */}
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-1 px-3 py-2 text-md rounded-l-md border border-gray-300 focus:outline-none"
            />
            <button className="bg-pink-500 text-white px-4 py-2 rounded-r-md text-md hover:bg-pink-600">
              SUBSCRIBE
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-pink-500">
            <Facebook className="h-5 w-5 cursor-pointer hover:text-pink-600" />
            <Instagram className="h-5 w-5 cursor-pointer hover:text-pink-600" />
            <Twitter className="h-5 w-5 cursor-pointer hover:text-pink-600" />
            <Linkedin className="h-5 w-5 cursor-pointer hover:text-pink-600" />
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-gray-300 pt-4 text-center text-md text-gray-600">
        Copyright © All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
