import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'


function RootLayout() {
    return (
        <div>
            <Navbar />
            <div className="flex min-h-screen bg-black">
                <Sidebar />

                <div className="" style={{ width: "100%" }}>
                    <Outlet />
                    {/* <Dashboard /> */}
                </div>



            </div>
        </div>
    )
}

export default RootLayout