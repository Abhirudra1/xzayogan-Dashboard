import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { DarkModeSwitch } from 'react-toggle-dark-mode';


const HomePage = () => {

    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = (checked) => {
      setDarkMode(checked);
    };

  return (
    <div className={`flex h-screen relative ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {/* Sidebar */}
      <Sidebar />
      

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-2xl mr-4">X</div>
          <h1 className="text-2xl font-bold">hey i am xzayogn</h1>
        </div>
        <div className="w-full max-w-2xl mb-8">
          <div className="flex items-center border border-gray-300 border rounded-[15px]  shadow">
            <input className="flex-1 px-4 py-2 outline-none" placeholder="Message xzayogn" type="text" />
            <button className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10  text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-full shadow">
            <span className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                Game designer jobs in India?
            </span>
          </button>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-full shadow">
            <span className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
                Visa-sponsored jobs in UK?
            </span>
          </button>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-full shadow">
            <span className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                </svg>
                Best SDE jobs in Mumbai?
            </span>
          </button>
        </div>
      </div>

      {/* Profile Picture and Dark Mode Toggle */}
      <div className="absolute top-4 right-4 flex items-center space-x-4">
      <DarkModeSwitch
        style={{ marginBottom: '' }}
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={40}
        />
        <img
          src="https://storage.googleapis.com/a1aa/image/t66-YXQzhLkxIrcpjLgymzDx1YbYwIqm_WVG9-aro04.jpg"
          alt="Profile picture of a person"
          className="w-10 h-10 rounded-full"
          width="40"
          height="40"
        />
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-gray-500">
        <span>FAQ</span> | <span>Privacy Policy</span> | <span>Terms of Service</span> | <span>Contact Us</span>
      </footer>
    </div>
  );
};

export default HomePage;