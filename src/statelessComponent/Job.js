import React from 'react';
import MiniFooter from './MiniFooter';
import NeedHelpTemplate from './NeedHelpTemplate';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/registerForm.css';
// import loginImg from '../assest/login.svg';


const Job = (props) => {
  return (
    <div>
      <NeedHelpTemplate />
      {/* <div>
        <img src={logo} alt="Relaks Logo" className="relaks-logo"></img>
      </div> */}
      <div style={{
        marginLeft: '15px',
        marginRight: '15px',
        marginTop: '40px',
      }}>
        <div className="relaks-register">
            <h3 id="register-header"><b>How Can We Help You</b></h3>
            <h6 className="error-message">{props.response.error}</h6>
            <label>What do you want to fix</label>
            <br/>
            <input type="text" 
              name="work"
              autoComplete="off" 
              className="relaks-input" 
              placeholder="e.g. Fix my light switch"
              value={props.work}
              onChange={props.handleWork}
              required>
            </input>
            <br/>
            <label htmlFor="job-category">What Categroy best fit your job</label>
            <br/>
            <select name="job-category" 
              id="job-category" 
              className="relaks-input"
              value={props.serviceCategory.value}
              onChange={props.handleServiceCategory}>
                <option value="">Choose a category</option>
                <option value="Electrical">Electrical</option>
                <option value="Plumbering">Plumbering</option>
                <option value="Carpentering">Carpentering</option>
                <option value="Painting">Painting</option>
            </select>
            <br/>
            <label>When Should We Come</label>
            <br/>
            <input type="date" 
              name="date" 
              className="relaks-input" 
              value={props.dateToCome}
              onChange={props.handleDateToCome}
              required>
            </input>
            <br/>
            <label>At What Time</label>
            <br/>
            <input type="time" 
              name="time" 
              className="relaks-input"
              value={props.timeToCome}
              onChange={props.handleTimeToCome}
              required>
            </input>
            <br/>
            <label htmlFor="job-description">Please we need more info about your work</label>
            <br/>
            <textarea
              id="job-description"
              autoComplete="off"
              name="job-description"
              rows="4"
              cols="35"
              className="relaks-textarea"
              placeholder="I need a Ladder"
              value={props.workInfo}
              onChange={props.handleWorkInfo}
              required>
            </textarea>
            <br/>
            <hr></hr>
            <h3 id="register-header">Address</h3>
            <p>Please Provide Us with correct address details.</p>
            <label id="name-text">Address</label>
            <br/>
            <input type="text" 
              name="address" 
              className="relaks-input" 
              placeholder="e.g No. 9 malik street elelenwo"
              value={props.homeAddress}
              onChange={props.handleHomeAddress}
              required>
            </input>
            <br/>
            <label>Nearest Bus Stop</label>
            <br/>
            <input type="text" 
              name="bus-stop" 
              className="relaks-input" 
              placeholder="e.g Oil Mill Bus Stop"
              value={props.busStop}
              onChange={props.handleBusStop}
              required>
            </input>
            <br/>
            <label>City</label>
            <br/>
            <input type="text" 
              name="city" 
              className="relaks-input" 
              placeholder="e.g Port Harcourt"
              value={props.city}
              onChange={props.handleCity}
              required>
            </input>
            <br/>
            <label>State</label>
            <br/>
            <input type="text" 
              name="state" 
              className="relaks-input" 
              placeholder="e.g Rivers State"
              value={props.state}
              onChange={props.handleState}
              required>
            </input>
            <br/>
            <button style={{ borderRadius: '3em' }} type="submit"
              onClick={props.handleSubmit}
              className="submit-button">
              <b>{props.response.loading ? 'Loading...' : 'Book'}</b>
            </button>
          </div>
      </div>
      <MiniFooter/>
    </div>
  );
};

export default Job;