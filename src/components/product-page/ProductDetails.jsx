import React from "react";
import { CheckCircle } from "lucide-react";

const ProductDetails = () => {
  return (
    <div className=" mx-auto px-4 sm:px-8 py-10 bg-gradient-to-br from-pink-50 via-white to-red-50">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Product Details
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Ultra Smoothing Shampoo is formulated with Niacinamide and Aloe Vera to
        gently cleanse while restoring smoothness and shine to dull, frizzy hair.
        This sulphate-free formula helps maintain the scalp’s natural moisture
        balance, making it suitable for daily use.
      </p>

      {/* Key Benefits */}
      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
        Key Benefits
      </h3>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Smoothens and softens hair texture by up to 37%</li>
        <li>Reduces frizz and flyaways</li>
        <li>Hydrates and nourishes dry scalp</li>
        <li>Enhances natural shine and manageability</li>
        <li>Safe for chemically-treated and colored hair</li>
      </ul>

      {/* Key Ingredients */}
      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
        Key Ingredients
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>Niacinamide (Vitamin B3):</strong> Helps strengthen hair strands and improve scalp health
        </li>
        <li>
          <strong>Aloe Vera:</strong> Soothes the scalp, reduces itchiness, and deeply hydrates hair
        </li>
        <li>
          <strong>Panthenol (Pro-Vitamin B5):</strong> Adds shine and protects against breakage
        </li>
      </ul>

      {/* How to Use */}
      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
        How to Use
      </h3>
      <ol className="list-decimal list-inside space-y-1 text-gray-700">
        <li>Wet your hair thoroughly with lukewarm water.</li>
        <li>Apply a small amount of shampoo to your scalp and gently massage to lather.</li>
        <li>Rinse well and repeat if needed.</li>
        <li>Follow up with a conditioner for best results.</li>
      </ol>

      {/* Who is it for */}
      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
        Who is it for?
      </h3>
      <p className="text-gray-700">
        This shampoo is ideal for individuals with dry, frizzy, or unmanageable hair.
        It is suitable for all hair types, including straight, wavy, curly, and
        color-treated hair.
      </p>

      {/* Product Information */}
      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
        Product Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
        <ul className="list-disc list-inside space-y-1">
          <li>Volume: 250ml</li>
          <li>Shelf life: 24 months from manufacturing</li>
          <li>Country of origin: India</li>
          <li>Suitable for daily use</li>
        </ul>
        <div>
          <h4 className="font-semibold mb-1">Free From</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Sulphates (SLS/SLES)</li>
            <li>Parabens</li>
            <li>Mineral oils</li>
            <li>Artificial colors</li>
          </ul>
        </div>
      </div>

      {/* Highlight Box */}
      <div className="bg-green-50 text-green-700 flex items-center gap-2 p-3 rounded-md mt-6">
        <CheckCircle size={18} className="text-green-600" />
        <p className="text-sm font-medium">
          Dermatologically tested - Safe for sensitive scalp and all hair types
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
