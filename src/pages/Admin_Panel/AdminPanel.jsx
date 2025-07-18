import React from 'react';
import './adminPanel.css';
import Footer from '../../components/Footer/Footer';

export default function AdminPanel() {
    return (
        <div>
            <div className="admin-panel">
                <h2>Admin Dashboard</h2>

                <div className="admin-section">
                    <h3>Manage Users</h3>
                    <button className="btn">View All Users</button>
                </div>

                <div className="admin-section">
                    <h3>Manage Jobs</h3>
                    <button className="btn">View Job Listings</button>
                </div>

                <div className="admin-section">
                    <h3>System Analytics</h3>
                    <button className="btn">View Reports</button>
                </div>


            </div>
            <Footer />
        </div>

    );
}
