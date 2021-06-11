import React from 'react';
import Helmet from 'react-helmet';
import { useHistory } from 'react-router-dom';
import MiniFooter from './MiniFooter';
import SuperImg from '../assest/superhero.svg';
import '../css/handymanIsVerify.css';

const HandymanIsVerified = () => {

  const history = useHistory();

  const verifyme = () => {
    history.push('/handyman/pay');
  }
  return (
    <div>
      <Helmet>
        <title>Verify Your Identity</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div>
        <div className="need-help">
          <p className="need-help-para">Need Help? Call 09055681975</p>
        </div>
      </div>
      {/* <Nav /> */}
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <img src={SuperImg} alt="relaks-verify-handyman" className="verify-image"></img>
            </div>
            <div className="col-sm-12 col-md-4">
              <h4>One More Step to Start Earning!!</h4>
              <p>Oopps!! You have not been Verify. Don't worry just click on the button below. You will be charged ₦500. This money will be used to verify your identity nothing more</p>
              <div>
                <button className="submit-button" onClick={verifyme}>Verify Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MiniFooter />
    </div>
  );
};

export default HandymanIsVerified;