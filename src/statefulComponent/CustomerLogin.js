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
  })

  const history = useHistory();
  let mounted = useRef(true);

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
    if (emailValue === '') {
      setResponse({
        loading: false
      });
      console.log('Its email time!!')
      return console.log('Please Provide your email or Phone Number');
    } else if (parseInt(phoneValue)) {
      setResponse({
        loading: false,
      });
      return console.log('Its phone time!!')
    } else if (passwordValue === '') {
      setResponse({
        loading: false,
      });
    }

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
      console.log(message);
      history.push('/customer');
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