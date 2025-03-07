<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Chat Interface</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    const { useState } = React;

    function App() {
      return (
        <div className="flex h-screen">
          {/* Sidebar */}
          <div className="w-64 bg-blue-50 p-4">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold">XZAYOGN</h1>
              <i className="fas fa-bars text-xl"></i>
            </div>
            <div className="mb-4">
              <button className="flex items-center w-full p-2 mb-2 text-left bg-white rounded-lg shadow">
                <i className="fas fa-lightbulb text-pink-500 mr-2"></i>
                <span>Upcoming</span>
              </button>
              <button className="flex items-center w-full p-2 text-left bg-white rounded-lg shadow">
                <i className="fas fa-plus text-gray-500 mr-2"></i>
                <span>New Chat</span>
              </button>
            </div>
            <div className="mb-4">
              <button className="flex items-center w-full p-2 text-left bg-blue-500 text-white rounded-lg shadow">
                <i className="fas fa-briefcase mr-2"></i>
                <span>My Jobs</span>
              </button>
            </div>
            <div className="mb-4">
              <h2 className="text-sm font-semibold mb-2">Today</h2>
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
          {/* Main Content */}
          <div className="flex-1 flex flex-col items-center justify-center p-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-2xl mr-4">X</div>
              <h1 className="text-2xl font-bold">hey i am xzayogn</h1>
            </div>
            <div className="w-full max-w-2xl mb-8">
              <div className="flex items-center border border-gray-300 rounded-full p-2 shadow">
                <input className="flex-1 px-4 py-2 outline-none" placeholder="Message xzayogn" type="text" />
                <button className="p-2">
                  <i className="fas fa-paper-plane text-gray-500"></i>
                </button>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-full shadow">
                <i className="fas fa-gamepad text-red-500 mr-2"></i>
                <span>Game designer jobs in India?</span>
              </button>
              <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-full shadow">
                <i className="fas fa-plane text-green-500 mr-2"></i>
                <span>Visa-sponsored jobs in UK?</span>
              </button>
              <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-full shadow">
                <i className="fas fa-laptop-code text-blue-500 mr-2"></i>
                <span>Best SDE jobs in Mumbai?</span>
              </button>
            </div>
          </div>
          {/* Profile Picture */}
          <div className="absolute top-4 right-4">
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
    }

    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
  <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</body>
</html>