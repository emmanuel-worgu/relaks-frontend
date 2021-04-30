import React from 'react';
import '../css/settings.css';
import NeedHelpTemplate from './NeedHelpTemplate';


const SettingsForm = (props) => {
  return (
    <div>
      <NeedHelpTemplate />
      <div className="container">
        <div className="relaks-setting">
            <h3 id="setting-header">Manage your account here. Change your password and so on</h3>
            {/* <h6 className="error-message">{props.response.error}</h6> */}
            <h5>Change Your Personal Information</h5>
            <h5>{props.personalInfoRes}</h5>
            <label id="name-setting-text">Name</label>
            <br/>
            <input type="text" 
              name="work"
              autoComplete="off" 
              className="relaks-setting-input" 
              // placeholder="e.g. Fix my light switch"
              value={props.name}
              onChange={props.handleName}
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
              value={props.email}
              onChange={props.handleEmail}
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
              value={props.phone}
              onChange={props.handlePhone}
              required>
            </input>
            <br/>
            <button type="submit"
              onClick={props.handlePersonalInformation}
              className="submit-button">
              <b>{props.loading ? 'Updating Your Information....' : 'Update Your Personal Information'}</b>
            </button>
            <br/>
            <hr/>
            <br/>
            <h5>Reset Password</h5>
            <label id="name-setting-text">Old Password</label>
            <br/>
            <input type="text" 
              name="address" 
              className="relaks-setting-input" 
              value={props.oldPassword}
              onChange={props.handleOldPassword}
              required>
            </input>
            <br/>
            <label id="name-setting-text">New Password</label>
            <br/>
            <input type="text" 
              name="bus-stop" 
              className="relaks-setting-input" 
              value={props.newPassword}
              onChange={props.handleNewPassword}
              required>
            </input>
            <br/>
            <button type="submit"
              onClick={props.handleResetPassword}
              className="submit-button">
              <b>{props.loading ? 'Reseting Your Password' : 'Reset Password'}</b>
            </button>
          </div>
      </div>
    </div>
  );
};

export default SettingsForm;