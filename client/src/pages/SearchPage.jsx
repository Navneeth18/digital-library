import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import SearchHeader from '../components/SearchHeader'
import AdvancedSearch from '../components/AdvancedSearch'

function SearchPage() {
  return (
    <div>
        <div className="flex min-h-screen bg-black">
        <Sidebar />
        <div className="flex-1 flex flex-col">
            <Navbar />
            <SearchHeader />
            <AdvancedSearch />
        </div>
    </div>
    </div>
  )
}

export default SearchPage