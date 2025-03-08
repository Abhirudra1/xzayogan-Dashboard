import { useState } from "react";
import HomePage from "./components/HomePage"
import LoginPage from "./components/LoginPage"
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const handleLoginSuccess = (token, user) => {
        localStorage.setItem('token', token); // Store token in localStorage
        setIsAuthenticated(true);
        setUser(user);
    };

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token on logout
        setIsAuthenticated(false);
        setUser(null);
    };

  return (
    <div className={location.pathname === '/login' ? 'blur-background' : ''}>
      <Router>
            <Routes>
                <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
                <Route
                    path="/"
                    element={
                        isAuthenticated ? (
                            <HomePage user={user} onLogout={handleLogout} />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
            </Routes>
        </Router>
    </div>
  )
}

export default App
