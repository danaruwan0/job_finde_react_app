import React from 'react';
import './employers.css';

export default function Employers() {
  return (
    <div className="employers-container">
      <h1 className="heading">Welcome Employers</h1>
      <p className="subheading">Post jobs, manage applicants, and find the best candidates</p>

      <div className="card-container">
        <div className="card">
          <h2>Post a Job</h2>
          <p>Reach thousands of qualified candidates by posting your job openings.</p>
          <button className="btn">Create Job Post</button>
        </div>

        <div className="card">
          <h2>Manage Applicants</h2>
          <p>View, filter, and shortlist applications for your posted jobs.</p>
          <button className="btn">View Applications</button>
        </div>

        <div className="card">
          <h2>Company Profile</h2>
          <p>Update your company information and showcase your brand to job seekers.</p>
          <button className="btn">Edit Profile</button>
        </div>
      </div>
    </div>
  );
}
