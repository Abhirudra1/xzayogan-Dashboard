import React, { useState } from 'react'

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
  return (
    <>
    <div
        className={`fixed top-0 left-0 h-full bg-blue-50 p-4 transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '334px' }}>
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 left-full  transform -translate-x-1/2 z-20 p-2  rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
          className={`size-6 ${isSidebarOpen ? 'mr-10' : 'ml-10'}`} style={isSidebarOpen ? {visibility: 'visible'} : {visibility: 'visible', left: '0px'}}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

        </button>

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">XZAYOGN</h1>
        </div>
        
        <div className="mb-4">
          <button className="w-full flex items-center justify-between bg-white p-2 rounded-lg mb-2">
            <span>Upcoming</span>
            <i className="fas fa-lightbulb text-pink-500"></i>
          </button>
          <button className="w-full flex items-center justify-between bg-white p-2 rounded-lg mb-2">
            <span>New Chat</span>
            <i className="fas fa-plus text-gray-500"></i>
          </button>
        </div>

        <div className="mt-[50px] mb-[50px]">
          <button className="w-full flex items-center justify-between bg-blue-500 text-white p-2 rounded-lg">
            <span>My Jobs</span>
            <i className="fas fa-briefcase"></i>
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-sm text-gray-500 font-semibold mb-2">Today</h2>
          <button className="flex items-center w-full p-2 text-left bg-white rounded-lg shadow">
            <span>Career switch advice?...</span>
          </button>
        </div>
        <div>
          <h2 className="text-sm font-semibold mb-2 text-gray-500">Chat history</h2>
          <button className="flex items-center w-full p-2 text-left bg-white rounded-lg shadow mb-2">
            <span>How to improve LinkedIn?...</span>
          </button>
          <button className="flex items-center w-full p-2 text-left bg-white rounded-lg shadow mb-2">
            <span>Common interview Qs?...</span>
          </button>
          <button className="flex items-center w-full p-2 text-left bg-white rounded-lg shadow mb-2">
            <span>High-paying remote jobs?...</span>
          </button>
          <button className="flex items-center w-full p-2 text-left bg-white rounded-lg shadow mb-2">
            <span>Resume optimization?...</span>
          </button>
          <button className="flex items-center w-full p-2 text-left bg-white rounded-lg shadow">
            <span>Career in Digital Marketing?...</span>
          </button>
        </div>
      </div>
    </>
  )
}
