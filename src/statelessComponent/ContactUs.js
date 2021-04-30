import React from 'react';
import Footer from './Footer';
import { NormalNav } from './Nav';
import NeedHelpTemplate from './NeedHelpTemplate';
import '../css/contactus.css';

import {
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactUs = () => {
  return (
    <div>
      <NeedHelpTemplate />
      <NormalNav />
      <div className="contact-us-header">
        <h1><b>CONTACT RELAKS</b></h1>
      </div>
      <div className="row">
        <div className="col-6">
          <div>
            <p className="contact-us-text">Relaks is a home subcription service that pays for your home repair and care needs.</p>
            <p className="contact-us-text">We would love to answer any question you have. Feel Free to contact us!!</p>
            {/* <p className="contact-us-text">Before You lay complain please read our faq, the answer to your question might just be there</p> */}
          </div>
        </div>
        <div className="col-6">
            <p className="contact-us-text">Email: <a href="email:support@tryrelaks.com">support@tryrelaks.com</a></p>
            <p className="contact-us-text">Tel: <a href="tel:+2349055681975">+2349055681975</a></p>
          </div>
      </div>
      {/* <div className="faq">
        <h2 id="faq-header">Frequently Asked Question</h2>
        <div>
          <p>This is our FAQ Section</p>
        </div>
      </div> */}
      <div className="jumbotron" style={{
          backgroundColor: '#009EF7',
          marginBottom: '0',
          marginTop: '5rem'
        }}>
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h1 className="relaks__cta">Live Frustration Free Life with Relaks</h1>
              <div style={{
                marginTop: '20px'
              }} className="member-button">
                <button className="what-is-relaks-button" onClick='' style={{
                  height: '4em',
                  outline: 'none'
                }}><b style={{
                  fontSize: '1.2em'
                }}>Become A Member</b></button>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default ContactUs;