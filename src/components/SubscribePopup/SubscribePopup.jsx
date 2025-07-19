import React, { useState } from 'react';
import './subscribePopup.css';
import Swal from 'sweetalert2';


export default function SubscribePopup({ onClose }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleConfirm = () => {
  if (!emailRegex.test(email)) {
    setError('Please enter a valid email address');
  } else {
    setError('');
    Swal.fire({
      icon: 'success',
      title: 'Subscribed!',
      text: `Successfully subscribed with ${email}`,
      confirmButtonColor: '#8F3E97'
    }).then(() => {
      onClose(); // Close after OK clicked
    });
  }
};

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <h3 className="topic">Subscribe to Job Alerts</h3>
        <p className="topic-p">
          Stay updated with the latest job posts directly in your inbox.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

       
        {error && <p className="regex-log">{error}</p>}

        <button className="confirm-btn" onClick={handleConfirm}>
          Confirm
        </button>
        <button onClick={onClose} className="cancel-btn">
          Cancel
        </button>
      </div>
    </div>
  );
}
