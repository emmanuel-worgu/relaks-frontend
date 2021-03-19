import React from 'react';
import logo from '../assest/logo.svg';
import '../css/settings.css';
import NeedHelpTemplate from './NeedHelpTemplate';


const SettingsForm = (props) => {
  return (
    <div>
      <NeedHelpTemplate />
      <div>
        <img src={logo} alt="Relaks Logo" className="relaks-logo"></img>
      </div>
      <div className="container">
        <div className="relaks-setting">
            <h3 id="setting-header">Manage your account here. Change your password and so on</h3>
            {/* <h6 className="error-message">{props.response.error}</h6> */}
            <h5>Change Your Personal Information</h5>
            <label id="name-setting-text">Name</label>
            <br/>
            <input type="text" 
              name="work"
              autoComplete="off" 
              className="relaks-setting-input" 
              // placeholder="e.g. Fix my light switch"
              // value={props.work}
              // onChange={props.handleWork}
              required>
            </input>
            <br/>
            <label id="name-setting-text">Email</label>
            <br/>
            <input type="text" 
              name="work"
              autoComplete="off" 
              className="relaks-setting-input" 
              // placeholder="e.g. Fix my light switch"
              // value={props.work}
              // onChange={props.handleWork}
              required>
            </input>
            <br/>
            <label id="name-setting-text">Phone Number</label>
            <br/>
            <input type="text" 
              name="work"
              autoComplete="off" 
              className="relaks-setting-input" 
              // placeholder="e.g. Fix my light switch"
              // value={props.work}
              // onChange={props.handleWork}
              required>
            </input>
            <br/>
            <button type="submit"
              // onClick={props.handleSubmit}
              className="submit-button">
                <b>Change</b>
              {/* <b>{props.response.loading ? 'Loading...' : 'Book'}</b> */}
            </button>
            <br/>
            <hr/>
            <h5>Address Information</h5>
            <label id="name-setting-text">Home Address</label>
            <br/>
            <input type="text" 
              name="work"
              autoComplete="off" 
              className="relaks-setting-input" 
              // placeholder="e.g. Fix my light switch"
              // value={props.work}
              // onChange={props.handleWork}
              required>
            </input>
            <br/>
            <label id="name-setting-text">Nearest Bus-Stop</label>
            <br/>
            <input type="text" 
              name="work"
              autoComplete="off" 
              className="relaks-setting-input" 
              // placeholder="e.g. Fix my light switch"
              // value={props.work}
              // onChange={props.handleWork}
              required>
            </input>
            <br/>
            <label id="name-setting-text">City</label>
            <br/>
            <input type="text" 
              name="work"
              autoComplete="off" 
              className="relaks-setting-input" 
              // placeholder="e.g. Fix my light switch"
              // value={props.work}
              // onChange={props.handleWork}
              required>
            </input>
            <br/>
            <label id="name-setting-text">State</label>
            <br/>
            <input type="text" 
              name="work"
              autoComplete="off" 
              className="relaks-setting-input" 
              // placeholder="e.g. Fix my light switch"
              // value={props.work}
              // onChange={props.handleWork}
              required>
            </input>
            <br/>
            <button type="submit"
              // onClick={props.handleSubmit}
              className="submit-button">
                <b>Change</b>
              {/* <b>{props.response.loading ? 'Loading...' : 'Book'}</b> */}
            </button>
            <br/>
            {/* <label htmlFor="job-category">What Categroy best fit your job</label>
            <br/>
            <select name="job-category" 
              id="job-category" 
              className="relaks-input"
              // value={props.serviceCategory.value}
              onChange={props.handleServiceCategory}>
                <option value="">Choose a category</option>
                <option value="Electrical">Electrical</option>
                <option value="Electrical">Plumbering</option>
                <option value="Electrical">Carpentering</option>
                <option value="Electrical">Painting</option>
            </select>
            <br/> */}
            <hr></hr>
            <h5>Reset Password</h5>
            <label id="name-setting-text">Old Password</label>
            <br/>
            <input type="text" 
              name="address" 
              className="relaks-setting-input" 
              // placeholder="e.g No. 9 malik street elelenwo"
              // value={props.homeAddress}
              // onChange={props.handleHomeAddress}
              required>
            </input>
            <br/>
            <label id="name-setting-text">New Password</label>
            <br/>
            <input type="text" 
              name="bus-stop" 
              className="relaks-setting-input" 
              // placeholder="e.g Oil Mill Bus Stop"
              // value={props.busStop}
              // onChange={props.handleBusStop}
              required>
            </input>
            <br/>
            <button type="submit"
              // onClick={props.handleSubmit}
              className="submit-button">
                <b>Reset Password</b>
              {/* <b>{props.response.loading ? 'Loading...' : 'Book'}</b> */}
            </button>
          </div>
      </div>
    </div>
  );
};

export default SettingsForm;