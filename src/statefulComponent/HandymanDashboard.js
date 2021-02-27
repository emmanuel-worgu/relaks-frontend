import React, { useEffect, useRef, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import HandymanIsVerified from '../statelessComponent/HandymanIsVerified';

const HandymanDashboard = () => {
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
      const url = 'http://localhost:5000/api/handymen/dashboard';
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
      if(mounted.current) {
        setResponse({
          loading: false,
          data: data,
          isAuth: true
        });
      }
      if(mounted.current && response.status === 401) {
        history.push('/handyman/login');
      };
      if(mounted.current && response.status === 201) {
        return (
          <HandymanIsVerified />
        );
      };
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  getData();
    return async () => {
      mounted.current = false
    };
  }, []);
  if (!response.loading) {
    return (
      <div>
        {/* <p>
          <li>{response.data.name || response.data.errMessage}</li>
          <li>{response.data.email}</li>
          <li>{response.data.phone}</li>
        </p> */}
        <HandymanIsVerified />
    </div>
    );
  }
  return(
    <p>Loading....</p>
  );
};

export default HandymanDashboard;