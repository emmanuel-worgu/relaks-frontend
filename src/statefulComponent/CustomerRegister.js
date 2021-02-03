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

  const handlePassword = (e) => {
    setPasswordValue(e.target.value);
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    setResponse({
      loading: true
    });
    if (nameValue === '') {
      setResponse({
        loading: false
      });
      return console.log('Name required');
    } else if (emailValue === '') {
      setResponse({
        loading: false
      });
      return console.log('email is required')
    } else if (phoneValue === '') {
      setResponse({
        loading: false
      });
      return console.log('Phone number required')
    } else if (passwordValue === '') {
      setResponse({
        loading: false
      });
      return console.log('Password required')
    };
    const data = {
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      password: passwordValue,
    }
    try {
      const url = 'http://localhost:5000/api/customers/register';

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
      console.log(message);
      history.push('/customer');
    }
    if (response.status === 201) {
      const message = await response.json();
      console.log(message);
      setResponse({
        loading: false,
        message: message.errMessage,
      });
      console.log(data);
      return alert(message.errMessage);
    }
    } catch (error) {
      console.log(error);
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
        <title>Relaks Register</title>
        <meta name="description" content="Register You Account"/>
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