import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HomeContent from '../components/HomeContent'
import ResourceSection from '../components/ResourceSection'

function Dashboard() {
  return (
    <div>
        <div className="flex min-h-screen bg-black">
      {/* <Sidebar /> */}
      <div className="flex-1 flex flex-col">
        {/* <Navbar /> */}
        <HomeContent />
        <ResourceSection />
      </div>
    </div>
    </div>
  )
}

export default Dashboard