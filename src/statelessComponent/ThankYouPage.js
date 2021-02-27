import React from 'react';
import { useHistory } from 'react-router-dom';

const ThankYouPage = () => {

  const history = useHistory();

  const confirmationMessage = document.location.pathname === '/customer/book-service/confirm' ? 'You Requset has been booked... Our technician is on his way' : 'Transaction Successful.. You will be redirected in five seconds!!'
  const redirect = () => {
    history.push('/')
  };

  setTimeout(redirect, 5000)
  return (
    <div>
      <div>
        <h3>{confirmationMessage}</h3>
        {/* {redirect()} */}
      </div>
    </div>
  );
};

export default ThankYouPage;