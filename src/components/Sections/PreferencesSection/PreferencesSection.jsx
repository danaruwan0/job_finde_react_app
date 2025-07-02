import React from 'react';

const PreferencesSection = () => {
  return (
    <section>
      <h2 className="section-title">Job Preferences</h2>

      <div className="form-group">
        <label>Desired Job Title</label>
        <input type="text"  placeholder='Frontend Developer' />
      </div>

      <div className="form-group">
        <label>Skills</label>
        <input type="text"  placeholder='React, JavaScript, Tailwind CSS' />
      </div>

      <button className="btn">Save Preferences</button>
    </section>
  );
};

export default PreferencesSection;
