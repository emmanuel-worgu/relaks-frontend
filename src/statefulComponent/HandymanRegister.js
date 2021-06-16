import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import RegisterForm from '../statelessComponent/registerForm';

const HandymanRegister = () => {
  const[nameValue, setNameValue] = useState('')
  const[emailValue, setEmailValue] = useState('');
  const[phoneValue, setPhoneValue] = useState('');
  const[primaryService, setPrimaryService] = useState({
    value: ''
  });
  const[passwordValue, setPasswordValue] = useState('');
  const[data, setResponse] = useState({
    message: {},
    loading: false,
    error: ''
  });

  const history = useHistory();
  let mounted = useRef(true);

  const handleName = (e) => {
    setNameValue(e.target.value);
    e.preventDefault();
  };

  const handleEmail = (e) => {
    setEmailValue(e.target.value);
    e.preventDefault();
  };

  const handlePhone = (e) => {
    setPhoneValue(e.target.value);
    e.preventDefault();
  };

  const handlePrimaryService = (e) => {
    setPrimaryService({ value: e.target.value });
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
    if (nameValue === '') {
      return setResponse({
        loading: false,
        error: 'Name Field is Empty!!'
      });
    } else if (emailValue === '') {
      return setResponse({
        loading: false,
        error: 'Email Field is Empty!!'
      });
    } else if (phoneValue === '') {
      return setResponse({
        loading: false,
        error: 'Phone Number Field is Empty!!'
      });
    } else if (primaryService.value === '') {
      return setResponse({
        loading: false,
        error: 'What is your primary service!!'
      });
    } else if (passwordValue === '') {
      return setResponse({
        loading: false,
        error: 'Please Provide a Password!!'
      });
    };

    const splitName = nameValue.split(' ');
    if (splitName.length === 1) {
      return setResponse({
        loading: false,
        error: 'Please Tell us your full name. You can use space to seperate your names.',
      })
    }

    const eventID = `${nameValue.slice(0,3)}-${Date.now()}${Math.floor(Math.random() * 1000000)}`;

    const data = {
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      service: primaryService.value,
      password: passwordValue,
      url: document.location.href,
      eventID,
      lat: localStorage.getItem("lat"),
      lng: localStorage.getItem("lng"),
    }
    try {
      const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/handymen/register';

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
        message,
      });
      localStorage.setItem('jwt_token', message.token);
      window.fbq('track', 'CompleteRegistration', eventID);
      history.push('/handyman');
    }
    if (response.status === 201) {
      const message = await response.json();
      setResponse({
        loading: false,
        error: message.errMessage || message,
      });
    }
    if (response.status === 400) {
      const message = await response.json();
      setResponse({
        loading: false,
        error: message.errMessage,
      });
    }
    } catch (error) {
      setResponse({
        loading: false,
        error: 'There was a problem!! Our Engineers have been Notified. Try Again!!'
      })
    }
  };

  useEffect(() => {
  
    return () => {
      mounted.current = false;
    };
  });

  return (
    <div>
      <Helmet>
        <title>Relaks Technicians Register | Find Jobs Easily!!</title>
        <meta name="title" content="Relaks Technicians Register | Find Jobs Easily!!" />
        <meta name="description" content="Jobs Available. Register and earn 100,000 monthly helping homeowners provide care and repair for their home"/>
        <meta name="keywords" content="relaks technicians register, how do i join relaks as a technician, earn with relaks, register as a technician with relaks" />
      </Helmet>
      <RegisterForm
        nameValue={nameValue}
        emailValue={emailValue}
        phoneValue={phoneValue}
        primaryServiceValue={primaryService.value}
        passwordValue={passwordValue}
        handleName={handleName}
        handleEmail={handleEmail}
        handlePhone={handlePhone}
        handlePrimaryService={handlePrimaryService}
        handlePassword={handlePassword}
        handleSubmit={handleSubmit}
        response={data}
      />
    </div>
  );
};

export default HandymanRegister;