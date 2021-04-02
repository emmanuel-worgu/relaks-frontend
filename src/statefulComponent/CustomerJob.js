import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import CustomerJobComponent from '../statelessComponent/CustomerJobComponent';
import Footer from '../statelessComponent/Footer';
import MiniFooter from '../statelessComponent/MiniFooter';
import Nav, { CustomerDashboardNav } from '../statelessComponent/Nav';
import NeedHelpTemplate from '../statelessComponent/NeedHelpTemplate';

const CustomerJob = () => {
  const history = useHistory();
  let mounted = useRef(true);

  // The success variable checks if the request was successful
  const[jobs, setJobs] = useState([]);
  const[error, setError] = useState({
    error: false,
    message: ''
  });
  const[success, setSuccess] = useState(false);
  const[loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('jwt_token');
    const url = 'http://localhost:5000/api/customers/get-all-jobs';

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
      console.log(job);
      setSuccess(true);
      setLoading(false);
      return setJobs(job);
    } else if (mounted.current && response.status === 201) {
      const job = await response.json();
      setLoading(false)
      setSuccess(false);
      return setError({
        error: true,
        message: job.errMessage,
      });
    } else if (mounted.current && response.status === 401) {

      history.push('/customer/login');
    } else if (mounted.current && response.status === 400) {
      const job = await response.json();
      setLoading(false);
      setSuccess(false);
      return setError({
        error: true,
        message: job.errMessage,
      });
    }

    } catch (error) {
      console.log(error);
      // console.log(jobs);
      setLoading(false);
      setJobs(error)
      setSuccess(false);
      return setError({
        error: true,
        message: `Couldn't fetch the jobs. Please check your internet connection and try again!!`
      });
    };
  };

  useEffect(() => {
    getData();
    return () => {
      mounted.current = false;
    };
  }, []);

  // const mappedJob = jobs.map(job => {
  //   console.log(job.jobDescription);
  //   return(
  //     <CustomerJobComponent key={job._id}
  //     job={job}
  //   />
  //   );
  // });

  // const mappedJob = jobs.map(job =>  <CustomerJobComponent job={job} key={job._id} />);

  const logic = () => {
    if (loading) {
      return (
        <h4 className="how-its-works">Fetching Your Jobs...</h4>
      );
    }

    if (success) {
      const mappedJob = jobs.map(job =>  <CustomerJobComponent job={job} key={job._id} />);
      return (
        <div>
          <NeedHelpTemplate />
          {mappedJob}
        </div>
      );
    }

    return (
      <h4 className="how-its-works">{error.message}</h4>
    );

  };
  // const mappedJob = jobs.map(job => <p className="card-tex">{job.Description}</p>)
  return (
    <div>
      <CustomerDashboardNav />
      {logic()}
      <MiniFooter />
    </div>
  );
};

export default CustomerJob;