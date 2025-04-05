import React from 'react';

const statusStyles = {
  Pending: 'bg-zinc-800 text-white',
  Approved: 'bg-green-200 text-green-900',
  Rejected: 'bg-red-500 text-white',
};

const requests = [
  {
    title: 'Advanced Python Programming',
    requestedBy: 'Alex Johnson',
    date: '2024-03-25',
    status: 'Pending',
  },
  {
    title: 'Quantum Computing Fundamentals',
    requestedBy: 'Emily Chen',
    date: '2024-03-22',
    status: 'Approved',
  },
  {
    title: 'Blockchain Development',
    requestedBy: 'David Wilson',
    date: '2024-03-20',
    status: 'Rejected',
  },
  {
    title: 'Cloud Architecture Best Practices',
    requestedBy: 'Sophia Martinez',
    date: '2024-03-18',
    status: 'Pending',
  },
  {
    title: 'Mobile App Development with Flutter',
    requestedBy: 'James Taylor',
    date: '2024-03-15',
    status: 'Pending',
  },
];

export default function MaterialRequest() {
  return (
    <div className="w-[76%] h-[95vh] ml-10 mt-4 mr-8 p-6 bg-zinc-900 text-white rounded-2xl shadow-lg overflow-y-auto border border-white">
      <h2 className="text-3xl font-bold mb-1">Material Requests</h2>
      <p className="text-zinc-400 mb-6">Manage material requests from users</p>

      <div className="bg-zinc-900 rounded-xl border border-white p-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search requests..."
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg placeholder-zinc-500"
          />
        </div>

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
                  <td className="py-4 px-4">{req.requestedBy}</td>
                  <td className="py-4 px-4">{req.date}</td>
                  <td className="py-4 px-4">
                    <span
                    className={`px-3 py-1 text-sm rounded-full ${statusStyles[req.status]}`}
                    >
                      {req.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right relative group">
  <button className="text-2xl text-zinc-400 hover:text-white">⋯</button>
  <div className="absolute right-0 mt-2 w-28 bg-zinc-800 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-10">
    <button className="block w-full text-left px-4 py-2 text-sm hover:bg-zinc-700 text-green-400 hover:text-green-300">
      Accept
    </button>
    <button className="block w-full text-left px-4 py-2 text-sm hover:bg-zinc-700 text-red-400 hover:text-red-300">
      Reject
    </button>
  </div>
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