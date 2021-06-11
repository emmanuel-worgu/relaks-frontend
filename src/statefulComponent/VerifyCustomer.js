import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Helmet from 'react-helmet';

import VerifyUserForm from '../statelessComponent/verifyUserForm';

const VerifyCustomer = () => {
  const[token, setToken] = useState('');
  const[newPassword, setNewPassword] = useState('');
  const[response, setResponse] = useState({
    message: {},
    loading: false,
    error: '',
  });

  const history = useHistory();
  let mounted = useRef(true);

  const handleToken = (e) => {
    setToken(e.target.value);
  };

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = async () => {
    setResponse({
      loading: true
    });
    
    if (token === '') {
      return setResponse({
        loading: false,
        error: 'Please Enter the Token Sent to Your Email!',
      });
    }

    if (newPassword === '') {
      return setResponse({
        loading: false,
        error: 'Please Provide a New Password!'
      });
    }

    const data = {
      token,
      password: newPassword
    }
    try {
      const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/customers/verify-user';
      const token = localStorage.getItem("forgot_password");

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "reset-auth-token" : token,
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin-": "no-cors"
      }
    });
    if (response.status === 200) {
      const message = await response.json();
      setResponse({
        loading: false,
        isAuth: true,
        message,
      });
      localStorage.clear('forgot_password');
      history.push('/customer/login');
    } else {
      const message = await response.json()
      return setResponse({
        isAuth: false,
        loading: false,
        error: message.errMessage,
      });
    }
    } catch (error) {
      return setResponse({
        loading: false,
        error: 'There Was a problem!! Our Engineers have been Notified. Try Again!'
      });
    }
  };

  useEffect(() => {
    // Clears Whatever is on the DOM
    return () => {
      mounted.current = false
    }
  }, [])

  return (
    <div>
      <Helmet>
        <title>Request A New Password</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <VerifyUserForm
        token = {token}
        newPassword = {newPassword}
        handleToken = {handleToken}
        handleNewPassword = {handleNewPassword}
        handleSubmit = {handleSubmit}
        response = {response}
      />
    </div>
  );
};

export default VerifyCustomer;