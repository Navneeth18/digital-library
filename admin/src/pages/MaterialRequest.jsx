import React, { useState, useEffect } from 'react';
import axios from 'axios';

const statusStyles = {
  Pending: 'bg-zinc-800 text-white',
  Approved: 'bg-green-200 text-green-900',
  Rejected: 'bg-red-500 text-white',
};

export default function MaterialRequest() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all requests when the component mounts
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/admin/resource-requests');
        console.log(response.data.payload); // Log the response data for debugging
        setRequests(response.data.payload); // Assuming response data is an array of requests
      } catch (error) {
        console.error('Error fetching material requests:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      // Send the updated status to the backend
      const response = await axios.put(
        `http://localhost:3000/api/admin/resource-requests/${id}`,
        { status: newStatus }
      );

      if (response.data) {
        // Update the state to reflect the new status
        setRequests((prevRequests) =>
          prevRequests.map((req) =>
            req._id === id ? { ...req, status: newStatus } : req
          )
        );
        alert(`Request has been ${newStatus === 'Approved' ? 'approved' : 'rejected'} successfully.`);
      }
    } catch (error) {
      console.error('Error changing status:', error);
      alert('Failed to change status. Please try again.');
    }
  };

  if (loading) {
    return <div>Loading requests...</div>;
  }

  return (
    <div className="w-[76%] h-[95vh] ml-10 mt-4 mr-8 p-6 bg-black text-white rounded-2xl shadow-lg overflow-y-auto border border-white">
      <h2 className="text-3xl font-bold mb-1">Material Requests</h2>
      <p className="text-zinc-400 mb-6">Manage material requests from users</p>

      <div className="bg-black rounded-xl border border-white p-4">
        {/* <div className="mb-4">
          <input
            type="text"
            placeholder="Search requests..."
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg placeholder-zinc-500"
          />
        </div> */}

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b border-white text-zinc-400">
              <tr>
                <th className="py-3 px-4">Title</th>
                <th className="py-3 px-4">Requested By</th>
                <th className="py-3 px-4">Date Requested</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req, idx) => (
                <tr key={idx} className="border-b border-zinc-800 hover:bg-zinc-800">
                  <td className="py-4 px-4 font-semibold">{req.title}</td>
                  <td className="py-4 px-4">{req.requestedByName}</td>
                  <td className="py-4 px-4">{req.createdTime.slice(0, 10)}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 text-sm rounded-full ${statusStyles[req.status]}`}
                    >
                      {req.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    {req.status === 'Pending' && (
                      <>
                        <button
                          onClick={() => handleStatusChange(req._id, 'Approved')}
                          className="mr-2 text-green-400 hover:text-green-300"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleStatusChange(req._id, 'Rejected')}
                          className="text-red-400 hover:text-red-300"
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
