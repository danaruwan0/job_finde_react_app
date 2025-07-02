import React from 'react';

const AlertsSection = () => {
  return (
    <section>
      <h2 className="section-title">Job Alerts</h2>

      <div className="form-group">
        <label>Alert Keywords</label>
        <input type="text"  placeholder='React, JavaScript' />
      </div>

      <button className="btn">Create Alert</button>
    </section>
  );
};

export default AlertsSection;
