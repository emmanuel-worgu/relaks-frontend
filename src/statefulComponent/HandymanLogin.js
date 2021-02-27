import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../statelessComponent/loginForm';

const HandymanLogin = () => {
  const[emailValue, setEmailValue] = useState('');
  const[phoneValue, setPhoneValue] = useState('');
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
      return setResponse({
        loading: false,
        error: 'Email Is Empty!!'
      });
    } else if (parseInt(phoneValue)) {
      return setResponse({
        loading: false,
        error: 'Phone Number is Required!!'
      });
    } else if (passwordValue === '') {
      return setResponse({
        loading: false,
        error: 'Password Is Empty!!'
      });
    }

    const data = {
      email: emailValue,
      password: passwordValue,
    }
    setTimeout(async () => {
      try {
        const url = 'http://localhost:5000/api/handymen/login';
  
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
        history.push('/handyman');
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
        console.log(error);
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

export default HandymanLogin;