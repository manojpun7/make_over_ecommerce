import React, { useState } from "react";
import shampoo from "../../assets/product/product4.png";
const orders = [
  {
    id: "#0005",
    name: "Ultra Smoothing Shampoo for Smooth & Shiny Hair- 250ml",
    qty: 1,
    payment: "Cash",
    status: "Delivered",
    total: 872,
    img: shampoo, // replace with product image
  },
  {
    id: "#0004",
    name: "Ultra Smoothing Shampoo for Smooth & Shiny Hair- 250ml",
    qty: 1,
    payment: "Cash",
    status: "Cancelled",
    total: 872,
    img: shampoo,
  },
  {
    id: "#0003",
    name: "Ultra Smoothing Shampoo for Smooth & Shiny Hair- 250ml",
    qty: 1,
    payment: "Online",
    status: "Delivered",
    total: 872,
    img: shampoo,
  },
  {
    id: "#0002",
    name: "Ultra Smoothing Shampoo for Smooth & Shiny Hair- 250ml",
    qty: 1,
    payment: "Cash",
    status: "Delivered",
    total: 872,
    img: shampoo,
  },
  {
    id: "#0001",
    name: "Ultra Smoothing Shampoo for Smooth & Shiny Hair- 250ml",
    qty: 1,
    payment: "Cash",
    status: "Delivered",
    total: 872,
    img: shampoo,
  },
];

const OrderHistory = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredOrders = orders.filter((order) => {
    if (activeTab === "Completed") return order.status === "Delivered";
    if (activeTab === "Cancelled") return order.status === "Cancelled";
    return true;
  });

  return (
    <div className="flex-1 p-10">
    

      {/* Main Content */}
      <main className="flex-1">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <span className="text-pink-600">📑</span> Order History
        </h2>
        <p className="text-gray-600 text-sm mt-1">
          Access your order history to review details of past purchases,
          including order dates, items purchased, and shipping information.
        </p>

        {/* Tabs */}
        <div className="flex gap-6 mt-4 border-b">
          {["All", "Completed", "Cancelled"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 ${
                activeTab === tab
                  ? "border-b-2 border-pink-500 text-pink-600 font-medium"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab} Orders
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="py-2 px-3">Product Id</th>
                <th className="py-2 px-3">Name</th>
                <th className="py-2 px-3">Quantity</th>
                <th className="py-2 px-3">Payment</th>
                <th className="py-2 px-3">Status</th>
                <th className="py-2 px-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b last:border-none hover:bg-gray-50"
                >
                  <td className="py-3 px-3">{order.id}</td>
                  <td className="py-3 px-3 flex items-center gap-3">
                    <img
                      src={order.img}
                      alt={order.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <span>{order.name}</span>
                  </td>
                  <td className="py-3 px-3">{order.qty}</td>
                  <td className="py-3 px-3">{order.payment}</td>
                  <td
                    className={`py-3 px-3 font-medium ${
                      order.status === "Cancelled"
                        ? "text-red-500"
                        : "text-green-600"
                    }`}
                  >
                    {order.status}
                  </td>
                  <td className="py-3 px-3">Rs. {order.total}.00</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default OrderHistory;
