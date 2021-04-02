import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import HandymanJob from '../statelessComponent/HandymanJob';
import MiniFooter from '../statelessComponent/MiniFooter';
import { HandymanDashboardNav } from '../statelessComponent/Nav';
import NeedHelpTemplate from '../statelessComponent/NeedHelpTemplate';

const JobList =  () => {
  const history = useHistory();
  let mounted = useRef(true);

  // The success variable checks if the request was successful
  const[jobs, setJobs] = useState([]);
  const[error, setError] = useState({
    error: false,
    message: ''
  })
  const[loading, setLoading] = useState(false);
  const[success, setSuccess] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('jwt_token');
      const url = 'http://localhost:5000/api/handymen/all-jobs';

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'auth-token': token,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });

      if (mounted.current && response.status === 200) {
        const job = await response.json();
        console.log(job.jobs);
        setSuccess(true);
        setLoading(false);
        return setJobs(job.jobs);
      } else if (mounted.current && response.status === 201) {
        const job = await response.json();

        setSuccess(false);
        setLoading(false);
        return setError({
          error: true,
          message: job.errMessage,
        });
      } else if (mounted.current && response.status === 401) {

        history.push('/handyman/login');
      } else if (mounted.current && response.status === 400) {
        const job = await response.json();

        setSuccess(false);
        setLoading(false);
        return setError({
          error: true,
          message: job.errMessage,
        });
      }

    } catch (error) {
      console.log(error);
      // console.log(jobs);
      setJobs(error);
      setSuccess(false);
      setLoading(false);
      return setError({
        error: true,
        message: `Couldn't fetch the jobs. Please check your internet connection and try again!!`,
      });
    };
  };

  // Cleans the DOM
  useEffect(() => {
    getData();
    return () => {
      mounted.current = false;
    };
  }, []);

  // console.log(jobs[0].jobs[0].hasPaid);


  const logic = () => {
    if (loading) {
      return (
        <h4 className="how-its-works">Loading Jobs...</h4>
      );
    }

    if (success) {
      // const arrayJob = jobs.jobs;
      // console.log(arrayJob);
      console.log(jobs);
      const mappedJob = jobs.map(job => <HandymanJob job={job} key={job._id} />);
      return (
        <div>
          <NeedHelpTemplate />
          {mappedJob}
          <MiniFooter style={{
            position: 'fixed',
            bottom: '0',
          }} />
        </div>
      );
    }

    return (
      <h4 className="how-its-works">{error.message}</h4>
    );

  };

  return (
    <div>
      <HandymanDashboardNav />
      {logic()}
    </div>
  );
};

export default JobList;