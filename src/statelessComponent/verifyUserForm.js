import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NeedHelpTemplate from './NeedHelpTemplate';
import logo from '../assest/logo.svg';
import '../css/forgot_password.css';

const VerifyUserForm = (props) => {
  const[seePassword, setSeePassword] = useState(false);

  const handleSeePassword = () => {
    setSeePassword(!seePassword);
  };

  const resendTokenLink = document.location.pathname === '/handyman/forgot-password/verify-user' ? '/handyman/forgot-password' : '/customer/forgot-password';

  return (
    <div>
      <NeedHelpTemplate />
      <div>
        <img src = {logo} alt = "Relaks Logo" className = "relaks-logo"></img>
      </div>
      <div className = "container">
        <div className = "relaks-forgot-passsword">
          <h3 id = "forgot-password-header">Please Change your password</h3>
          <h6 className="error-message">{props.response.error}</h6>
          <label id = "email-text">Enter the Token sent to Your Email </label>
          <br />
          <input className = "relaks-input" 
            type = "text" 
            name = "token"
            value = {props.token}
            onChange = {props.handleToken}
            required>
          </input>
          <br />
          <p>Didn't get the token ? <Link to = {resendTokenLink}><b>Resend</b></Link></p>
          <label id = "email-text">Enter your New Password</label>
          <br />
            <input type={seePassword? "text": "password"} 
              name="password" 
              className="relaks-input" 
              id="password"
              value={props.newPassword}
              onChange={props.handleNewPassword}
              required>
            </input>
            <br/>
            <label>See your Password</label>
            <input type="checkbox" 
              name="checkbox" 
              className="checkbox" 
              checked={seePassword} 
              onChange={handleSeePassword}>
            </input>
          <br/>
          <button className = "submit-button"
            type = "submit"
            onClick = {props.handleSubmit}>
            <b>{props.response.loading ? "Please Wait....." : "Reset Password"}</b>
          </button>
        </div>
      </div>
  </div>
  );
};

export default VerifyUserForm;
