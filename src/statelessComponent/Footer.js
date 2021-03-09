import React from 'react';
import Logo from '../assest/logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id="footer">
      <div className="row">
        <div className="col-6">
          <h4 className="footer-header">Company</h4>
          <div className="footer-text">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li>About</li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="customer/pricing">Pricing</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <h4 className="footer-header">Legal</h4>
          <div className="footer-text">
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Relaks Technicians Agreement</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relaks-footer-logo">
        <img src={Logo} alt="Relaks Logo" className="footer-logo" />
      </div>
      <div className="footer-text">
        <p className="footer-text">Relaks 2021</p>
      </div>
    </div>
  );
};

export default Footer;