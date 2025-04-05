import React from "react";
import { FaBell, FaSearch, FaBookOpen } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext"; // Importing the user context
const Navbar = () => {
  const navigate = useNavigate();

  const { user, logout } = useUser();

  // Function to handle the "Get Started" button click
  const handleGetStarted = () => {
    // Logic for "Get Started" button click
    navigate('auth');


  };
  const handleLogout = () => {
    logout(); // Call the logout function from the context
    navigate('/'); // Redirect to the home page after logout
  };

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

          {/* Conditional buttons */}
          <div>
            {user ? (
              <button onClick={handleLogout} className="bg-red-600 rounded p-2">Logout</button>
            ) : (
              <button onClick={handleGetStarted} className="bg-[#10b981] rounded p-2">Get Started</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;