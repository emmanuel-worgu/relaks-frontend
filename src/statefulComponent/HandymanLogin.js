import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Helmet from 'react-helmet';
import LoginForm from '../statelessComponent/loginForm';

const HandymanLogin = () => {


  const[emailValue, setEmailValue] = useState('');
  const[passwordValue, setPasswordValue] = useState('');
  const[response, setResponse] = useState({
    message: {},
    isAuth: false,
    loading: false,
    error: ''
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
        error: 'Please Use either Phone number or Email!!'
      });
    } else if (passwordValue === '') {
      return setResponse({
        loading: false,
        error: 'Password Is Empty!!'
      });
    }

    let data = {};

    if (parseInt(emailValue)) {

      data = {
        phone: emailValue,
        password: passwordValue
      }
    } else {
      data = {
        email: emailValue,
        password: passwordValue,
      }
  
    }

    setTimeout(async () => {
      try {
        const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/handymen/login';
  
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
        history.push('/handyman');
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
    }, 1000)
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
        <title>Relaks Login | Login in to see your Dashboard</title>
        <meta name="description" content="Login to Your Account"/>
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

export default HandymanLogin;