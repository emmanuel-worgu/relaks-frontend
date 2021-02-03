import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MiniFooter from './MiniFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assest/logo.svg';
import '../css/registerForm.css';
// import loginImg from '../assest/login.svg';


const Job = (props) => {
  return (
    <div>
      <div>
        <img src={logo} alt="Relaks Logo" className="relaks-logo"></img>
      </div>
      <div className="container">
        <div className="relaks-register">
            <h3 id="register-header">How Can We Help You</h3>
            <label id="name-text">What do you want to fix</label>
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
            <label>What Categroy best fit your job</label>
            <br/>
            <input type="select"
              autoComplete="off"
              name="email" 
              className="relaks-input" 
              // placeholder="e.g emmanuelworgu@gmail.com"
              value={props.emailValue}
              onChange={props.handleEmail}
              required>
            </input>
            <br/>
            <label>When Should We Come</label>
            <br/>
            <input type="date" 
              name="email" 
              className="relaks-input" 
              // placeholder="e.g emmanuelworgu@gmail.com"
              value={props.emailValue}
              onChange={props.handleEmail}
              required>
            </input>
            <br/>
            <label>At What Time</label>
            <br/>
            <input type="time" 
              name="email" 
              className="relaks-input" 
              // placeholder="e.g emmanuelworgu@gmail.com"
              value={props.emailValue}
              onChange={props.handleEmail}
              required>
            </input>
            <br/>
            <label htmlFor="job-description">Please we need more info about your work</label>
            <br/>
            <textarea
              id="job-description"
              autoComplete="off"
              name="phone"
              rows="4"
              cols="35"
              className="relaks-textarea"
              placeholder="I need a Ladder"
              value={props.phoneValue}
              onChange={props.handlePhone}
              required>
            </textarea>
            <br/>
            <button type="submit"
              onClick={props.handleSubmit}
              className="submit-button">
              <b>Next</b>
            </button>
          </div>
      </div>
    </div>
  );
};

export default Job;