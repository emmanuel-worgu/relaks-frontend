import React from 'react';
import Footer from './Footer';
import { NormalNav } from './Nav';
import NeedHelpTemplate from './NeedHelpTemplate';
import '../css/contactus.css';

const ContactUs = () => {
  return (
    <div>
      <NeedHelpTemplate />
      <NormalNav />
      <div className="contact-us-header">
        <h2><b>CONTACT RELAKS</b></h2>
      </div>
      <div className="row">
        <div className="col-6">
          <div>
            <p className="contact-us-text">At Relaks We are helping people lift the burden of getting their home in good shape.</p>
            <p className="contact-us-text">We would love to help you answer any question you have.</p>
            <p className="contact-us-text">Before You lay complain please read our faq, the answer to your question might just be there</p>
          </div>
        </div>
        <div className="col-6">
            <p className="contact-us-text">Email: support@relaks.com</p>
            <p className="contact-us-text">Tel: +2349055681975</p>
          </div>
      </div>
      <div className="faq">
        <h2 id="faq-header">Frequently Asked Question</h2>
        <div>
          <p>This is our FAQ Section</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;