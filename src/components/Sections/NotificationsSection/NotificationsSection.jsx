import React from 'react';

const NotificationsSection = () => {
  return (
    <section>
      <h2 className="section-title">Notification Settings</h2>

      <div className="preference-item">
        <span>Email Notifications</span>
        <input type="checkbox" defaultChecked />
      </div>

      <div className="preference-item">
        <span>Push Notifications</span>
        <input type="checkbox" />
      </div>

      <button className="btn">Save Notification Settings</button>
    </section>
  );
};

export default NotificationsSection;
