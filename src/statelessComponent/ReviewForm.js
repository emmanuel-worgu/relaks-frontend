import React from 'react';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assest/logo.svg';
import '../css/registerForm.css';
import NeedHelpTemplate from './NeedHelpTemplate';
import Nav from './Nav';
// import loginImg from '../assest/login.svg';


const ReviewForm = (props) => {
  return (
    <div>
      <NeedHelpTemplate />
      <Nav />
      <div>
        <img src={logo} alt="Relaks Logo" className="relaks-logo"></img>
      </div>
      <div className="container">
        <div className="relaks-register">
            <h3 id="register-header">Give Feedback on Your Job</h3>
            <h6 className="error-message">{props.responseMessage}</h6>
            <label htmlFor="job-description">How was your service</label>
            <br/>
            <textarea
              id="job-description"
              autoComplete="off"
              name="phone"
              rows="4"
              cols="35"
              className="relaks-textarea"
              placeholder="I need a Ladder"
              value={props.reviewMessage}
              onChange={props.handleReviewMessage}
              required>
            </textarea>
            <br/>
            <button type="submit"
              onClick={props.handleButton}
              className="submit-button">
              <b>{props.loading ? 'Submitting...' : 'Submit'}</b>
            </button>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReviewForm;