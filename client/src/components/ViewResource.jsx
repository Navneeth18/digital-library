import React from "react";
import { useParams } from "react-router-dom";

const ViewResource = () => {
  const { id } = useParams();
  const resource = resources.find((res) => res.id === parseInt(id));

  if (!resource) {
    return <p>Resource not found</p>;
  }

  return (
    <div className="p-6 bg-[#111] text-white">
      <h1 className="text-2xl font-bold mb-4">{resource.title}</h1>
      <p className="text-sm text-gray-400 mb-1">Authors: {resource.authors}</p>
      <p className="text-sm text-gray-400 mb-1">Publisher: {resource.publisher}</p>
      <p className="text-sm text-gray-400 mb-3">Date: {resource.date}</p>
      <div className="flex gap-2 mb-3">
        {resource.tags.map((tag) => (
          <span key={tag} className="bg-gray-700 text-sm px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-sm mb-4">{resource.description}</p>
    </div>
  );
};

export default ViewResource;


