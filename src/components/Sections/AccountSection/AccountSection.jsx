import React from 'react';

const AccountSection = () => {
  return (
    <section>
      <h2 className="section-title">Account Settings</h2>

      <div className="form-group">
        <label>Language</label>
        <select>
          <option>English</option>
          <option>සිංහල</option>
          <option>Tamil</option>
        </select>
      </div>

      <div className="preference-item">
        <span>Dark Mode</span>
        <input type="checkbox" />
      </div>

      <button className="btn">Save Account Settings</button>
    </section>
  );
};

export default AccountSection;
