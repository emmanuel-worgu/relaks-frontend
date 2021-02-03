import React from 'react';
import logo from '../assest/logo.svg';
import '../css/forgot_password.css';

const ForgotPasswordForm = (props) => {
  return (
    <div>
      <div>
        <img src = {logo} alt = "Relaks Logo" className = "relaks-logo"></img>
      </div>
      <div className = "container">
        <div className = "relaks-forgot-passsword">
          <h3 id = "forgot-password-header">Sorry to hear you forgot your passsword</h3>
          <br/>
          <p>Please enter your email and we will send a One Time Password which will expire in ten minutes</p>
          <label id = "email-text">Email Address</label>
          <br />
          <input className = "relaks-input" 
            type = "email" 
            name = "email"
            value = {props.value}
            onChange = {props.handleValue}
            required>
          </input>
          <br />
          <button className = "submit-button"
            type = "submit"
            onClick = {props.handleSubmit}>
            <b>{props.response.loading ? "Please Wait......" : "Send OTP"}</b>
          </button>
        </div>
      </div>
  </div>
  );
};

export default ForgotPasswordForm;
