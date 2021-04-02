import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import HandymanJobComp from '../statelessComponent/HandyManJobListComp';
import { HandymanDashboardNav } from '../statelessComponent/Nav';
import NeedHelpTemplate from '../statelessComponent/NeedHelpTemplate';

const HandymanJob = () => {
  const[jobs, setJobs] = useState([]);
  const[loading, setLoading] = useState(false);

  const history = useHistory();
  let mounted = useRef(true);

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
        setLoading(false);
        setJobs(data);
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

  const logic = () => {
    if (loading) {
      <div>
        <NeedHelpTemplate />
        <h4>Loading...</h4>
      </div>
    }

    if (typeof jobs === String) {
      <div>
        <NeedHelpTemplate />
        <h4>{jobs.errMessage}</h4>
      </div>
    }

    if (jobs.jobs === undefined) {
      return (
        <div>
          <NeedHelpTemplate />
          <h4>Loading...</h4>
        </div>
      );
    }

    const mappedJob = jobs.jobs.map((job) => <HandymanJobComp key={job._id} id={job._id}/>);
    return (
      <div>
        <NeedHelpTemplate />
        {mappedJob}
      </div>
    );
  }
  return (
    <div>
      <HandymanDashboardNav />
      {logic()}
    </div>
  );
};

export default HandymanJob;