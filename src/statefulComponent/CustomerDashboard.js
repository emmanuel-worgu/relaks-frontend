import React, { useEffect, useRef, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Dashboard from '../statelessComponent/Dashboard';
import NeedHelpTemplate from '../statelessComponent/NeedHelpTemplate';
import Nav from '../statelessComponent/Nav';

const CustomerDashboard = () => {
  const[response, setResponse] = useState({
    loading: true,
    isAuth: false,
    data: 'The fist Render!!'
  });
  let history = useHistory();
  let mounted = useRef(true);

  useEffect(() => {
    const getData = async ()  => {
    try {
      setResponse({
        loading: true,
      });
      const url = 'http://localhost:5000/api/customers/dashboard';
      const token = localStorage.getItem('jwt_token');
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'auth-token': token,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if(mounted.current && response.status === 200) {
        setResponse({
          loading: false,
          data: data,
          isAuth: true
        });
      }
      if(mounted.current && response.status === 401) {
        history.push('/customer/login');
      };
    } catch (error) {
      console.log(error);
    }
  };
  getData();
    return async () => {
      mounted.current = false
    };
  }, []);
  return (
    <div>
      <NeedHelpTemplate />
      <Nav />
      <Dashboard />
    </div>
  );
};

export default CustomerDashboard;