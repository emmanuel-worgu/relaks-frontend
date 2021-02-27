import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../statelessComponent/loginForm';

const CustomerLogin = () => {
  const[emailValue, setEmailValue] = useState('');
  const[phoneValue, setPhoneValue] = useState('');
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
    setEmailValue(e.target.value) || setPhoneValue(e.target.value);
    e.preventDefault();
  };

  const handlePhone = (e) => {
    setPhoneValue(e.target.value);
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
    if (emailValue === '' || phoneValue === '') {
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
    console.log(emailValue);
    console.log(phoneValue);
    const data = {
      email: emailValue,
      password: passwordValue,
    }
    try {
      const url = 'http://localhost:5000/api/customers/login';

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
    // console.log(message);
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
      <LoginForm
        emailValue={emailValue}
        phoneValue={phoneValue}
        passwordValue={passwordValue}
        handleEmail={handleEmail}
        handlePhone={handlePhone}
        handlePassword={handlePassword}
        handleSubmit={handleSubmit}
        response={response}
      />
    </div>
  );
};

export default CustomerLogin;