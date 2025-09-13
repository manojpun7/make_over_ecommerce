import React, { useState } from "react";
import {
  Download,
  ShoppingCart,
  Menu,
  BadgePercent,
  X,
  ChevronDown,
  ShoppingBag,
} from "lucide-react";
import logo from "../assets/logo.png";
const NavLink = ({ text }) => (
  <a
    href="#"
    className="text-sm  font-medium hover:text-pink-600 transition-colors"
  >
    {text}
  </a>
);

const IconButton = ({ icon: Icon, text }) => (
  <a
    href="#"
    className="flex items-center space-x-2 text-gray-700 hover:text-pink-500 transition-colors"
  >
    <Icon size={20} />
    <span className="text-lg">{text}</span>
  </a>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center py-2 px-10">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Makeover Me" className="h-10 w-auto" />
          <div className="hidden sm:block leading-tight">
            <p className="font-bold text-lg text-pink-400">Makeover Me</p>
            <p className="text-xs text-pink-400">The Key to a New Me</p>
          </div>
          <div className="hidden lg:flex flex-col items-start space-y-1 text-lg pl-4 border-l border-gray-200 text-gray-700">
            ⚡Express delivery to
            <div className="flex items-center justify-center w-full space-x-1 cursor-pointer hover:underline">
              <span className="font-semibold text-gray-900">Select City</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-15">
          <IconButton icon={Download} text="Download App" />
          <IconButton icon={BadgePercent} text="Offers" />
          <IconButton icon={ShoppingCart} text="Cart" />
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
            <span className="text-lg text-gray-600">Hello, Login</span>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className="flex justify-around text-white items-center h-9  bg-pink-400">
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="22" height="20" fill="white" />
          <path
            d="M3.66675 15.8334C3.66675 16.2754 3.8599 16.6993 4.20372 17.0119C4.54754 17.3244 5.01385 17.5 5.50008 17.5C5.98631 17.5 6.45263 17.3244 6.79644 17.0119C7.14026 16.6993 7.33341 16.2754 7.33341 15.8334C7.33341 15.3913 7.14026 14.9674 6.79644 14.6548C6.45263 14.3423 5.98631 14.1667 5.50008 14.1667C5.01385 14.1667 4.54754 14.3423 4.20372 14.6548C3.8599 14.9674 3.66675 15.3913 3.66675 15.8334Z"
            stroke="#FE66C2"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.4584 14.1667H5.50008V2.5H3.66675"
            stroke="#FE66C2"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.5 4.16669L18.3333 5.00002L17.5459 10.0092M11.9167 10.8334H5.5M14.6667 17.5L19.25 13.3334M19.25 17.5V17.5084M14.6667 13.3334V13.3417"
            stroke="#FE66C2"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="mx-2 wave-text hidden sm:inline text-xs md:text-sm lg:text-base">
          NG VOUCHER UP TO Rs.1000
        </span>

        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="22" height="20" fill="#FFF8FC" />
          <path
            d="M6.1875 2.5V4.52125L3.79225 3.21438L3.08275 4.28562L4.39312 5H2.0625V16.875H6.1875V15.625H3.4375V6.25H8.95606C9.52875 5.8625 10.2327 5.625 11 5.625C11.242 5.625 11.4689 5.65125 11.6875 5.68875V5H9.35756L10.6672 4.28562L9.95775 3.21438L7.5625 4.52125V2.5H6.1875ZM11 6.875C9.86906 6.875 8.9375 7.72188 8.9375 8.75C8.9375 8.97 8.98906 9.1775 9.06675 9.375H7.5625V16.875H19.9375V9.375H18.4333C18.5165 9.17522 18.5603 8.96363 18.5625 8.75C18.5625 7.72188 17.6309 6.875 16.5 6.875C15.2969 6.875 14.4801 7.705 13.9432 8.39875C13.871 8.49062 13.8139 8.5825 13.75 8.67312C13.6854 8.5825 13.629 8.49188 13.5568 8.39813C13.0192 7.705 12.2031 6.875 11 6.875ZM11 8.125C11.4297 8.125 11.9886 8.54437 12.4183 9.10187C12.5228 9.23812 12.507 9.24625 12.5902 9.37625H11C10.6109 9.37625 10.3125 9.105 10.3125 8.75125C10.3109 8.66872 10.3276 8.58674 10.3616 8.5102C10.3956 8.43365 10.4461 8.3641 10.5103 8.30567C10.5744 8.24725 10.6508 8.20115 10.7349 8.17011C10.8191 8.13907 10.9092 8.12373 11 8.125ZM16.5 8.125C16.8891 8.125 17.1875 8.39625 17.1875 8.75C17.1875 9.10375 16.8891 9.375 16.5 9.375H14.9098C14.9937 9.24563 14.9772 9.2375 15.0817 9.10125C15.5121 8.545 16.0703 8.125 16.5 8.125ZM8.9375 10.625H13.0625V15.625H8.9375V10.625ZM14.4375 10.625H18.5625V15.625H14.4375V10.625Z"
            fill="#FE66C2"
          />
        </svg>
        <span className="mx-2 wave-text hidden sm:inline text-xs md:text-sm lg:text-base">
          FREE GIFTS ON EVERY PURCHASE
        </span>

        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="22" height="20" fill="white" />
          <path
            d="M1.83333 5.83335V5.41669C1.71178 5.41669 1.5952 5.46059 1.50924 5.53873C1.42329 5.61687 1.375 5.72285 1.375 5.83335H1.83333ZM11.9167 5.83335H12.375C12.375 5.72285 12.3267 5.61687 12.2408 5.53873C12.1548 5.46059 12.0382 5.41669 11.9167 5.41669V5.83335ZM11.9167 7.50002V7.08335C11.7951 7.08335 11.6785 7.12725 11.5926 7.20539C11.5066 7.28353 11.4583 7.38951 11.4583 7.50002H11.9167ZM1.83333 6.25002H11.9167V5.41669H1.83333V6.25002ZM11.4583 5.83335V15.8334H12.375V5.83335H11.4583ZM2.29167 14.1667V5.83335H1.375V14.1667H2.29167ZM11.9167 7.91669H16.5V7.08335H11.9167V7.91669ZM19.7083 10.8334V14.1667H20.625V10.8334H19.7083ZM12.375 15.8334V7.50002H11.4583V15.8334H12.375ZM17.4717 16.7167C17.2139 16.9508 16.8644 17.0823 16.5 17.0823C16.1356 17.0823 15.7861 16.9508 15.5283 16.7167L14.8793 17.3067C15.0921 17.5002 15.3448 17.6537 15.6229 17.7584C15.901 17.8632 16.199 17.9171 16.5 17.9171C16.801 17.9171 17.099 17.8632 17.3771 17.7584C17.6552 17.6537 17.9079 17.5002 18.1207 17.3067L17.4717 16.7167ZM15.5283 14.95C15.7861 14.7159 16.1356 14.5845 16.5 14.5845C16.8644 14.5845 17.2139 14.7159 17.4717 14.95L18.1207 14.36C17.9079 14.1665 17.6552 14.013 17.3771 13.9083C17.099 13.8035 16.801 13.7496 16.5 13.7496C16.199 13.7496 15.901 13.8035 15.6229 13.9083C15.3448 14.013 15.0921 14.1665 14.8793 14.36L15.5283 14.95ZM6.47167 16.7167C6.21385 16.9508 5.86438 17.0823 5.5 17.0823C5.13562 17.0823 4.78615 16.9508 4.52833 16.7167L3.87933 17.3067C4.09214 17.5002 4.3448 17.6537 4.62288 17.7584C4.90095 17.8632 5.199 17.9171 5.5 17.9171C5.801 17.9171 6.09905 17.8632 6.37712 17.7584C6.6552 17.6537 6.90786 17.5002 7.12067 17.3067L6.47167 16.7167ZM4.52833 14.95C4.78615 14.7159 5.13562 14.5845 5.5 14.5845C5.86438 14.5845 6.21385 14.7159 6.47167 14.95L7.12067 14.36C6.90786 14.1665 6.6552 14.013 6.37712 13.9083C6.09905 13.8035 5.801 13.7496 5.5 13.7496C5.199 13.7496 4.90095 13.8035 4.62288 13.9083C4.3448 14.013 4.09214 14.1665 3.87933 14.36L4.52833 14.95ZM17.4717 14.95C17.7412 15.1934 17.875 15.5125 17.875 15.8334H18.7917C18.7917 15.3009 18.568 14.7667 18.1207 14.36L17.4717 14.95ZM17.875 15.8334C17.875 16.1542 17.7412 16.4734 17.4717 16.7167L18.1207 17.3067C18.3335 17.1132 18.5022 16.8835 18.6174 16.6307C18.7325 16.3779 18.7917 16.107 18.7917 15.8334H17.875ZM14.6667 15.4167H11.9167V16.25H14.6667V15.4167ZM15.5283 16.7167C15.2704 16.4825 15.1253 16.1648 15.125 15.8334H14.2083C14.2083 16.3659 14.432 16.9 14.8793 17.3067L15.5283 16.7167ZM15.125 15.8334C15.125 15.5125 15.2588 15.1934 15.5283 14.95L14.8793 14.36C14.6665 14.5535 14.4978 14.7832 14.3826 15.036C14.2675 15.2888 14.2083 15.5597 14.2083 15.8334H15.125ZM4.52833 16.7167C4.2704 16.4825 4.12532 16.1648 4.125 15.8334H3.20833C3.20833 16.3659 3.432 16.9 3.87933 17.3067L4.52833 16.7167ZM4.125 15.8334C4.125 15.5125 4.25883 15.1934 4.52833 14.95L3.87933 14.36C3.66655 14.5535 3.49777 14.7832 3.38264 15.036C3.26751 15.2888 3.20828 15.5597 3.20833 15.8334H4.125ZM11.9167 15.4167H7.33333V16.25H11.9167V15.4167ZM6.47167 14.95C6.74117 15.1934 6.875 15.5125 6.875 15.8334H7.79167C7.79167 15.3009 7.568 14.7667 7.12067 14.36L6.47167 14.95ZM6.875 15.8334C6.875 16.1542 6.74117 16.4734 6.47167 16.7167L7.12067 17.3067C7.33345 17.1132 7.50223 16.8835 7.61736 16.6307C7.73249 16.3779 7.79172 16.107 7.79167 15.8334H6.875ZM19.7083 14.1667C19.7083 14.4982 19.5635 14.8161 19.3056 15.0506C19.0477 15.285 18.698 15.4167 18.3333 15.4167V16.25C18.9411 16.25 19.524 16.0305 19.9538 15.6398C20.3836 15.2491 20.625 14.7192 20.625 14.1667H19.7083ZM16.5 7.91669C17.3509 7.91669 18.167 8.22398 18.7686 8.77096C19.3703 9.31794 19.7083 10.0598 19.7083 10.8334H20.625C20.625 9.83879 20.1904 8.88496 19.4168 8.1817C18.6432 7.47844 17.594 7.08335 16.5 7.08335V7.91669ZM1.375 14.1667C1.375 14.7192 1.61644 15.2491 2.04621 15.6398C2.47598 16.0305 3.05888 16.25 3.66667 16.25V15.4167C3.30199 15.4167 2.95226 15.285 2.69439 15.0506C2.43653 14.8161 2.29167 14.4982 2.29167 14.1667H1.375Z"
            fill="#FE66C2"
          />
          <path
            d="M6.87516 5C6.87516 4.33696 6.58543 3.70107 6.06971 3.23223C5.55398 2.76339 4.85451 2.5 4.12516 2.5C3.88205 2.5 3.64889 2.5878 3.47698 2.74408C3.30507 2.90036 3.2085 3.11232 3.2085 3.33333C3.2085 3.99637 3.49823 4.63226 4.01395 5.1011C4.52968 5.56994 5.22915 5.83333 5.9585 5.83333H6.87516M6.87516 5V5.83333M6.87516 5C6.87516 4.33696 7.16489 3.70107 7.68062 3.23223C8.19634 2.76339 8.89582 2.5 9.62516 2.5C9.86828 2.5 10.1014 2.5878 10.2733 2.74408C10.4453 2.90036 10.5418 3.11232 10.5418 3.33333C10.5418 3.99637 10.2521 4.63226 9.73637 5.1011C9.22065 5.56994 8.52117 5.83333 7.79183 5.83333H6.87516"
            stroke="#FE66C2"
            strokeWidth="0.833333"
            strokeLinejoin="round"
          />
        </svg>
        <span className="mx-2 wave-text hidden sm:inline text-xs md:text-sm lg:text-base">
          Rs.1000 INSIDE POKHARA
        </span>
      </div>
      <div className="hidden md:flex justify-center items-center space-x-10 py-2 border-t border-gray-200">
        <NavLink text="Women" />
        <NavLink text="Men" />
        <NavLink text="Kids" />
        <NavLink text="Beauty Products" />
        <NavLink text="Hairstyles" />
        <NavLink text="PLUS" />
        <NavLink text="Offers" />
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 py-4 px-4 space-y-4">
          <IconButton icon={Download} text="Download App" />
          <IconButton icon={BadgePercent} text="Offers" />
          <IconButton icon={ShoppingCart} text="Cart" />
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
            <span className="text-sm">Hello, Login</span>
          </div>
          <div className="flex flex-col space-y-3">
            <NavLink text="Women" />
            <NavLink text="Men" />
            <NavLink text="Kids" />
            <NavLink text="Beauty Products" />
            <NavLink text="Hairstyles" />
            <NavLink text="PLUS" />
            <NavLink text="Offers" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
