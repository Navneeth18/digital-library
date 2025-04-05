import React from "react";
import {
  LayoutDashboard,
  BookOpen,
  PlusCircle,
  Users,
  FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  
  return (
    <div className="w-1/6 h-screen bg-[#1A1A1A7B] text-white flex flex-col justify-between border-r border-gray-600">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <FileText size={24} />
          <h1 className="text-xl font-bold">Library Admin</h1>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <button onClick={()=>navigate('/')}>
          <SidebarButton 
            active 
            icon={<LayoutDashboard size={18} />} 
            label="Dashboard" 
          />
          </button>
          <button onClick={()=>navigate('/resource')}>
          <SidebarButton 
            icon={<BookOpen size={18} />} 
            label="Resources"
          />
          </button>
          <SidebarButton 
            icon={<PlusCircle size={18} />} 
            label="Add Resource" 
            onClick={() => navigate('/addResource')}
          />
          <SidebarButton 
            icon={<Users size={18} />} 
            label="Material Requests" 
            onClick={() => navigate('/materialRequest')}
          />
        </div>
      </div>

      {/* User Info */}
      <div className="bg-[#141414] px-6 py-4 border-t border-gray-600 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-semibold">
          A
        </div>
        <div>
          <div className="font-semibold">Admin User</div>
          <div className="text-gray-400 text-sm">admin@library.com</div>
        </div>
      </div>
    </div>
  );
};

const SidebarButton = ({ icon, label, active, onClick }) => (
  <div
    className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${
      active ? "bg-gray-800" : "hover:bg-gray-800"
    }`}
    onClick={onClick}
  >
    {icon}
    <span className="text-sm">{label}</span>
  </div>
);

export default Sidebar;