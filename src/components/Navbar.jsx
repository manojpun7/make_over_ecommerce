import React, { useEffect, useState } from "react";
import {
  Download,
  ShoppingCart,
  Menu,
  BadgePercent,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout, setUserFromStorage } from "../lib/store/auth/authSlice";

// IconButton component with optional `to` for navigation
const IconButton = ({ icon: Icon, text, to, onClick }) => {
  if (to) {
    return (
      <Link
        to={to}
        className="flex items-center space-x-2 text-gray-700 hover:text-pink-500 transition-colors"
      >
        <Icon size={20} />
        <span className="text-lg">{text}</span>
      </Link>
    );
  }

  return (

    <button
      onClick={onClick}
      className="flex items-center space-x-2 text-gray-700 hover:text-pink-500 transition-colors"
    >
      <Icon size={20} />
      <span className="text-lg">{text}</span>
    </button>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const cartitems = useSelector((state) => state.cart.items);
  const cartCount = cartitems.length



  useEffect(() => {
    const storedEmail = localStorage.getItem("user_email");
    if (!user && storedEmail) {
      dispatch(setUserFromStorage(storedEmail));
    }
  }, [dispatch, user]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/login");
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center py-2 px-10">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 hover:opacity-80 transition"
        >
          <img src={logo} alt="Makeover Me" className="h-10 w-auto" />
          <div className="hidden sm:block leading-tight">
            <p className="font-bold text-lg text-pink-400">Makeover Me</p>
            <p className="text-xs text-pink-400">The Key to a New Me</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          <IconButton icon={Download} text="Download App" />
          <IconButton icon={BadgePercent} text="Offers" />
          {/* Cart navigates to /cart */}
          <IconButton icon={ShoppingCart} text={`Cart (${cartCount})`} to="/cart" />

          {/* User Section */}
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
            {user ? (
              <>
                <span className="text-lg text-gray-600">
                  Hello, {user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium text-pink-500 hover:text-pink-600 border border-pink-400 rounded-full px-3 py-1 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate("/auth/login")}
                className="text-lg text-gray-600 hover:text-pink-500"
              >
                Hello, Login
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* You can add mobile menu content here if needed */}
    </nav>
  );
};

export default Navbar;
