import React from 'react';

const PrivacySection = () => {
  return (
    <section>
      <h2 className="section-title">Privacy & Security</h2>

      <div className="form-group">
        <label>Change Password</label>
        <input type="password" placeholder="New Password" />
      </div>

      <div className="preference-item">
        <span>Enable 2FA</span>
        <input type="checkbox" />
      </div>

      <button className="btn">Update Privacy</button>
    </section>
  );
};

export default PrivacySection;
