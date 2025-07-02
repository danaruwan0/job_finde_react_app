import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>We connect talented professionals with top companies across Sri Lanka. Find your next career opportunity or hire the best talent with us.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: dananjayaruwan0@gmail.com</p>
            <p>Phone: +94 770 280 529</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 workWise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
