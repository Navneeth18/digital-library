import React from "react";
import {
  FaHome,
  FaBook,
  FaSearch,
  FaPlus,
  FaComments,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-black text-white w-1/6 min-h-screen p-6 flex flex-col justify-between">
      {/* Top Navigation */}
      <div className="space-y-4">
        <div className="bg-[#1c1c1e] px-4 py-3 rounded-md flex items-center space-x-3 border border-gray-700">
          <FaHome />
          <span className="font-semibold">Dashboard</span>
        </div>

        <div className="flex items-center space-x-3 text-gray-400 hover:text-white cursor-pointer">
          <FaBook />
          <span>Browse Resources</span>
        </div>

        <div className="flex items-center space-x-3 text-gray-400 hover:text-white cursor-pointer">
          <FaSearch />
          <span>Search</span>
        </div>

        <div className="flex items-center space-x-3 text-gray-400 hover:text-white cursor-pointer">
          <FaPlus />
          <span>Request Materials</span>
        </div>

        <div className="flex items-center space-x-3 text-gray-400 hover:text-white cursor-pointer">
          <FaComments />
          <span>Discussion Forums</span>
        </div>

        <div className="flex items-center space-x-3 text-gray-400 hover:text-white cursor-pointer">
          <FaCog />
          <span>Settings</span>
        </div>
      </div>

      {/* Bottom Help Box */}
      <div className="bg-[#2c2c2e] p-4 rounded-lg text-sm text-gray-300">
        <h4 className="font-semibold text-white mb-1">Need Help?</h4>
        <p className="mb-3">Visit our help center or contact library support for assistance.</p>
        <button className="bg-white text-black font-semibold py-1 px-3 rounded-md">
          Get Help
        </button>
      </div>
    </div>
  );
};

export default Sidebar;