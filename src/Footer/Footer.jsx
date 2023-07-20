import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>About Flipkart and its history.</p>
          </div>
          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul>
              <li>Help & FAQs</li>
              <li>Contact Us</li>
              <li>Return Policy</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Download App</h3>
            <p>Get the Flipkart app for a better shopping experience!</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Flipkart. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
