import React from "react";
import { Award, Trash2 } from "lucide-react";
import shampoo from "../../assets/product/product4.png";

const rewards = [
  {
    id: "#0004",
    name: "Ultra Smoothing Shampoo for Smooth & Shiny Hair - 250ml",
    image: shampoo,
    points: 40,
    status: "Active",
  },
  {
    id: "#0003",
    name: "Ultra Smoothing Shampoo for Smooth & Shiny Hair - 250ml",
    image: shampoo,
    points: 30,
    status: "Active",
  },
  {
    id: "#0002",
    name: "Ultra Smoothing Shampoo for Smooth & Shiny Hair - 250ml",
    image: shampoo,
    points: 20,
    status: "Active",
  },
  {
    id: "#0001",
    name: "Ultra Smoothing Shampoo for Smooth & Shiny Hair - 250ml",
    image: shampoo,
    points: 10,
    status: "Active",
  },
];

const Rewards = () => {
  return (
    <div className="flex-1 mt-10 pl-10 ">
      {/* Header */}
      <div className="flex-1 items-center">
        <Award className="text-pink-500 w-10 h-10" />
        <div>
          <h2 className="text-xl font-bold">Reward Points</h2>
          <p className="text-gray-500 text-sm">
            Check your reward points balance here and enjoy using them at checkout to unlock even more savings.
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="text-left text-sm text-gray-600">
              <th className="px-4 py-2">Product Id</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Reward Points</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {rewards.map((item) => (
              <tr
                key={item.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <td className="px-4 py-3 text-sm font-medium">{item.id}</td>
                <td className="px-4 py-3 flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <span className="text-gray-700 text-sm">{item.name}</span>
                </td>
                <td className="px-4 py-3 text-sm">{item.points}</td>
                <td
                  className={`px-4 py-3 text-sm font-medium ${
                    item.status === "Active" ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  {item.status}
                </td>
                <td className="px-4 py-3">
                  <button className="text-gray-500 hover:text-red-500 transition">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rewards;
