import React from "react";
import BeautyProductCard from "./BeautyProductCard";

import ponds from "../assets/beauty/ponds.png";
import dove from "../assets/beauty/dove.png";
import lakme from "../assets/beauty/lakme.png";
import nykaa from "../assets/beauty/nykaa.png";
import tiege from "../assets/beauty/tiege.png";
import clinique from "../assets/beauty/clinique.png";
import loreal from "../assets/beauty/loreal.png";
import mac from "../assets/beauty/mac.png";
import bobbi from "../assets/beauty/bobbi.png";

const brands = [
  { id: 1, title: "POND'S", image: ponds, subtitle: "Trust In A Classic" },
  { id: 2, title: "Dove", image: dove, subtitle: "Let’s Change Beauty" },
  { id: 3, title: "Lakme", image: lakme, subtitle: "Keep Calm And Glam On" },
  { id: 4, title: "Nykaa", image: nykaa, subtitle: "Your Beauty Is Our Passion" },
  { id: 5, title: "Tiege Hanley", image: tiege, subtitle: "Expert In Men’s Skin Care" },
  { id: 6, title: "Clinique", image: clinique, subtitle: "Fresh, Chic, Glamorous and Scientific" },
  { id: 7, title: "L’Oreal", image: loreal, subtitle: "Because You’re Worth It" },
  { id: 8, title: "MAC", image: mac, subtitle: "All Ages, All Races, All Sexes" },
  { id: 9, title: "Bobbi Brown", image: bobbi, subtitle: "Beauty Begins With You" },
];

const BestBeautyProducts = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-red-50 py-10 px-4 sm:px-8">
      {/* Header */}
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
        Best Beauty Products
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-3">
        {brands.map((brand) => (
          <BeautyProductCard key={brand.id} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default BestBeautyProducts;
