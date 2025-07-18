import React, { useState } from 'react';
import './postJob.css';
import Footer from '../../components/Footer/Footer';

export default function PostJob() {
  const [job, setJob] = useState({
    title: '',
    company: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Job Posted Successfully!');
    console.log(job);
  };

  return (
    <div>
        <div className="post-job-form">
      <h2>Post a New Job</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Job Title" onChange={handleChange} required />
        <input type="text" name="company" placeholder="Company Name" onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
        <textarea name="description" placeholder="Job Description" onChange={handleChange} required></textarea>
        <button type="submit">Post Job</button>
      </form>

      
    </div>
    <Footer/>
    </div>

    
  );
}
