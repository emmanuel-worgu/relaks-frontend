import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NeedHelpTemplate from './NeedHelpTemplate';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assest/logo.svg';
import '../css/registerForm.css';

import {
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const RegisterForm = (props) => {
  const[seePassword, setSeePassword] = useState(false);

  const handleSeePassword = () => {
    setSeePassword(!seePassword);
  };
  
  // Check the pathname of the url and display accordingly
  if (document.location.pathname === '/handyman/register') {
    // This will check if it is the handyman route and add a extra input called primary service
    return (
      <div>
        <NeedHelpTemplate />
        <div>
          <img src={logo} alt="Relaks Logo" className="relaks-logo"></img>
        </div>
        <div className="container">
          <div className="relaks-register">
              <h3 id="register-header">Find Jobs Easily!!!</h3>
              <h6 className="error-message">{props.response.error}</h6>
              <label id="name-text">Full Name</label>
              <br/>
              <input type="text" 
                name="name" 
                className="relaks-input" 
                placeholder="e.g Emmanuel Worgu"
                value={props.nameValue}
                onChange={props.handleName}
                required>
              </input>
              <br/>
              <label>Email Address</label>
              <br/>
              <input type="email" 
                name="email" 
                className="relaks-input" 
                placeholder="e.g emmanuelworgu@gmail.com"
                value={props.emailValue}
                onChange={props.handleEmail}
                required>
              </input>
              <br/>
              <label>Phone Number</label>
              <br/>
              <input type="text"
                name="phone"
                className="relaks-input"
                placeholder="e.g 09055681975"
                value={props.phoneValue}
                onChange={props.handlePhone}
                required
              />
              <br/>
              <label htmlFor="job-category">Your Primary Service</label>
              <br/>
              <select name="job-category" 
                id="job-category" 
                className="relaks-input" 
                value={props.primaryServiceValue}
                onChange={props.handlePrimaryService}>
                  <option value="">Select a Service</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Plumbering">Plumbering</option>
                  <option value="Carpentering">Carpentering</option>
                  <option value="Painting">Painting</option>
              </select>
              <br/>
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
              <br/>
              <button type="submit"
                onClick={props.handleSubmit}
                className="submit-button">
                <b>{props.response.loading ? 
                  <>
                  <div>
                    <FontAwesomeIcon icon={faSpinner} size="1.5x" /> Please Wait...
                  </div>
                  </>
                 : 
                  'Get Started'
                }</b>
              </button>
              <br/>
              <p id="login">Have an account ? <b id="login-text"><Link to = "/handyman/login">Log In</Link></b></p>
            </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <NeedHelpTemplate />
        <div>
          <img src={logo} alt="Relaks Logo" className="relaks-logo"></img>
        </div>
        <div className="container">
          <div className="relaks-register">
              <h3 id="register-header">Create An Account!!!</h3>
              <h6 className="error-message">{props.response.error}</h6>
              <label id="name-text">Full Name</label>
              <br/>
              <input type="text" 
                name="name" 
                className="relaks-input" 
                placeholder="e.g Emmanuel Worgu"
                value={props.nameValue}
                onChange={props.handleName}
                required>
              </input>
              <br/>
              <label>Email Address</label>
              <br/>
              <input type="email" 
                name="email" 
                className="relaks-input" 
                placeholder="e.g emmanuelworgu@gmail.com"
                value={props.emailValue}
                onChange={props.handleEmail}
                required>
              </input>
              <br/>
              <label>Phone Number</label>
              <br/>
              <input type="text"
                name="phone"
                className="relaks-input"
                placeholder="e.g 09055681975"
                value={props.phoneValue}
                onChange={props.handlePhone}
                required
              />
              <br/>
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
              <br/>
              <button type="submit"
                onClick={props.handleSubmit}
                className="submit-button">
                <b>{props.response.loading ?
                  <>
                  <div>
                  <FontAwesomeIcon icon={faSpinner} size="1.5x" /> Creating account...
                  </div>
                  </>
                :
                  'Create Account'
                }</b>
              </button>
              <br/>
              <p id="login">Have an account ? <b id="login-text"><Link to = "/customer/login">Log In</Link></b></p>
            </div>
        </div>
      </div>
    );
  };
};

export default RegisterForm;