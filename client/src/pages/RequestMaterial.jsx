import React from 'react'
import RequestHeader from '../components/RequestHeader'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import SearchApp from '../components/SearchForm'

function RequestMaterial() {
  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <RequestHeader />
        <SearchApp />
      </div>
    </div>
  )
}

export default RequestMaterial