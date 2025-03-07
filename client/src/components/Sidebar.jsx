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
        <div className="mb-10">
          <button className="flex items-center w-full p-2 mb-2 text-left bg-white rounded-lg shadow">
            <span className='flex justify-between w-full'>
                Upcoming
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
            </span>
          </button>

          <button className="flex items-center w-full p-2 text-left bg-white rounded-lg shadow">
            <span className='flex justify-between w-full'>
                New Chat
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </span>
          </button>
        </div>

        <div className="mb-[50px] mt-[50px]">
          <button className="flex items-center w-full p-2 text-left bg-blue-500 text-white rounded-lg shadow">
            <span className='flex justify-between w-full'>
                My Jobs
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>    
            </span>
          </button>
        </div>
        <div className="mb-6">
          <h2 className="text-sm text-gray-500 font-semibold mb-2">Today</h2>
          <button className="flex items-center w-full p-2 text-left bg-white rounded-lg shadow">
            <span>Career switch advice?...</span>
          </button>
        </div>
        <div>
          <h2 className="text-sm font-semibold mb-2">Chat history</h2>
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
