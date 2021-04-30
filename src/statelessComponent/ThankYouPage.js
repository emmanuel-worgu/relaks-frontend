import React from 'react';
import { useHistory } from 'react-router-dom';

import { 
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NeedHelpTemplate from './NeedHelpTemplate';
import '../css/thank-you.css';

const ThankYouPage = () => {

  const history = useHistory();

  const confirmationMessage = document.location.pathname === '/customer/book-service/confirm' ? <p><em>RELAKS!!</em> Your Job Request has been Received!!</p> : 'Transaction Successful.. You will be redirected in two seconds!!'
  const redirect = () => {
    document.location.pathname === '/customer/book-service/confirm' ? history.push('/customer/job') : history.push('/customer');
  };

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: '15px',
    marginRight: '15px'
  }

  setTimeout(redirect, 2000)
  return (
    <div>
      <NeedHelpTemplate />
      <div style={{
        marginTop: '15%'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '25px'
        }}>
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green'}} size="6x" />
        </div>
        <h3 class="confirm-message" style={style}>{confirmationMessage}</h3>
        {/* {redirect()} */}
      </div>
      <div style={{
        position: 'fixed',
        bottom: '0',
      }} className="mini-footer">
        <p className="mini-footer-text">© Relaks 2021</p>
      </div>
    </div>
  );
};

export default ThankYouPage;