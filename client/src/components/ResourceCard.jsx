import React from "react";



const ResourceCard = ({ resource }) => (
  <div className="bg-[#111] border border-gray-700 p-6 rounded-lg mb-4  text-white">
    <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
    <p className="text-sm text-gray-400 mb-1">Authors: {resource.authors}</p>
    <p className="text-sm text-gray-400 mb-1">Journal/Publisher: {resource.publisher}</p>
    <p className="text-sm text-gray-400 mb-3">Date: {resource.date}</p>
    <div className="flex gap-2 mb-3">
      {resource.tags.map((tag) => (
        <span key={tag} className="bg-gray-700 text-sm px-2 py-1 rounded">
          {tag}
        </span>
      ))}
    </div>
    <p className="text-sm mb-4">{resource.description}</p>
    <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">
      View Details
    </button>
  </div>
);

export default ResourceCard