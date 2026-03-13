import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Justice Point Section */}
        <div className="footer-section">
          <h3>Justice Point</h3>
          <p>Your trusted platform for connecting with the best legal professionals. Book appointments, get legal advice, and resolve your legal matters efficiently.</p>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/services" className="footer-link">Services</Link></li>
            <li><Link to="/attorneys" className="footer-link">Find a Lawyer</Link></li>
            <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="footer-section">
          <h3>Legal</h3>
          <ul className="footer-links">
            <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
            <li><Link to="/cookies" className="footer-link">Cookie Policy</Link></li>
            <li><Link to="/disclaimer" className="footer-link">Disclaimer</Link></li>
            <li><Link to="/ai-advisor" className="footer-link">AI Advisor</Link></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>17th Floor, One ICC, Shanghai ICC, 999 Middle Huai Hai Road, Xuhui District, Shanghai, 200031.</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>+86 21 2412 6000</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span> justicepoint@gmail.com</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-clock"></i>
            <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            © 2026 Justice Point. All Rights Reserved. | Your Justice, Our Responsibility  
          </div>
          {/* <div className="bottom-links">
            <Link to="/sitemap" className="footer-link">Sitemap</Link>
            <Link to="/careers" className="footer-link">Careers</Link>
            <Link to="/blog" className="footer-link">Blog</Link>
            <Link to="/support" className="footer-link">Support</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
