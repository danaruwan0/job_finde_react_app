import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Text from '../Text/Text';







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
        <Link to="/all_jobs">All Jobs</Link>
        <Link to="/my_profile">My Profile</Link>

        <Link to="/uploade_course">Upload Course</Link>
        <Link to="/post_jobs">Post Job</Link>
        <Link to="/admin_panel">Admin Panel</Link>

      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} ref={menuRef}>

        <Text
          text={"Menu List"}
          className={"MenuListText"}
        />

        <Link to="/home" onClick={() => setMenuOpen(false)}><HomeIcon />Home</Link>
        <Link to="/employers" onClick={() => setMenuOpen(false)}><BusinessCenterIcon />Employers</Link>
        <Link to="/all_jobs" onClick={() => setMenuOpen(false)}><SearchIcon />All Jobs</Link>
        <Link to="/my_profile" onClick={() => setMenuOpen(false)}><PersonIcon />My Profile</Link>
        <Link to="/uploade_course" onClick={() => setMenuOpen(false)}><UploadFileIcon />Upload Course</Link>
        <Link to="/post_jobs" onClick={() => setMenuOpen(false)}><PostAddIcon />Post Job</Link>
        <Link to="/admin_panel" onClick={() => setMenuOpen(false)}><AdminPanelSettingsIcon />Admin Panel</Link>

        <div className="auth-buttons">
          <Link to="/login" onClick={() => setMenuOpen(false)}><LoginIcon />Login</Link>
          <Link to="/register" onClick={() => setMenuOpen(false)}><AppRegistrationIcon />Register</Link>
        </div>


      </div>
    </div>
  );
}
