import React from 'react';
import '../css/settings.css';
import NeedHelpTemplate from './NeedHelpTemplate';


const RequestPaymentForm = (props) => {
  const amount = localStorage.getItem('earned_amount');

  const { bank } = props

  const fetchedBanks = bank === '' ? <option>Loading Banks</option> : bank.map((e) => {
    return (
      <option key={e.id} value={e.name}>{e.name}</option>
    );
  })

  const handleError = () => {
    if (props.error) {
      return <h6 className="error-message">{props.message}</h6>
    }

    if (props.success) {
      return <h6 style={{color: 'green', marginTop: '1rem'}}>{props.message}</h6>
    }

    return null;
  }

  return (
    <div>
      <NeedHelpTemplate />
      <div className="container">
        <div className="relaks-setting">
            <h3 id="setting-header">Request Payment!! Receive your Funds in Minutes!!</h3>
            <h5>Where Should we Pay your money ?</h5>
            <h5>{}</h5>
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
            <select name="job-category" 
              id="job-category" 
              className="relaks-input"
              // value={e.name}
              onChange={props.handleBank}>
                <option>Select Bank</option>
                {fetchedBanks}
            </select>
            <br/>
            <hr/>
            <h5>How much should we Pay</h5>
            <h6>Available Income - <b>₦{amount - (amount * 0.05)}</b></h6>
            <p><em>(This the amount of the money you can withdraw. You can input all of it or still choose how much to withdraw)</em></p>
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
              <b>{props.loading ? 'Withdrawing.....' : `Withdraw ₦${props.withdrawalFund - (props.withdrawalFund * 0.035)}`}</b>
            </button>
            {handleError()}
          </div>
      </div>
    </div>
  );
};

export default RequestPaymentForm;