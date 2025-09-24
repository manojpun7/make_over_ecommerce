import React, { useState } from "react";
import {
  User,
  Package,
  Gift,
  CreditCard,
  Shield,
  Share2,
  HelpCircle,
  LogOut,
} from "lucide-react";

import PersonalInformation from "./PersonalInformation";
import OrderHistory from "./OrderHistory";
import Rewards from "./Rewards";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const renderContent = () => {
    switch (activeTab) {
      case "personal":
        return <PersonalInformation />;
      case "orders":
        return <OrderHistory />;
      case "rewards":
        return <Rewards />;
      default:
        return <PersonalInformation />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50">
      {/* Sidebar */}
      <div className="w-72 bg-white shadow-lg p-6 flex flex-col">
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full border-2 border-pink-400 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-bold">
            {/* Placeholder Profile Pic */}
            <span>DD</span>
          </div>
          <h2 className="mt-3 font-semibold text-gray-800">Dikshya Devkota</h2>
        </div>

        {/* Menu */}
        <nav className="flex flex-col space-y-3 text-gray-600 font-medium">
          <button
            onClick={() => setActiveTab("personal")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
              activeTab === "personal"
                ? "text-pink-600 bg-pink-50"
                : "hover:text-pink-600"
            }`}
          >
            <User size={18} /> Personal Information
          </button>

          <button
            onClick={() => setActiveTab("orders")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
              activeTab === "orders"
                ? "text-pink-600 bg-pink-50"
                : "hover:text-pink-600"
            }`}
          >
            <Package size={18} /> My Orders
          </button>

          <button
            onClick={() => setActiveTab("rewards")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
              activeTab === "rewards"
                ? "text-pink-600 bg-pink-50"
                : "hover:text-pink-600"
            }`}
          >
            <Gift size={18} /> Rewards
          </button>

          <button className="flex items-center gap-3 hover:text-pink-600 px-4 py-2 rounded-lg">
            <CreditCard size={18} /> Payment Methods
          </button>
          <button className="flex items-center gap-3 hover:text-pink-600 px-4 py-2 rounded-lg">
            <Shield size={18} /> Security
          </button>
          <button className="flex items-center gap-3 hover:text-pink-600 px-4 py-2 rounded-lg">
            <Share2 size={18} /> Social Networks
          </button>
          <button className="flex items-center gap-3 hover:text-pink-600 px-4 py-2 rounded-lg">
            <HelpCircle size={18} /> Need Help?
          </button>
          <button className="flex items-center gap-3 text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg mt-6">
            <LogOut size={18} /> Sign Out
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
