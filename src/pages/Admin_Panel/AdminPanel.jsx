import React from 'react';
import './adminPanel.css';
import Footer from '../../components/Footer/Footer';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';

export default function AdminPanel() {
  return (
    <div>
      <div className="admin-panel">
        <Text className="admin-title" text="Admin Dashboard" />

        <div className="admin-section">
          <Text className="section-title" text="Manage Users" />
          <Button
            type="submit"
            text="View All Users"
            className="admin-button"
            id="manage-users"
            onClick={""}
          />
        </div>

        <div className="admin-section">
          <Text className="section-title" text="Manage Jobs" />
          <Button
            type="submit"
            text="View Job Listings"
            className="admin-button"
            id="manage-jobs"
             onClick={""}
          />
        </div>

        <div className="admin-section">
          <Text className="section-title" text="System Analytics" />
          <Button
            type="submit"
            text="View Reports"
            className="admin-button"
            id="view-reports"
             onClick={""}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
