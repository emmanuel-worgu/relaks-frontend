import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Helmet from 'react-helmet';

import ForgotPasswordForm from '../statelessComponent/ForgotPasswordForm';

const CustomerForgotPassword = () => {
  const[value, setValue] = useState('');
  const[response, setResponse] = useState({
    message: {},
    loading: false,
    error: '',
  });

  const history = useHistory();
  let mounted = useRef(true);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    setResponse({
      loading: true
    });
    if (value === '') {
      return setResponse({
        loading: false,
        error: 'Please Provide your email!!',
      });
    } 

    let data = {}
    if (parseInt(value)) {
      data = {
        phone: value
      }
    } else {
      data = {
        email: value,
      }
    }
    
    try {
      const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/customers/forget-password';

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
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
      localStorage.setItem("forgot_password", message.token);
      localStorage.setItem("email", value);
      history.push('/customer/forgot-password/verify-user');
    } else {
      const message = await response.json();
      return setResponse({
        isAuth: false,
        loading: false,
        error: message.errMessage,
      });
    }
    } catch (error) {
      setResponse({
        loading: false,
        error: 'There was a problem!! Our Engineers have been Notified. Try Again!!'
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
        <title>Forgot Password | Let's help you recover your account</title>
        <meta name = "description" content = "View Your Dashboard" />
      </Helmet>
      <ForgotPasswordForm
        value = {value}
        handleValue = {handleValue}
        handleSubmit = {handleSubmit}
        response = {response}
      />
    </div>
  );
};

export default CustomerForgotPassword;