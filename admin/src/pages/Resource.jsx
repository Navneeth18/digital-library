import React from "react";
import { Plus, MoreVertical } from "lucide-react";

const resources = [
  {
    title: "Introduction to JavaScript",
    category: "Programming",
    author: "John Doe",
    date: "2023-10-15",
    status: "published",
  },
  {
    title: "Data Structures and Algorithms",
    category: "Computer Science",
    author: "Jane Smith",
    date: "2023-11-20",
    status: "published",
  },
  {
    title: "Introduction to Machine Learning",
    category: "Artificial Intelligence",
    author: "Robert Johnson",
    date: "2024-01-05",
    status: "published",
  },
  {
    title: "Web Development with React",
    category: "Web Development",
    author: "Sarah Williams",
    date: "2024-02-10",
    status: "draft",
  },
  {
    title: "Database Management Systems",
    category: "Database",
    author: "Michael Brown",
    date: "2024-03-15",
    status: "published",
  },
];

const Resources = () => {
  return (
    <div className="w-3/4 p-6 bg-[#121212] text-white min-h-screen space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Resources</h2>
          <p className="text-gray-400">Manage your digital library resources</p>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-lg font-medium flex items-center gap-2">
          <Plus size={18} />
          Add Resource
        </button>
      </div>

      {/* Table */}
      <div className="bg-[#1e1e1e] rounded-lg border border-gray-700 overflow-x-auto">
        <div className="p-4 border-b border-gray-700">
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full p-2 rounded bg-[#2a2a2a] text-sm text-white border border-gray-600 placeholder-gray-400"
          />
        </div>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-gray-400 border-b border-gray-700">
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Author</th>
              <th className="px-4 py-3">Date Added</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((item, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-[#2a2a2a] transition">
                <td className="px-4 py-3 font-medium">{item.title}</td>
                <td className="px-4 py-3 text-gray-300">{item.category}</td>
                <td className="px-4 py-3 text-gray-300">{item.author}</td>
                <td className="px-4 py-3 text-gray-300">{item.date}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium ${
                      item.status === "published"
                        ? "bg-white text-black"
                        : "bg-gray-700 text-gray-300"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button>
                    <MoreVertical size={18} className="text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Resources;