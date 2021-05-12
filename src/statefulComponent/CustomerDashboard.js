import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Helmet from 'react-helmet';
import Dashboard from '../statelessComponent/Dashboard';
import { CustomerDashboardNav } from '../statelessComponent/Nav';
import MiniFooter from '../statelessComponent/MiniFooter';
import Loading from '../statelessComponent/Loading';

const CustomerDashboard = () => {

  const[userInfo, setUserInfo] = useState([]);
  const[jobs, setJobs] = useState([]);
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState(false);
  let history = useHistory();
  let mounted = useRef(true);

  useEffect(() => {
    const getUserInfo = async ()  => {
    try {
      setLoading(true);
      const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/customers/dashboard';
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
        setLoading(false);
        setUserInfo(data);
      }
      if (mounted.current && response.status === 201) {
        setLoading(false);
        setUserInfo(data.authUser)
      }
      if(mounted.current && response.status === 401) {
        history.push('/customer/login');
      };
    } catch (error) {
      setLoading(false);
      setError(true);
      setUserInfo(error)
    }
  };
  getUserInfo();
    return async () => {
      mounted.current = false
    };
  }, [history]);

  // Get the User Jobs
  useEffect(() => {
    const getJobs = async ()  => {
    try {
      setLoading(true);
      const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/customers/get-all-jobs';
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
        setJobs(data);
        setLoading(false);
      }
      if(mounted.current && response.status === 401) {
        history.push('/customer/login');
      };
    } catch (error) {
      setError(true);
      setJobs([]);
    }
  };
  getJobs();
    return async () => {
      mounted.current = false
    };
  }, [history]);

  if (loading) {
    return (
      <Loading />
    );
  }
  
  return (
    <div>
      <Helmet>
        <title>Relaks Dashboard | View your account, manage all your job request.</title>
        <meta name = "description" content = "View Your Dashboard" />
      </Helmet>
      <CustomerDashboardNav />
      <Dashboard userInfo={userInfo}
        jobs={jobs}
        loading={loading}
        error={error}
      />
      <MiniFooter />
    </div>
  );
};

export default CustomerDashboard;