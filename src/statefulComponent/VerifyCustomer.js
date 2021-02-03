import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import VerifyUserForm from '../statelessComponent/verifyUserForm';

const VerifyCustomer = () => {
  const[token, setToken] = useState('');
  const[newPassword, setNewPassword] = useState('');
  const[response, setResponse] = useState({
    message: {},
    loading: false
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
    console.log('clicked');
    setResponse({
      loading: true
    });
    
    if (token === '') {
      setResponse({
        loading: false
      });
      console.log('Its email time!!')
      return console.log('Please Provide your email or Phone Number');
    }

    if (newPassword === '') {
      setResponse({
        loading: false
      });
      console.log('Its email time!!')
      return console.log('Please Provide your email or Phone Number');
    }

    const data = {
      token,
      password: newPassword
    }
    try {
      const url = 'http://localhost:5000/api/customers/verify-user';
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
      localStorage.setItem("forgot_password", message.token);
      console.log(message);
      history.push('/customer/login');
    } else {
      const message = await response.json()
      console.log(message)
      return setResponse({
        isAuth: false,
        loading: false,
        data: message
      });
    }
    // console.log(message);
    } catch (error) {
      console.log(error);
      setResponse({
        loading: false,
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
    <VerifyUserForm
      token = {token}
      newPassword = {newPassword}
      handleToken = {handleToken}
      handleNewPassword = {handleNewPassword}
      handleSubmit = {handleSubmit}
      response = {response}
    />
  );
};

export default VerifyCustomer;