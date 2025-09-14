import React from "react";
import womenImg from "../assets/women.png";
import menImg from "../assets/men.png";
import kidsImg from "../assets/kids.png";
import beautyProductImg from "../assets/beautyProduct.png";
import hairstylesImg from "../assets/hairstyle.png";
import plusImg from "../assets/plus.png";
import offersImg from "../assets/offer.png";
import carousel1 from "../assets/carousel/aesthetictoppics.png";
import carousel3 from "../assets/carousel/kidsclothing.png";
import carousel4 from "../assets/carousel/megasale.png";
import carousel5 from "../assets/carousel/shoespic.png";

const categories = [
  { name: "Women", image: womenImg, discount: "UPTO 40% OFF" },
  { name: "Men", image: menImg, discount: "UPTO 30% OFF" },
  { name: "Kids", image: kidsImg, discount: "FLAT 10% OFF" },
  { name: "Beauty Products", image: beautyProductImg, discount: "" },
  { name: "Hairstyles", image: hairstylesImg, discount: "" },
  { name: "PLUS", image: plusImg, discount: "SAVE 5% EXTRA" },
  { name: "Offers", image: offersImg, discount: "" },
];

const carouselImages = [carousel1, carousel3, carousel4, carousel5];

const HeroPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="pt-8 flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-red-50 pb-12 w-full">
        <div className="w-11/12 max-w-6xl text-center">
          {/* Main title */}
          <h1 className="text-2xl sm:text-3xl font-semibold mb-10 text-gray-800">
            What are you looking for?
          </h1>

          {/* Search bar */}
          <div className="relative mb-12 w-full max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for Clothes"
              className="w-full px-12 py-4 text-gray-700 placeholder-gray-400 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all duration-300 shadow-md"
            />
            <svg
              className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>

          {/* Categories grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-xl cursor-pointer hover:bg-white hover:shadow-lg border-pink-600 transition-all duration-300"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-20 h-20 mb-2 object-cover"
                />
                <p className="text-sm font-medium text-gray-800">
                  {category.name}
                </p>
                {category.discount && (
                  <p className="text-xs text-red-500 font-semibold mt-1">
                    {category.discount}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className=" pb-8 overflow-hidden relative bg-gradient-to-br from-pink-50 via-white to-red-50 w-full">
        <style>{`
    @keyframes scroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }

    /* default (mobile, sm, md) */
    .carousel-track {
      display: flex;
      animation: scroll 5s linear infinite;
    }

    /* lg and above */
    @media (min-width: 1024px) {
      .carousel-track {
        animation: scroll 15s linear infinite;
      }
    }
  `}</style>

        <div className="carousel-track">
          {[...carouselImages, ...carouselImages].map((image, index) => (
            <div
              key={index}
              className="
          flex-shrink-0 px-3
          w-3/4 h-48      
          sm:w-1/2 sm:h-56 
          md:w-1/3 md:h-72 
          lg:w-4/10 lg:h-80 
          xl:w-120 xl:h-[352px] 
        "
            >
              <img
                src={image}
                alt={`Carousel item ${index + 1}`}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
