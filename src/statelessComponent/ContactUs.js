import React from 'react';
import Helmet from 'react-helmet';
import Footer from './Footer';
import { NormalNav } from './Nav';
import NeedHelpTemplate from './NeedHelpTemplate';
import '../css/contactus.css';

import {
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RelaksCta from './relaks__cta';

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Relaks</title>
        <meta name="title" content="Contact Relaks | Relaks Home Inc." />
        <meta name="description" content="We Would love to answer any questions you have. Let's get started" />
        <meta name="keywords" content="contact relaks, relaks support, relaks customer support" />
      </Helmet>
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
      <RelaksCta />
      <Footer />
    </div>
  );
};

export default ContactUs;