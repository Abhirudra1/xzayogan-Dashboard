import { useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import axios from 'axios';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verify token with the server
      axios.get('http://localhost:5000/api/protected', {
        headers: { Authorization: `Bearer ${token}` }
      }).then(response => {
        setIsAuthenticated(true);
        setUser(response.data.user);
      }).catch(error => {
        console.error('Token verification failed:', error);
        localStorage.removeItem('token');
      });
    }
  }, []);

  const handleLoginSuccess = (token, user) => {
    console.log('Login successful:', token, user); 
    localStorage.setItem('token', token); 
    setIsAuthenticated(true);
    setUser(user);
    console.log("local token"+localStorage.getItem('token'));
    console.log("isAuthenticated:"+isAuthenticated);
    console.log("user:"+user);
  };

  const handleLogout = () => {
    console.log('Logout'); 
    localStorage.removeItem('token'); 
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/home" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <HomePage user={user} onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;