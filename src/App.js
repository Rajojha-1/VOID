import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import authService from './services/authService';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Terminal from './Terminal';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import BlogsPage from './pages/BlogsPage';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    authService.logout();
    setUser(null);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Navbar user={user} onLogout={handleLogout} />
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
          <Route 
            path="/login" 
            element={
              user ? <Navigate to="/terminal" /> : 
              <Login onLogin={handleLogin} />
            } 
          />
          
          <Route 
            path="/register" 
            element={
              user ? <Navigate to="/terminal" /> : 
              <Register onRegister={handleLogin} />
            } 
          />
          
          <Route 
            path="/terminal" 
            element={
              user ? <Terminal /> : <Navigate to="/login" />
            } 
          />
          
          <Route 
            path="/blogs" 
            element={<BlogsPage />} 
          />
          
          <Route 
            path="/admin/login" 
            element={
              user && authService.isAdmin() ? <Navigate to="/admin" /> : 
              <AdminLogin onLogin={handleLogin} />
            } 
          />
          
          <Route 
            path="/admin" 
            element={
              user && authService.isAdmin() ? 
              <AdminDashboard onLogout={handleLogout} /> : 
              <Navigate to="/admin/login" />
            } 
          />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
