import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home/Home';
import Employers from '../pages/Employers/Employers';
import JobSearch from '../pages/Job_search/JobSearch';
import MyJobpage from '../pages/My_Jobpage/MyJobpage';
import MyProfile from '../pages/My_profile/MyProfile';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

function AppContent() {
  const location = useLocation();

  // Check if current route is login or register
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div>
      {/* Optional background animation */}
      {/* <BubbleCanvas /> */}

      {/* Show Navbar only if not on login or register page */}
      {!isAuthPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/job_search" element={<JobSearch />} />
        <Route path="/my_job_page" element={<MyJobpage />} />
        <Route path="/my_profile" element={<MyProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
