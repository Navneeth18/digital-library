import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../context/UserContext"; // adjust path if needed

const MaterialRequestForm = () => {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    title: "",
    authors: "",
    resourceType: "",
    publisherOrJournal: "",
    year: "",
    doi: "",
    url: "",
    description: "",
    priority: "",
    reasonForRequest: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const token = localStorage.getItem("token");

    try {
      const body = {
        ...formData,
        requestedById: user?._id,
        requestedByName: user?.name
      };

      await axios.post("http://localhost:3000/api/user/resource-request", body, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert("Request submitted successfully!");
      setFormData({
        title: "",
        authors: "",
        resourceType: "",
        publisherOrJournal: "",
        year: "",
        doi: "",
        url: "",
        description: "",
        priority: "",
        reasonForRequest: ""
      });
    } catch (err) {
      setError(err.response?.data || err.message);
      console.error("Error submitting request:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white p-6 rounded-lg w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-2">Material Request Form</h2>
      <p className="text-sm mb-4">Fill out this form to request academic materials...</p>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          type="text"
          placeholder="Enter the title of the material"
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded"
          required
        />
        <input
          name="authors"
          value={formData.authors}
          onChange={handleChange}
          type="text"
          placeholder="Enter the authors' names"
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded"
          required
        />
        
        <select
          name="resourceType"
          value={formData.resourceType}
          onChange={handleChange}
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded"
          required
        >
          <option value="">Select a resource type</option>
          <option value="Book">Book</option>
          <option value="Journal">Journal</option>
          <option value="Paper">Paper</option>
          <option value="Video">Video</option>
        </select>

        <input
          name="publisherOrJournal"
          value={formData.publisherOrJournal}
          onChange={handleChange}
          type="text"
          placeholder="Enter the publisher or journal name"
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded"
          required
        />
        <input
          name="year"
          value={formData.year}
          onChange={handleChange}
          type="text"
          placeholder="YYYY"
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded"
          required
        />
        <input
          name="doi"
          value={formData.doi}
          onChange={handleChange}
          type="text"
          placeholder="Enter the DOI if available"
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded"
        />
        <input
          name="url"
          value={formData.url}
          onChange={handleChange}
          type="text"
          placeholder="Enter a URL if available"
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Provide a brief description of the material"
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded"
        ></textarea>

        <div className="mb-4">
          <label className="block mb-1">Priority</label>
          <div className="space-y-1">
            {["Low", "Medium", "High"].map((level) => (
              <label key={level} className="block">
                <input
                  type="radio"
                  name="priority"
                  value={level}
                  checked={formData.priority === level}
                  onChange={handleChange}
                  className="mr-2"
                />
                {level} - {level === "Low" ? "Not urgent" : level === "Medium" ? "Needed soon" : "Urgently needed"}
              </label>
            ))}
          </div>
        </div>

        <textarea
          name="reasonForRequest"
          value={formData.reasonForRequest}
          onChange={handleChange}
          placeholder="Explain why you need this material"
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-white hover:bg-white text-black py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Request"}
        </button>
      </form>

      {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

      <p className="text-sm text-gray-400 mt-4">You will receive an email when your request is reviewed.</p>
    </div>
  );
};

const MyRequests = () => {
  const { user } = useUser();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const token = localStorage.getItem("token");
        const userId = user?._id; // Get the user ID dynamically
        const res = await axios.get(`http://localhost:3000/api/user/resource-request/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setRequests(res.data.payload); // Assuming the response payload is an array of requests
      } catch (error) {
        setError("Failed to fetch requests.");
        console.error("Failed to fetch requests:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };
  
    if (user?._id) { // Ensure the user ID is available
      fetchRequests();
    }
  }, [user]); // Only fetch requests when the user object changes
  

  return (
    <div className="bg-black text-white p-6 rounded-lg w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">My Material Requests</h2>
      {loading ? (
        <p className="text-gray-400">Loading your requests...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : requests.length === 0 ? (
        <p className="text-gray-400">You haven't submitted any requests yet.</p>
      ) : (
        <ul className="space-y-4">
          {requests.map((req) => (
            <li key={req._id} className="border border-gray-600 p-4 rounded bg-gray-900">
              <h3 className="text-lg font-semibold">{req.title}</h3>
              <p className="text-sm">Authors: {req.authors}</p>
              <p className="text-sm">Type: {req.resourceType}</p>
              <p className="text-sm">Priority: {req.priority}</p>
              <p className="text-sm text-gray-400">Requested on: {new Date(req.createdAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const SearchApp = () => {
  const [activeTab, setActiveTab] = useState("form");

  return (
    <div className="p-6">
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => setActiveTab("form")}
          className={`py-2 px-4 rounded ${activeTab === "form" ? "bg-white text-black" : "bg-gray-700 text-white"}`}
        >
          Request Material
        </button>
        <button
          onClick={() => setActiveTab("requests")}
          className={`py-2 px-4 rounded ${activeTab === "requests" ? "bg-white text-black" : "bg-gray-700 text-white"}`}
        >
          My Requests
        </button>
      </div>

      {activeTab === "form" ? <MaterialRequestForm /> : <MyRequests />}
    </div>
  );
};

export default SearchApp;
