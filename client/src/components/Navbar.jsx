import React from "react";
import { FaBell, FaSearch, FaBookOpen } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-black text-white border-b border-white">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left - Logo */}
        <div className="flex items-center space-x-2">
          <FaBookOpen className="text-xl" />
          <span className="text-lg font-semibold">Digital Academic Library</span>
        </div>

        {/* Center - Search Bar */}
        <div className="w-1/2 mx-auto">
          <div className="flex items-center border-b border-white px-3 py-2">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search for papers, books, authors..."
              className="bg-transparent outline-none w-full text-sm text-white placeholder-gray-400"
            />
          </div>
        </div>

        {/* Right - Notification and Avatar */}
        <div className="flex items-center space-x-5">
          {/* Notification bell with red dot */}
          <div className="relative">
            <FaBell className="text-xl" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600"></span>
          </div>

          {/* Profile avatar */}
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;