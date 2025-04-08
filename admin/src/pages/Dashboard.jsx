import React from "react";
import {
  BookOpen,
  Users,
  Clock,
  FileText,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="w-3/4 p-6 bg-black text-white min-h-screen space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p className="text-gray-400 mt-1">Overview of your digital library management system.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard icon={<BookOpen size={20} />} title="Total Resources" value="245" sub="+12 from last month" />
        <StatCard icon={<Users size={20} />} title="Active Users" value="1,203" sub="+8% from last month" />
        <StatCard icon={<Clock size={20} />} title="Pending Requests" value="18" sub="Requires your attention" />
        <StatCard icon={<FileText size={20} />} title="Resource Categories" value="12" sub="Across all collections" />
      </div>

      {/* Lower Section */}
      <div className="grid grid-cols-2 gap-6">
        <RecentActivity />
        <PopularResources />
      </div>
    </div>
  );
};

// Components

const StatCard = ({ icon, title, value, sub }) => (
  <div className="bg-black p-4 rounded-lg border border-gray-700">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-sm text-gray-300">{title}</h3>
      {icon}
    </div>
    <div className="text-2xl font-semibold">{value}</div>
    <div className="text-xs text-gray-400 mt-1">{sub}</div>
  </div>
);

const RecentActivity = () => (
  <div className="bg-black p-4 rounded-lg border border-gray-700">
    <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
    <p className="text-sm text-gray-400 mb-4">Latest actions in your digital library</p>
    <ul className="space-y-3 text-sm">
      <ActivityItem title="New resource added" subtitle="Introduction to Machine Learning" time="2 hours ago" />
      <ActivityItem title="Resource updated" subtitle="Advanced JavaScript Techniques" time="5 hours ago" />
      <ActivityItem title="Request approved" subtitle="Quantum Computing Basics" time="Yesterday" />
      <ActivityItem title="Resource deleted" subtitle="Outdated Programming Guide" time="2 days ago" />
      <ActivityItem title="New request received" subtitle="Blockchain Development" time="3 days ago" />
    </ul>
  </div>
);

const ActivityItem = ({ title, subtitle, time }) => (
  <li className="flex justify-between items-start">
    <div>
      <div className="font-medium">{title}</div>
      <div className="text-gray-400 text-xs">{subtitle}</div>
    </div>
    <div className="text-gray-400 text-xs">{time}</div>
  </li>
);

const PopularResources = () => (
  <div className="bg-black p-4 rounded-lg border border-gray-700">
    <h3 className="text-lg font-semibold mb-2">Popular Resources</h3>
    <p className="text-sm text-gray-400 mb-4">Most accessed resources this month</p>
    <ol className="space-y-3 text-sm list-decimal list-inside">
      <PopularItem title="Data Structures and Algorithms" category="Computer Science" views="1,245" />
      <PopularItem title="Modern Web Development" category="Programming" views="982" />
      <PopularItem title="Artificial Intelligence Fundamentals" category="Technology" views="876" />
      <PopularItem title="Database Management Systems" category="Computer Science" views="754" />
      <PopularItem title="Cloud Computing Essentials" category="Technology" views="621" />
    </ol>
  </div>
);

const PopularItem = ({ title, category, views }) => (
  <li className="flex justify-between">
    <div>
      <div className="font-medium">{title}</div>
      <div className="text-gray-400 text-xs">{category}</div>
    </div>
    <div className="text-gray-400 text-xs">{views} views</div>
  </li>
);

export default Dashboard;