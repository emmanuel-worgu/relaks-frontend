import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import RegisterForm from '../statelessComponent/registerForm';

const Register = () => {

  const[nameValue, setNameValue] = useState('')
  const[emailValue, setEmailValue] = useState('');
  const[phoneValue, setPhoneValue] = useState('');
  const[passwordValue, setPasswordValue] = useState('');
  const[data, setResponse] = useState({
    message: {},
    loading: false,
    error: '',
  });

  const history = useHistory();
  let mounted = useRef(true);

  const lat = localStorage.getItem("lat") + '';
  const lng = localStorage.getItem("lng") + '';

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

  const handlePassword = (e) => {
    setPasswordValue(e.target.value);
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    setResponse({
      loading: true
    });

    if (lat === '' || !lat) {
      setResponse({
        loading: false,
        error: 'Your Location is off. Please turn it on to continue',
      });
      return alert('Your Location is off. Please turn it on to continue');
    };
  
    if (lng === '' || !lng) {
      setResponse({
        loading: false,
        error: 'Your Location is off. Please turn it on to continue',
      });
      return alert('Your Location is off. Please turn it on to continue');
    };

    if (nameValue === '') {
      return setResponse({
        loading: false,
        error: 'Name Field Is Empty!!'
      });
    } else if (emailValue === '') {
      return setResponse({
        loading: false,
        error: 'Email Field Is Empty!!'
      });
    } else if (phoneValue === '') {
      return setResponse({
        loading: false,
        error: 'Phone Number is Field Is Empty!!'
      });
    } else if (phoneValue.length !== 11) {
      return setResponse({
        loading: false,
        error: 'The Phone Number You Provided is not a Valid Phone Number!!'
      });
    } else if (passwordValue === '') {
      return setResponse({
        loading: false,
        error: 'Password Field Is Empty!!'
      });
    }

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
      password: passwordValue,
      url: document.location.href,
      eventID,
      lat,
      lng,
    }
    try {
      const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/customers/register';

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
      history.push('/customer/pricing');
    }
    if (response.status === 201) {
      const message = await response.json();
      return setResponse({
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
      });
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
        <title>Relaks Customer Register | Let's pay for your next home project!!</title>
        <meta name="title" content="Relaks Register | Let's pay for your next home project!!"/>
        <meta name="description" content="You don't have to worry about keeping your home in good shape. Register and get started with Relaks" />
        <meta name="keywords" content="relaks, relaks customer, relaks customer register, subscribe to relaks, relaks home inc, cheap home service in nigeria, home repairs in nigeria, home care in nigeria, how to get my home repaired in nigeria, where to find electrician in nigeria, where to find a plumber in nigeria" />
      </Helmet>
      <RegisterForm
        nameValue={nameValue}
        emailValue={emailValue}
        phoneValue={phoneValue}
        passwordValue={passwordValue}
        handleName={handleName}
        handleEmail={handleEmail}
        handlePhone={handlePhone}
        handlePassword={handlePassword}
        handleSubmit={handleSubmit}
        response={data}
      />
    </div>
  );
};

export default Register;