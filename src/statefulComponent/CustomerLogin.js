import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../statelessComponent/loginForm';
import Helmet from 'react-helmet';

const CustomerLogin = () => {

  const[emailValue, setEmailValue] = useState('');
  const[passwordValue, setPasswordValue] = useState('');
  const[response, setResponse] = useState({
    message: {},
    isAuth: false,
    loading: false,
    error: '',
  });

  const history = useHistory();
  let mounted = useRef(true);

  const handleEmail = (e) => {
    setEmailValue(e.target.value);
    e.preventDefault();
  };

  const handlePassword = (e) => {
    setPasswordValue(e.target.value);
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    setResponse({
      loading: true
    });
    if (emailValue === '') {
      return setResponse({
        loading: false,
        error: 'Please Use either your email or phone number!!',
      });
    } else if (passwordValue === '') {
      setResponse({
        loading: false,
        error: 'Password Field Is Empty!!'
      });
    }

    let data = {};

    if (parseInt(emailValue)) {

      data = {
        phone: emailValue,
        password: passwordValue,
        url:document.location.href,
      }
    } else {
      data = {
        email: emailValue,
        password: passwordValue,
        url: document.location.href,
      }
    }

    
    try {
      const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/customers/login';
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
      localStorage.setItem("jwt_token", message.token);
      history.push('/customer');
    } else {
      const message = await response.json();
      return setResponse({
        isAuth: false,
        loading: false,
        error: message.errMessage || message,
      });
    }
    } catch (error) {
      return setResponse({
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
        <title>Relaks Customer Login | Login to see your Dashboard</title>
        <meta name="title" content="Relaks Login | Login to see your Dashboard" />
        <meta name="description" content="Welcome Back!! Login to enjoy Relaks benefits"/>
        <meta name="keywords" content="relaks customer login, relaks customer, relaks home inc, relaks home inc, cheap home service in nigeria, home repairs in nigeria, home care in nigeria, how to get my home repaired in nigeria, where to find electrician in nigeria, where to find a plumber in nigeria" />
      </Helmet>
      <LoginForm
        emailValue={emailValue}
        passwordValue={passwordValue}
        handleEmail={handleEmail}
        handlePassword={handlePassword}
        handleSubmit={handleSubmit}
        response={response}
      />
    </div>
  );
};

export default CustomerLogin;