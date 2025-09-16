import React from "react";
import { Star, Share2, Pencil, ThumbsUp, ThumbsDown } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Anita Patel",
    location: "Ahmedabad, India",
    rating: 5,
    time: "1 month ago",
    review:
      "Absolutely love this product! As someone with chemically treated hair, I was skeptical about trying new products. But this shampoo has been a game-changer. My hairstylist noticed the improvement immediately. The aloe vera and niacinamide combination works wonders.",
    tags: ["Chemical Hair Safe", "Professional Results", "Highly Recommend"],
    helpful: 31,
    notHelpful: 0,
  },
  {
    id: 2,
    name: "Sarah M.",
    location: "Mumbai, India",
    rating: 5,
    time: "2 days ago",
    review:
      "Amazing product! My hair feels so smooth and shiny after just one use. The texture is perfect and it smells incredible. Worth every penny!",
    tags: ["Great Texture", "Amazing Smell", "Instant Results"],
    helpful: 18,
    notHelpful: 1,
  },
];

const CustomerReviews = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-red-50 mx-auto px-4 sm:px-8 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Customer Reviews
        </h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-3 py-2 text-sm text-pink-600 border border-pink-300 rounded-md hover:bg-pink-50">
            <Share2 size={16} /> Share Your Experience
          </button>
          <button className="flex items-center gap-1 px-3 py-2 text-sm text-white bg-pink-600 rounded-md hover:bg-pink-700">
            <Pencil size={16} /> Write a Review
          </button>
        </div>
      </div>

      {/* Rating Summary */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-8 mb-8">
        <div className="flex items-center gap-4">
          <p className="text-4xl font-bold text-pink-600">4.7</p>
          <div>
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill={i < 5 ? "currentColor" : "none"}
                />
              ))}
            </div>
            <p className="text-gray-600 text-sm">397 verified reviews</p>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md inline-block mt-1">
              ✔ 94% would recommend
            </span>
          </div>
        </div>

        {/* Ratings breakdown */}
        <div className="flex-1 mt-6 md:mt-0">
          {[5, 4, 3, 2, 1].map((star, idx) => (
            <div key={idx} className="flex items-center gap-2 mb-1">
              <span className="w-6 text-sm">{star}★</span>
              <div className="flex-1 h-2 bg-gray-200 rounded">
                <div
                  className="h-2 bg-yellow-400 rounded"
                  style={{
                    width:
                      star === 5
                        ? "65%"
                        : star === 4
                        ? "26%"
                        : star === 3
                        ? "9%"
                        : star === 2
                        ? "3%"
                        : "2%",
                  }}
                />
              </div>
              <span className="w-8 text-sm text-gray-600 text-right">
                {star === 5
                  ? 245
                  : star === 4
                  ? 98
                  : star === 3
                  ? 35
                  : star === 2
                  ? 12
                  : 7}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Recent Reviews
      </h3>
      <div className="space-y-6">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="border border-gray-200 rounded-md p-4 shadow-sm"
          >
            {/* User info */}
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{r.name}</p>
                  <p className="text-sm text-gray-500">{r.location}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < r.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-400">{r.time}</p>
              </div>
            </div>

            {/* Review text */}
            <p className="text-gray-700 mb-2">{r.review}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-2">
              {r.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Helpful buttons */}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <button className="flex items-center gap-1 hover:text-pink-600">
                <ThumbsUp size={14} /> Helpful ({r.helpful})
              </button>
              <button className="flex items-center gap-1 hover:text-pink-600">
                <ThumbsDown size={14} /> ({r.notHelpful})
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="flex justify-center rounded-xl font-semibold border p-1 text-pink-400 hover:bg-pink-100 mt-8">
          load more reviews
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;
