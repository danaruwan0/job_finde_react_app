import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Logo />
      </div>

      <div className='pages-container'>
        <Link to="/home">Home</Link>
        <Link to="/employers">Employers</Link>
        <Link to="/job_search">Job Search</Link>
        <Link to="/my_job_page">My Job Page</Link>
        <Link to="/my_profile">My Profile</Link>
        
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} ref={menuRef}>
        <Link to="/home" onClick={() => setMenuOpen(false)}><HomeIcon />Home</Link>
        <Link to="/employers" onClick={() => setMenuOpen(false)}><BusinessCenterIcon />Employers</Link>
        <Link to="/job_search" onClick={() => setMenuOpen(false)}><SearchIcon />Job Search</Link>
        <Link to="/my_job_page" onClick={() => setMenuOpen(false)}><WorkIcon />My Job Page</Link>
        <Link to="/my_profile" onClick={() => setMenuOpen(false)}><PersonIcon />My Profile</Link>
        
        <Link to="/login" onClick={() => setMenuOpen(false)}><PersonIcon />Login</Link>
        <Link to="/register" onClick={() => setMenuOpen(false)}><PersonIcon />Register</Link>
        
      </div>
    </div>
  );
}
