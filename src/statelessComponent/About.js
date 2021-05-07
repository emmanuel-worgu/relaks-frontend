import React from 'react';
import Footer from './Footer';
import { NormalNav } from './Nav';
import NeedHelpTemplate from './NeedHelpTemplate';
import '../css/about.css';

import { faUserAlt,
  faCreditCard,
  faHeadset,
  faTools,
  faSearchDollar,
  faDollarSign,
  faLock,
  faBed,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RelaksCta from './relaks__cta';

const About = () => {
  return (
    <div>
      <NeedHelpTemplate />
      <NormalNav />
      <div className="contact-us-header">
        <h1><b>ABOUT RELAKS</b></h1>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '3em',
        marginRight: '3em',
      }}>
        Relaks is a home subcription service that provide care and repair for your home. We'll pay for your home repair and care needs when next it occurs.
        <br/>
        Relaks was founded in 2021 to help people live a more easier lives. It is easier to take care of our home with Relaks. Just Create an account, Subscribe to any of our plan and Relaks, let's do the hard work.
      </div>
      <div style={{display: 'flex'}}>
        <div className="pricing__plan__note" style={{
          marginTop: '5em',
          marginBottom: '0',
        }}>
          <div style={{
            marginRight: '8px'
          }}className="pricing__plan__call__relaks">
            <FontAwesomeIcon icon={faHeadset} size="3x" />
          </div>
          <div>
            <div>
              Want to Talk to a real human?
            </div>
            <div>
              Give Us A Call at
              <a href="tel:+2349055681975"> (+234)9055681975</a>
            </div>
          </div>
        </div>
      </div>
      <div className="how-its-works">
          <h2>How Relaks Works</h2>
      </div>
      <div className="pricing">
          <p id="pricing-para">Relaks makes it easy for you to take care of your home. Get Started with Relaks with just three easy steps!!</p>
        </div>
        <div className="row" id="works-row">
          <div className="col-sm-12 col-md-4 col-xl-4" id="works-card">
            <div className="how-its-works-items">
              <div className="how-its-works-icon">
                <FontAwesomeIcon icon={faUserAlt} size="4x" style={{
                  color: '#009EF7',
                }}/>
              </div>
              <h4 className="how-its-works-content">Create An Account</h4>
              <p className="how-its-works-text">Register with us by just filling your name, email, phone number and password. That is it!!</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-xl-4" id="works-card">
            <div className="how-its-works-items">
              <div className="how-its-works-icon">
                <FontAwesomeIcon icon={faCreditCard} size="4x" style={{
                  color: '#F9F871',
                }}/>
              </div>
              <h4 className="how-its-works-content" id="subcribe-h4">Subscribe to any of our Plan</h4>
              <p className="how-its-works-text">Save cost by paying for our plan and never worry about your home repair needs</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-xl-4" id="works-card">
            <div className="how-its-works-items">
              <div className="how-its-works-icon">
                <FontAwesomeIcon icon={faTools} size="4x" style={{
                  color: '#8C5000',
                }}/>
              </div>
              <h4 className="how-its-works-content">Get your home fixed</h4>
              <p className="how-its-works-text">Get your home fixed whenever it happens. You don't have to worry about getting good artisan or the cost of getting it done.</p>
            </div>
          </div>
        </div>
        <div className="benefit-section">
          <div className="how-its-works">
            <h2>Benefit of Relaks</h2>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-xl-3" id="works-card">
              <div className="how-its-works-items">
                <div className="how-its-works-icon">
                  <FontAwesomeIcon icon={faDollarSign} size="4x" style={{
                    color: '#394855',
                  }}/>
                </div>
                <h4 className="how-its-works-content" id="subcribe-h4">Saves Time!! Saves Cost!!</h4>
                <p className="how-its-works-text">Avoid unneccessary wastage of time and cost. Get covered with Relaks and fix your home with just a click of a buuton.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3" id="works-card">
              <div className="how-its-works-items">
              <div className="how-its-works-icon">
                  <FontAwesomeIcon icon={faBed} size="4x" style={{
                    color: '#00A0FF',
                  }}/>
                </div>
                <h4 className="how-its-works-content">No Worry!! No Stress!!</h4>
                <p className="how-its-works-text">Relaks only send well screened, vetted and professional technicians so that you can feel RELAKS and do what matters to you most</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3" id="works-card">
              <div className="how-its-works-items">
                <div className="how-its-works-icon">
                  <FontAwesomeIcon icon={faSearchDollar} size="4x" style={{
                    color: '#C88200',
                  }}/>
                </div>
                <h4 className="how-its-works-content">Transparent Pricing</h4>
                <p className="how-its-works-text">What you see is what you pay!! No strings attached</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3" id="works-card">
              <div className="how-its-works-items">
                <div className="how-its-works-icon">
                  <FontAwesomeIcon icon={faLock} size="4x" style={{
                    color: '#008A5B',
                  }}/>
                </div>
                <h4 className="how-its-works-content">Secured Payment</h4>
                <p className="how-its-works-text">Relaks uses industry standard payment security to make to sure your payment are secured</p>
              </div>
            </div>
          </div>
        </div>
        <RelaksCta />
      <Footer style={{
        marginTop: '0'
      }}/>
    </div>
  );
}

export default About;