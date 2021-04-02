import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Dashboard from '../statelessComponent/Dashboard';
import HandymanIsVerified from '../statelessComponent/HandymanIsVerified';
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
      if(mounted.current && response.status === 200) {
        setLoading(false);
        setData(data);
      }
      if(mounted.current && response.status === 401) {
         history.push('/handyman/login');
      };
      if(mounted.current && response.status === 201) {
        return (
          <HandymanIsVerified />
        );
      };
      // console.log(data);
    } catch (error) {
      console.log(error);
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
      const url = 'http://localhost:5000/api/handymen/get-all-jobs';
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
      // console.log(jobs);
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

  // data.length === 0 ? console.log('fetching...') : console.log(data.jobsChosen);
  return (
    <div>
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