import React, { useState, useEffect } from "react";
import axios from "axios";
import { Plus, MoreVertical } from "lucide-react";
// Import useNavigate if you're using React Router
import { useNavigate } from "react-router-dom"; 

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // Initialize navigate if you're using React Router
  const navigate = useNavigate();

  // Fetch resources from the server
  const fetchResources = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/resource/all");
      
      // Check if response.data.payload is an array
      if (Array.isArray(response.data.payload)) {
        setResources(response.data.payload); // Update with the payload
      } else {
        console.error("Fetched data payload is not an array:", response.data.payload);
        setError("Invalid data format received from server");
      }
    } catch (error) {
      console.error("Error fetching resources:", error);
      setError("Failed to load resources");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []); // Run once when the component mounts
  
  const handleDeleteRestore = async (id, isActive) => {
    try {
      const newStatus = !isActive; // Toggle status (false to true or true to false)
  
      console.log(`Attempting to ${newStatus ? 'restore' : 'delete'} resource with ID: ${id}`);
  
      const response = await axios.put(
        `http://localhost:3000/api/admin/delete/${id}`,
        { isActive: newStatus }, // Send the updated status
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
  
      console.log("Response data:", response.data);
  
      if (response.data && response.data.message) {
        // Update the state to reflect the resource's new isActive status
        setResources((prevResources) =>
          prevResources.map((item) =>
            item._id === id ? { ...item, isActive: newStatus } : item
          )
        );
  
        alert(`Resource has been ${newStatus ? 'restored' : 'deleted'} successfully.`);
      } else {
        console.error("Unexpected response:", response.data);
        alert("Operation failed. Please try again.");
      }
    } catch (error) {
      console.error("Error updating resource status:", error);
      alert(`Failed to ${isActive ? 'delete' : 'restore'} resource. Please check console for details.`);
    }
  };
  
  
  // Helper function to format dates
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  // Helper function to display access levels as a comma-separated string
  const formatAccessLevels = (access) => {
    if (!access || !Array.isArray(access)) return "N/A";
    return access.join(", ");
  };

  return (
    <div className="w-3/4 p-6 bg-black text-white min-h-screen space-y-6 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Resources</h2>
          <p className="text-gray-400">Manage your digital library resources</p>
        </div>
        {/* <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
          <Plus size={16} />
          <span>Add Resource</span>
        </button> */}
      </div>

      {/* Error message */}
      {error && (
        <div className="bg-red-500 text-white p-3 rounded-md">
          {error}
        </div>
      )}

      {/* Loading indicator */}
      {loading && (
        <div className="text-center text-gray-400 py-6">
          Loading resources...
        </div>
      )}

      {/* Table Body Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-gray-400 border-b border-gray-700">
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Author</th>
              <th className="px-4 py-3">Publisher</th>
              <th className="px-4 py-3">Access</th>
              <th className="px-4 py-3">Created</th>
              <th className="px-4 py-3">Updated</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {!loading && resources.length === 0 ? (
              <tr>
                <td colSpan="9" className="text-center text-gray-400 py-6">
                  No resources available
                </td>
              </tr>
            ) : (
              resources.map((item) => (
                <tr
                  key={item._id}
                  className={`border-b border-gray-700 hover:bg-[#2a2a2a] transition ${!item.isActive ? "opacity-50" : ""}`}
                >
                  <td className="px-4 py-3 font-medium">{item.title}</td>
                  <td className="px-4 py-3 text-gray-300">{item.resourceType || "N/A"}</td>
                  <td className="px-4 py-3 text-gray-300">{item.category || "N/A"}</td>
                  <td className="px-4 py-3 text-gray-300">{item.authorName || "N/A"}</td>
                  <td className="px-4 py-3 text-gray-300">{item.publisher || "N/A"}</td>
                  <td className="px-4 py-3 text-gray-300">{formatAccessLevels(item.access)}</td>
                  <td className="px-4 py-3 text-gray-300">{formatDate(item.createdAt)}</td>
                  <td className="px-4 py-3 text-gray-300">{formatDate(item.updatedAt)}</td>
                  <td className="py-3 px-4">
                    {/* <div className="flex gap-2"> */}
                      {/* <button
                        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs"
                        onClick={() => {
                          if (typeof navigate === 'function') {
                            navigate(`/resource/edit/${item._id}`);
                          } else {
                            console.error("navigate function is not available");
                            window.location.href = `/resource/edit/${item._id}`;
                          }
                        }}
                      >
                        Edit
                      </button> */}
                      <button
                        className={`px-3 py-1 ${item.isActive ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"} text-white rounded text-xs`}
                        onClick={() => handleDeleteRestore(item._id, item.isActive)}
                      >
                        {item.isActive ? "Delete" : "Restore"}
                      </button>
                    {/* </div> */}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Resources;