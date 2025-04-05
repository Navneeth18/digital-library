import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEye, FaDownload } from "react-icons/fa";

const ResourceSection = ({ role }) => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchResources = async (currentRole) => {
    setLoading(true);
    try {
      const endpoint =
        currentRole === "public" || !currentRole
          ? "http://localhost:3000/api/resource/public"
          : `http://localhost:3000/api/resource/${currentRole}`;
      const res = await axios.get(endpoint);
      setResources(res.data.payload || []);
      // console.log(`Loaded resources for role: ${currentRole}`);
      // console.log(res.data.payload);
    } catch (error) {
      console.error("Error fetching resources:", error);
      setResources([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResources(role || "public");
  }, [role]);

  return (
    <div className="bg-black text-white w-full px-8 py-6 flex flex-col lg:flex-row gap-6">
      <div className="bg-[#1a1a1a] border border-gray-600 rounded-md p-4 w-full lg:w-1/2">
        <h2 className="text-xl font-semibold mb-1">Recently Added Resources</h2>
        <p className="text-gray-400 text-sm mb-4">
          The latest academic materials added to our library
        </p>

        {loading ? (
          <p>Loading resources...</p>
        ) : resources.length === 0 ? (
          <p>No resources found.</p>
        ) : (
          resources.slice(0, 4).map((item, i) => (
            <div key={i} className="mb-4">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-400">{item.authors}</p>
              <div className="flex flex-wrap gap-2 mt-1 text-xs">
                {item.tags?.map((tag, j) => (
                  <span key={j} className="bg-gray-700 px-2 py-0.5 rounded-md">
                    {tag}
                  </span>
                ))}
                <span className="text-gray-400 ml-auto">{item.date}</span>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="bg-[#1a1a1a] border border-gray-600 rounded-md p-4 w-full lg:w-1/2">
        <h2 className="text-xl font-semibold mb-1">Popular Resources</h2>
        <p className="text-gray-400 text-sm mb-4">
          Most viewed and downloaded materials
        </p>

        {loading ? (
          <p>Loading resources...</p>
        ) : resources.length === 0 ? (
          <p>No resources found.</p>
        ) : (
          resources.slice(4, 8).map((item, i) => (
            <div key={i} className="mb-4">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-400">{item.authors}</p>
              <div className="flex flex-wrap gap-2 mt-1 text-xs items-center">
                {item.tags?.map((tag, j) => (
                  <span key={j} className="bg-gray-700 px-2 py-0.5 rounded-md">
                    {tag}
                  </span>
                ))}
                <div className="flex items-center gap-2 ml-auto text-gray-400">
                  <span className="flex items-center gap-1">
                    <FaEye /> {item.views || 0}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaDownload /> {item.downloads || 0}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ResourceSection;
