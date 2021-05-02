import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Helmet from 'react-helmet';
import Dashboard from '../statelessComponent/Dashboard';
import HandymanIsVerified from '../statelessComponent/HandymanIsVerified';
import Loading from '../statelessComponent/Loading';
import MiniFooter from '../statelessComponent/MiniFooter';
import { HandymanDashboardNav } from '../statelessComponent/Nav';

const HandymanDashboard = () => {
  // const[response, setResponse] = useState({
  //   loading: false,
  //   isAuth: false,
  //   data: [],
  //   success: false,
  //   error: false,
  // });
  const[data, setData] = useState([]);
  const[jobs, setJobs] = useState([]);
  const[loading, setLoading] = useState(false);
  let history = useHistory();
  let mounted = useRef(true);

  useEffect(() => {
    // Get the user Info
    const getUserInfo = async ()  => {
    try {
      setLoading(true);
      const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/handymen/dashboard';
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
        setData(data);
        localStorage.setItem('earned_amount', data.amountEarned);
      }
      if(mounted.current && response.status === 401) {
         history.push('/handyman/login');
      };
      if(mounted.current && response.status === 201) {
        return (
          <HandymanIsVerified />
        );
      };
    } catch (error) {
      setLoading(false);
    }
  };
  getUserInfo();
    return async () => {
      mounted.current = false
    };
  }, []);

  useEffect(() => {
    // Get the User Jobs
    const getJobs = async ()  => {
    try {
      setLoading(true);
      const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/handymen/get-all-jobs';
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
        setJobs(data);
      }
      if(mounted.current && response.status === 401) {
         history.push('/handyman/login');
      };
      if(mounted.current && response.status === 201) {
        return (
          <HandymanIsVerified />
        );
      };

      setJobs(data);
    } catch (error) {
      setLoading(false);
      setJobs(error);
    }
  };
  getJobs();
    return async () => {
      mounted.current = false
    };
  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <Helmet>
        <title>Relaks Dashboard | View your account, Accept Job, Request Payment!!</title>
        <meta name = "description" content = "View Your Dashboard" />
      </Helmet>
      <HandymanDashboardNav />
      <Dashboard jobs={jobs.jobs}
        data={data}
        loading={loading}
      />
      <MiniFooter />
    </div>
  );
};

export default HandymanDashboard;