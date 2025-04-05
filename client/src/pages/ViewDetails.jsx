
import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ResourceCardd from '../components/ResourceCardd'

function ViewDetails() {
  return (
    <div className="flex min-h-screen bg-black">
      {/* <Sidebar /> */}
      <div className="flex-1 flex flex-col">
        {/* <Navbar /> */}
        <ResourceCardd />
      </div>
    </div>
  )
}

export default ViewDetails