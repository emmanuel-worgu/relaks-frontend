import React from 'react';
import '../css/settings.css';
import NeedHelpTemplate from './NeedHelpTemplate';


const RequestPaymentForm = (props) => {
  return (
    <div>
      <NeedHelpTemplate />
      <div className="container">
        <div className="relaks-setting">
            <h3 id="setting-header">Request Payment!! Receive your Funds in Minutes!!</h3>
            <h5>Where Should we Pay your money ?</h5>
            <h5>{}</h5>
            <label id="name-setting-text">Bank Code</label>
            <br/>
            <input type="text" 
              name="work"
              autoComplete="off" 
              className="relaks-setting-input" 
              value={props.bankCode}
              onChange={props.handleBankCode}
              required>
            </input>
            <br/>
            <label id="name-setting-text">Account Number</label>
            <br/>
            <input type="text" 
              name="work"
              autoComplete="off" 
              className="relaks-setting-input" 
              value={props.accountNumber}
              onChange={props.handleAccountNumber}
              required>
            </input>
            <br/>
            <label id="name-setting-text">Bank</label>
            <br/>
            <input type="text" 
              name="work"
              autoComplete="off" 
              className="relaks-setting-input" 
              value={props.bank}
              onChange={props.handleBank}
              required>
            </input>
            <br/>
            <hr/>
            <h5>How much should we Pay</h5>
            <h6>Available Income - <b>₦{120000 - (120000 * 0.05)}</b></h6>
            <p>(This the amount of the money you can withdraw)</p>
            <label id="name-setting-text">How much do you want to withdraw ?</label>
            <br/>
            <input type="text" 
              name="work"
              autoComplete="off"
              className="relaks-setting-input" 
              value={props.withdrawalFund}
              onChange={props.handleWithdrawalFund}
              required>
            </input>
            <br/>
            <button type="submit"
              onClick={props.handleWithdrawal}
              className="submit-button">
              <b>{props.loading ? 'Withdrawing.....' : `Withdraw ₦${props.withdrawalFund - (props.withdrawalFund * 0.05)}`}</b>
            </button>
          </div>
      </div>
    </div>
  );
};

export default RequestPaymentForm;