import React, { useState } from 'react';
import ProfileSection from '../Sections/ProfileSection/ProfileSection';
import PreferencesSection from '../Sections/PreferencesSection/PreferencesSection';
import NotificationsSection from '../Sections/NotificationsSection/NotificationsSection';
import PrivacySection from '../Sections/PrivacySection/PrivacySection';
import AlertsSection from '../Sections/AlertsSection/AlertsSection';
import AccountSection from '../Sections/AccountSection/AccountSection';
import './workwiseSettings.css';

// 🟠 MUI Icons
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

const WorkwiseSettings = () => {
  const [activeSection, setActiveSection] = useState('profile');

  const sections = {
    profile: <ProfileSection />,
    preferences: <PreferencesSection />,
    notifications: <NotificationsSection />,
    privacy: <PrivacySection />,
    alerts: <AlertsSection />,
    account: <AccountSection />,
  };

  const getIcon = (section) => {
    const icons = {
      profile: <PersonIcon style={{ marginRight: '8px',  }} />,
      preferences: <SettingsIcon style={{ marginRight: '8px' }} />,
      notifications: <NotificationsIcon style={{ marginRight: '8px' }} />,
      privacy: <LockIcon style={{ marginRight: '8px' }} />,
      alerts: <EmailIcon style={{ marginRight: '8px' }} />,
      account: <HomeIcon style={{ marginRight: '8px' }} />,
    };
    return icons[section];
  };

  const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <div className="container">
      <header className="header">
        <h1>Workwise Settings</h1>
        <p>Customize your Workwise experience</p>
      </header>

      <div className="settings-layout">
        <nav className="sidebar">
          {Object.keys(sections).map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className={`nav-item ${activeSection === key ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection(key);
              }}
            >
              {getIcon(key)} {capitalize(key)} Settings
            </a>
          ))}
        </nav>

        <main className="content">{sections[activeSection]}</main>
      </div>
    </div>
  );
};

export default WorkwiseSettings;
