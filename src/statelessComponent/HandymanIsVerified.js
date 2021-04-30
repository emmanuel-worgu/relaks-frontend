import React from 'react';
import SuperImg from '../assest/superhero.svg';
import '../css/handymanIsVerify.css';

const HandymanIsVerified = () => {
  return (
    <div>
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
              <p>Oopps!! You have not been Verify. Don't worry just fill in the form below and wait for up to 30mins</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandymanIsVerified;