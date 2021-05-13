import React from 'react';
import Logo from '../assest/logo.svg';
import { Link } from 'react-router-dom';

import {
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div id="footer">
      <div className="row">
        <div className="col-6">
          <h4 className="footer-header">Company</h4>
          <div className="footer-text">
            <ul className="footer-ul">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="customer/pricing">Pricing</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <h4 className="footer-header">Legal</h4>
          <div className="footer-text">
            <ul className="footer-ul">
              <li><Link to='/terms-condition'>Terms of Service</Link></li>
              <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
              <li><Link to='/technician-agreement'>Relaks Technicians Agreement</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{marginTop: '30px'}} className="row">
        <div className="col-6">
          <h4 className="footer-header">Solutions</h4>
          <div className="footer-text">
            <ul className="footer-ul">
              <li><Link to='/customer'>Relaks For Customers</Link></li>
              <li><Link to='/handyman'>Relaks For Technicians</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <h4 className="footer-header">Connect With Us</h4>
          <div className="footer-text">
            <ul className="footer-ul">
              <li><a href="https://www.facebook.com/Relaks-Home-100598445516384/" target="blank"><FontAwesomeIcon icon={faFacebook} style={{
                marginRight: '4px'
              }}/>Facebook</a></li>
              <li><a href="mailto:support@tryrelaks.com"><FontAwesomeIcon icon={faEnvelope} style={{
                marginRight: '4px',
              }}/>support@tryrelaks.com</a></li>
              <li><a href="tel:+2349055681957"><FontAwesomeIcon icon={faPhoneAlt} style={{
                marginRight: '4px'
              }} />+2349085876383</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr style={{
        backgroundColor: 'aqua',
      }}/>
      <div>
        <h6 style={{
          color: 'white',
          marginLeft: '35px',
          marginRight: '35px',
          display: 'flex',
          justifyContent: 'center',
          fontFamily: 'fangsong',
        }}>
          At Relaks We are making it easier for you to keep your home in good shape while doing what matters to you most
        </h6>
      </div>
      <div className="relaks-footer-logo">
        <img src={Logo} alt="Relaks Logo" className="footer-logo" />
      </div>
      <div className="footer-text">
        <p className="footer-text">© Relaks 2021</p>
      </div>
    </div>
  );
};

export default Footer;