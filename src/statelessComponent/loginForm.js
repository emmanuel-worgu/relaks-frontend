import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NeedHelpTemplate from './NeedHelpTemplate';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assest/logo.svg';
import '../css/loginForm.css';
// import loginImg from '../assest/login.svg';


const LoginForm = (props) => {
  const[seePassword, setSeePassword] = useState(false);

  const handleSeePassword = () => {
    setSeePassword(!seePassword);
  };
  
  const loginHeader = document.location.pathname === '/handyman/login' ? 'Jobs Available. Login to Accept!!' : 'Welcome Back!! Please Login to see your Dashboard';
  const forgotPassword = document.location.pathname === '/handyman/login' ? '/handyman/forgot-password' : '/customer/forgot-password';
  const signupLink = document.location.pathname === '/handyman/login' ? '/handyman/register' : '/customer/register';

  const loginField = document.getElementById('loginField');

  const loginFieldLogic = loginField === '0' ? props.phoneValue : props.emailValue;

  return (
    <div>
      <NeedHelpTemplate />
      <div>
        <img src={logo} alt="Relaks Logo" className="relaks-logo"></img>
      </div>
      <div className="container">
          <div className="relaks-login">
            <h3 id="login-header">{ loginHeader }</h3>
            <h6 className="error-message">{props.response.error}</h6>
            <label id="email-text">Email Address or Phone Number</label>
            <input type="email" 
              name="email"
              id="loginField"
              value={loginFieldLogic}
              onChange={props.handleEmail} 
              className="relaks-input" 
              required>
            </input>
            <br></br>
            <label>Password</label><br></br>
            <input type={seePassword? "text": "password"} 
              name="password" 
              className="relaks-input" 
              id="password"
              value={props.passwordValue}
              onChange={props.handlePassword}
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
            <br></br>
            <h6 id="forgot-password"><em><Link to = {forgotPassword}>Forgot Your Password?</Link></em></h6>
            <br></br>
            <button type="submit"
              className="submit-button"
              onClick={props.handleSubmit}>
                <b>{props.response.loading ? 'Please Wait...' : 'Login to your dashboard'}</b>
            </button>
            <br/>
            <p id="signup">New to Relaks ? <b id="signup-text"><Link to = {signupLink}>Sign Up</Link></b></p>
          </div>
        </div>
    </div>
  );
};

export default LoginForm;