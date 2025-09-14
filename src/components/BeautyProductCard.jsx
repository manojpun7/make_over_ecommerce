import React from "react";
import { ChevronRight } from "lucide-react";

const BeautyProductCard = ({ brand }) => {
  return (
    <div className=" bg-white rounded-xl shadow-sm hover:drop-shadow-2xl border-pink-600 transition-all duration-300 overflow-hidden flex flex-col">
      <div className="h-36 sm:h-40 md:h-44 lg:h-48 bg-gray-100 flex items-center justify-center">
        <img
          src={brand.image}
          alt={brand.title}
          className=" object-contain max-h-full"
        />
      </div>

      <div className="p-3 flex flex-col justify-between flex-1 bg-pink-100">
        <div className="flex justify-evenly items-center">
          <p className="text-pink-500 font-semibold text-sm sm:text-base">
            Flat 4% discount
          </p>
          <p className="text-xs sm:text-sm text-gray-600">{brand.subtitle}</p>
        <button className=" flex items-center justify-center bg-pink-500 text-white rounded-md px-1 py-2 text-sm hover:bg-pink-600 transition">
          <ChevronRight size={16} className="ml-1" />
        </button>
        </div>
      </div>
    </div>
  );
};

export default BeautyProductCard;
