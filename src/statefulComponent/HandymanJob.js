import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import HandymanJobComp from '../statelessComponent/HandyManJobListComp';
import MiniFooter from '../statelessComponent/MiniFooter';
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
        setLoading(false);
        setJobs(data);
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

  const logic = () => {
    if (loading) {
      <div>
        <NeedHelpTemplate />
        <h4 style={{
            marginTop: '20%'
          }}className="how-its-works">Loading Jobs...</h4>
        <div style={{
            position: 'fixed',
            bottom: '0',
          }} className="mini-footer">
            <p className="mini-footer-text">© Relaks 2021</p>
        </div>
      </div>
    }

    if (typeof jobs === String) {
      <div>
        <NeedHelpTemplate />
        <h4 style={{
            marginTop: '20%'
          }}className="how-its-works">{jobs.errMessage}</h4>
        <div style={{
            position: 'fixed',
            bottom: '0',
        }} className="mini-footer">
          <p className="mini-footer-text">© Relaks 2021</p>
        </div>
      </div>
    }

    if (jobs.jobs === undefined) {
      return (
        <div>
          <NeedHelpTemplate />
          <h4 style={{
            marginTop: '20%'
          }}className="how-its-works">Loading Jobs...</h4>
          <div style={{
            position: 'fixed',
            bottom: '0',
          }} className="mini-footer">
            <p className="mini-footer-text">© Relaks 2021</p>
          </div>
        </div>
      );
    }

    if (jobs.jobs.length === 0) {
      return (
        <div>
          <NeedHelpTemplate />
          <h4 style={{
            marginTop: '20%'
          }}className="how-its-works">No Jobs Yet!!</h4>
          <div style={{
            position: 'fixed',
            bottom: '0',
          }} className="mini-footer">
            <p className="mini-footer-text">© Relaks 2021</p>
          </div>
        </div>
      );
    }


    const mappedJob = jobs.jobs.map((job) => <HandymanJobComp key={job._id} job={job}/>);
    return (
      <div>
        <NeedHelpTemplate />
        {mappedJob}
        <MiniFooter />
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