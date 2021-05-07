import React from 'react';
import { useHistory } from 'react-router-dom';
import NeedHelpTemplate from './NeedHelpTemplate';
import { AuthNav, NormalNav } from './Nav';
import Footer from './Footer';
import '../css/pricingplan.css';
import { faUserAlt,
  faCreditCard,
  faHeadset,
  faTools,
  faDollarSign,
  faSearchDollar,
  faBed,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../css/loginForm.css'

const PricingPlan = (props) => {

  const history= useHistory();

  const handleButton = () => {
    history.push('/customer/register');
  };

  const navCondition = props.isAuth ? <AuthNav /> : <NormalNav />

  return (
    <div>
      <div>
        <NeedHelpTemplate />
      </div>
      <div>
        {navCondition}
      </div>
      <div>
        <div id="pricing-page" className="how-its-works">
          <h2>Choose A Plan that best suits You</h2>
        </div>
        <div>
          <p id="pricing-page-text" className="pricing-text">
            Pay Once every year and be covered for your home care and repair needs
          </p>
        </div>
      </div>
      <div className="pricing-card">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className="card" id="card-pricing1">
              <div className="card-body">
                <h3 className="card-title">Relaks Basic</h3>
                <h4 className="card-title">₦30,000/yr</h4>
                <p className="card-text">5 jobs/Mon/Yr</p>
                <p className="card-text">One Electrical Work</p>
                <p className="card-text">One Carpentary Work</p>
                <p className="card-text">Unlimited for other jobs</p>
                <div className="pricing-button">
                  <button className="submit-button" id="pricing-button" onClick={props.isAuth ? props.basic : handleButton}>
                    {props.loading._basic ? <h5><b>Loading...</b></h5> : <h5><b>Buy Basic</b></h5>}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="card" id="card-pricing2">
              <div className="card-body">
                <h3 className="card-title">Relaks Xtra</h3>
                <h4 className="card-title">₦60,000/yr</h4>
                <p className="card-text">10 jobs/Mon/Yr</p>
                <p className="card-text">Five Electrical Work</p>
                <p className="card-text">Five Carpentary Work</p>
                <p className="card-text">Unlimited for other works</p>
                <div className="pricing-button">
                  <button className="submit-button" id="pricing-button" onClick={props.isAuth ? props.xtra : handleButton}>
                    {props.loading._xtra ? <h5><b>Loading...</b></h5> : <h5><b>Buy Xtra</b></h5>}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="card" id="card-pricing3">
              <div className="card-body">
                <h3 className="card-title">Relaks Prime</h3>
                <h4 className="card-title">₦120,000/yr</h4>
                <p className="card-text">25 jobs/Mon/Yr</p>
                <p className="card-text">Ten Electricals Works</p>
                <p className="card-text">Ten Carpentary Work</p>
                <p className="card-text">Unlimited for other jobs</p>
                <div className="pricing-button">
                  <button className="submit-button" id="pricing-button" onClick={props.isAuth ? props.prime : handleButton}>
                    {props.loading._prime ? <h5><b>Loading...</b></h5> : <h5><b>Buy Prime</b></h5>}
                  </button>
                </div>
              </div>
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
              Not Sure which plan is right for you?
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
        <div id="benefits-id" className="benefit-section">
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
                <h4 className="how-its-works-content">Saves Time!! Save Cost!!</h4>
                <p className="how-its-works-text">You pay only once every year for everything for your home repair.</p>
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
                <p className="how-its-works-text">Relaks only send well screened, vetted and professional technicians so that you can feel RELAKS and do what matter to you most</p>
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
        <Footer />
    </div>
  );
};

export default PricingPlan;