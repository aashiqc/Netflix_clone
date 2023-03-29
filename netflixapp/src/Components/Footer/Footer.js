import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-links">
      <a href="#" className="footer-link">FAQ</a>
      <a href="#" className="footer-link">Help Center</a>
      <a href="#" className="footer-link">Account</a>
      <br></br>
      <a href="#" className="footer-link">Media Center</a>
      <a href="#" className="footer-link">Investor Relations</a>
      <a href="#" className="footer-link">Jobs</a>
      <br></br>
      <a href="#" className="footer-link">Redeem Gift Cards</a>
      <a href="#" className="footer-link">Buy Gift Cards</a>
      <a href="#" className="footer-link">Ways to Watch</a>
      <br></br>
      <a href="#" className="footer-link">Terms of Use</a>
      <a href="#" className="footer-link">Privacy</a>
      <a href="#" className="footer-link">Cookie Preferences</a>
      <br></br>
      <a href="#" className="footer-link">Corporate Information</a>
      <a href="#" className="footer-link">Contact Us</a>
    </div>
    <p className="footer-text">Netflix &copy; {new Date().getFullYear()}</p>
  </footer>
  );
  
}

export default Footer
