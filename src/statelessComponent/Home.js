import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';
import { NormalNav } from './Nav';
import Footer from './Footer';
import NeedHelpTemplate from './NeedHelpTemplate';
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

import '../css/home.css';
import '../css/pricingplan.css';
import '../css/loginForm.css';
import '../css/about.css';
import HomeBackground from '../assest/home_background.jpg';
import Relaks from '../assest/relaxing.svg';
import Family from '../assest/family.svg';
import RelaksCta from './relaks__cta';

const Home = () => {

  mixpanel.init("784360e9005522fb8d2cccd326b57f78");
  mixpanel.track('Page View', {
    Page: 'Home Page',
    url: document.location.href,
  });

  const[loading, setLoading] = useState(false);

  const history = useHistory();

  const customerRoute = () => {
    setLoading(true);
    mixpanel.track('Customer Registration Page', {
      page: 'Home Page',
      url: document.location.href,
    });
    history.push('/customer/register');
  };

  const handymanRoute = () => {
    setLoading(true);
    history.push('/handyman/register');
  };
  return (
    <div>
      <div>
        <NeedHelpTemplate />
      </div>
      <NormalNav />
      <div>
        <div id="setImg">
          <div>
            <img src={HomeBackground} className="hero-img" alt="relaks-home-background" />
          </div>
          <div className="hero-content">
            <h3 className="hero-text" id="hero-text-header">Live A Frustration Free Life!!</h3>
            <p className="hero-text" id="hero-text-text">Get all your home repairs done for one price on Relaks</p>
            <div className="hero-button">
              <button id="home-button" className="submit-button" onClick={customerRoute}>
                <b className="button-text">{loading ? 'Loading...' : 'Get Your Home Fixed'}</b>
              </button>
            </div>
            <div className="hero-or">
              <h3 className="hero-text"><b>OR</b></h3>
            </div>
            <h3 className="hero-text" id="hero-text-header">Join Relaks Technicians</h3>
            <p className="hero-text" id="hero-text-text">Earn Money by helping Homeowners get their home fixed</p>
            <div className="hero-button">
              <button className="submit-button" id="home-button" onClick={handymanRoute}>
                <b className="button-text">Join Relaks Technicians</b>
              </button>
            </div>
          </div>
        </div>
        <div className="row" id="family-bg">
          <div className="col-sm-12 col-md-5">
            <div className="what-is-relaks-div">
              <h2 className="how-its-works">What is Relaks?</h2>
              <h5 className="what-is-relaks">Relaks is a subscription service that provide care and repair for your home.</h5>
              <p>Become a Member and we'll pay to repair and care for your home. From your desktop, tablet, or mobile phone, you’re only one tap away from getting the service you need for your home.</p>
              <div className="member-button">
                <button className="what-is-relaks-button" onClick={customerRoute}><b>Become A Member</b></button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-7">
            <img src={Family} style={{
              width: '100%',
              height: '300px',
              marginTop: '30px',
            }} alt="family" />
          </div>
        </div>
        <div className="benefit-section">
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
        </div>
        <div  id="svg-section" className="row">
          <div className="col-sm-6 col-md-6">
            <div>
              <img src={Relaks} alt="relaxing" className="svg" loading="lazy"/>
            </div>
          </div>
          <div className="col-sm-6 col-md-6" id="svg-content">
            <div className="happiness-div">
              <h4 className="happiness">Happiness Guaranteed</h4>
              <p className="happiness-content">You are in control!! We only pay the technicians when you are satisfied.</p>
              <div className="happiness-button">
                <button className="submit-button" onClick={customerRoute}>
                  <b className="button-text">Get Started with Relaks</b>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{display: 'flex'}}>
        <div className="pricing__plan__note">
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
        <div className="benefit-section">
          <div className="how-its-works">
            <h2>Benefit of Relaks</h2>
          </div>
          <div className="row" id="works-row">
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
        <div className="pricing" id="subcribe-h4">
          <h2>Available in these Cities</h2>
        </div>
        <div className="pricing">
          <p className="pricing-text">We are working to bring Relaks to many cities as possible. But for now we only operate in these cities.</p>
        </div>
        <div className="pricing-card">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-xl-4">
              <div style={{
                background: '#818181',
                overflow: 'hidden',
              }}className="card" id="card-pricing1">
                <div className="card-body" id="portharcourt">
                  <h5 style={{
                    color: 'white'
                  }}className="card-title">Port Harcourt</h5>
                  <p className="card-text">
                    <b></b>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-xl-4">
              <div style={{
                background: '#818181',
                overflow: 'hidden',
              }}className="card" id="card-pricing1">
                <div className="card-body" id="lagos">
                  <h5 className="card-title">Lagos</h5>
                  <p className="card-text">
                    <b></b>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-xl-4">
              <div style={{
                background: '#818181',
                overflow: 'hidden',
              }}className="card" id="card-pricing1">
                <div className="card-body" id="abuja">
                  <h5 className="card-title">Abuja</h5>
                  <p className="card-text">
                    <b></b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RelaksCta />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
