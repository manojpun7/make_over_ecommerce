// import React from "react";
// import frok from "../assets/flash-sale/frok.png";
// import hair from "../assets/flash-sale/hair.png";
// import moisturizer from "../assets/flash-sale/moisturizer.png";
// import ring from "../assets/flash-sale/ring.png";
// import shoes from "../assets/flash-sale/shoes.png";
// import shirt from "../assets/flash-sale/shirt.png";

// import coupon1 from "../assets/flash-sale/1coupon.png";
// import coupon2 from "../assets/flash-sale/2coupon.png";
// import coupon3 from "../assets/flash-sale/3coupon.png";
// import coupon4 from "../assets/flash-sale/4coupon.png";

// import ProductCard from "./ProductCard";

// const products = [
//   {
//     id: 1,
//     title: "Daily Moisturizing Lotion",
//     image: moisturizer,
//     rating: 4.6,
//     reviews: 311,
//     discount: "11% off",
//     price: 1126,
//     oldPrice: 1265,
//     tag: "BEST SELLER",
//   },
//   {
//     id: 2,
//     title: "Ladies Cotton Blue Dress",
//     image: frok,
//     rating: 4.6,
//     reviews: 311,
//     discount: "12% off",
//     price: 492,
//     oldPrice: 599,
//   },
//   {
//     id: 3,
//     title: "Ecco Men's Soft Sneaker",
//     image: shoes,
//     rating: 4.6,
//     reviews: 311,
//     discount: "7% off",
//     price: 1414,
//     oldPrice: 1520,
//   },
//   {
//     id: 4,
//     title: "Long Wavy Hair Wig",
//     image: hair,
//     rating: 4.6,
//     reviews: 311,
//     discount: "10% off",
//     price: 806,
//     oldPrice: 896,
//     tag: "BEST SELLER",
//   },
//   {
//     id: 5,
//     title: "Platinum Ring Set-6",
//     image: ring,
//     rating: 4.6,
//     reviews: 311,
//     discount: "15% off",
//     price: 490,
//     oldPrice: 576,
//     tag: "BEST SELLER",
//   },
//   {
//     id: 6,
//     title: "New Black Shirt Full Sleeve",
//     image: shirt,
//     rating: 4.6,
//     reviews: 311,
//     discount: "10% off",
//     price: 900,
//     oldPrice: 1000,
//   },
// ];

// const FlashSale = () => {
//   return (
//     <div className="bg-gradient-to-br from-pink-50 via-white to-red-50 py-10 px-4 sm:px-8">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
//           Flash Sale
//         </h2>
//         <a
//           href="#"
//           className="text-pink-500 text-sm sm:text-base font-medium hover:underline flex items-center"
//         >
//           Explore All <span className="ml-1">➝</span>
//         </a>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>

//       {/* Coupon Section */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:flex justify-evenly gap-4 bg-gradient-to-r from-pink-200 to-pink-100 rounded-lg shadow p-4">
//         <img src={coupon1} alt="coupon1" />
//         <img src={coupon2} alt="coupon2" />
//         <img src={coupon3} alt="coupon3" />
//         <img src={coupon4} alt="coupon4" />
//       </div>
//     </div>
//   );
// };

// export default FlashSale;



import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

import coupon1 from "../assets/flash-sale/1coupon.png";
import coupon2 from "../assets/flash-sale/2coupon.png";
import coupon3 from "../assets/flash-sale/3coupon.png";
import coupon4 from "../assets/flash-sale/4coupon.png";

const FlashSale = () => {
  const { products, loading } = useSelector((state) => state.products);

  // 🔥 Pick only 6 items (could be featured or random)
  const flashProducts = products.slice(0, 6);

  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-red-50 py-10 px-4 sm:px-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Flash Sale
        </h2>
        <a href="#" className="text-pink-500 text-sm sm:text-base font-medium hover:underline flex items-center">
          Explore All <span className="ml-1">➝</span>
        </a>
      </div>

      {/* Loading State */}
      {loading && <p className="text-center text-lg">Loading flash sale...</p>}

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
        {flashProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Coupon Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:flex justify-evenly gap-4 bg-gradient-to-r from-pink-200 to-pink-100 rounded-lg shadow p-4">
        <img src={coupon1} alt="coupon1" />
        <img src={coupon2} alt="coupon2" />
        <img src={coupon3} alt="coupon3" />
        <img src={coupon4} alt="coupon4" />
      </div>
    </div>
  );
};

export default FlashSale;
