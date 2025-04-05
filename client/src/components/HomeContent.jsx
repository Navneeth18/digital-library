import React from "react";
import { FaSearch, FaBookOpen, FaPlus, FaComments } from "react-icons/fa";

const HomeContent = () => {
  return (
    <div className="bg-black text-white w-full px-8 py-6 h-1/2">
      {/* Welcome Title */}
      <h1 className="text-2xl font-bold mb-1">Welcome to Digital Academic Library</h1>
      <p className="text-gray-400 mb-6">
        Access thousands of academic resources, research papers, and books from top journals and publishers.
      </p>

      {/* Announcement Bar */}
      <div className="border border-white rounded-md p-4 mb-6 bg-[#1a1a1a]">
        <p className="font-semibold mb-1">📢 Announcements</p>
        <p className="text-sm text-gray-300">
          New IEEE and Springer journals have been added to our collection. Check out the latest research papers in Computer Science and Engineering.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Browse Resources */}
        <div className="border border-gray-600 rounded-md p-4 bg-[#1a1a1a]">
          <div className="flex items-center mb-2">
            <FaBookOpen className="mr-2" />
            <span className="font-semibold">Browse Resources</span>
          </div>
          <p className="text-sm text-gray-400 mb-3">Explore our extensive collection of academic materials</p>
          <button className="bg-white text-black py-1 px-3 rounded">Browse Now</button>
        </div>

        {/* Advanced Search */}
        <div className="border border-gray-600 rounded-md p-4 bg-[#1a1a1a]">
          <div className="flex items-center mb-2">
            <FaSearch className="mr-2" />
            <span className="font-semibold">Advanced Search</span>
          </div>
          <p className="text-sm text-gray-400 mb-3">Find exactly what you need with our powerful search tools</p>
          <button className="bg-white text-black py-1 px-3 rounded">Search</button>
        </div>

        {/* Request Materials */}
        <div className="border border-gray-600 rounded-md p-4 bg-[#1a1a1a]">
          <div className="flex items-center mb-2">
            <FaPlus className="mr-2" />
            <span className="font-semibold">Request Materials</span>
          </div>
          <p className="text-sm text-gray-400 mb-3">Can’t find what you’re looking for? Request new materials</p>
          <button className="bg-white text-black py-1 px-3 rounded">Make Request</button>
        </div>

        {/* Discussion Forums */}
        <div className="border border-gray-600 rounded-md p-4 bg-[#1a1a1a]">
          <div className="flex items-center mb-2">
            <FaComments className="mr-2" />
            <span className="font-semibold">Discussion Forums</span>
          </div>
          <p className="text-sm text-gray-400 mb-3">Join academic discussions and share knowledge</p>
          <button className="bg-white text-black py-1 px-3 rounded">Join Discussions</button>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;