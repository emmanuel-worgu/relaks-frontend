import React, { useState } from 'react';
import '../css/dashboard.css';

import {
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HandymanJob = (props) => {

  const[data, setData] = useState({
    message: '',
    loading: false,
    success: false,
  });


  const acceptJob = async () => {
    setData({
      loading: true
    });
    const body = {
      id: props.job._id,
    }
    
    const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/handymen/find-job';
    const token = localStorage.getItem('jwt_token');

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'auth-token': token,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });

    if (response.status !== 200) {
      const  message = await response.json();

      setData({
        message,
        loading: false,
        success: false,
      });

    } else {
      const message = await response.json();
      setData({
        message,
        loading: false,
        success: true,
      });
    };
  };

  const logic = () => {

    if (data.loading) {
      return (
        <b>Accepting...</b>
      );
    }

    if (data.success) {
      return (
        <b>Accepted</b>
      );
    }

    return (
      <b>Accept</b>
    );
  };

  const textLogic = () => {
    if (data.success === false) {
      return data.message.errMessage;
    }

    return '';

    // setTimeout(() => {
    //   setData({
    //     message: ''
    //   });
    // }, 3000)
  };

  const displayLogic = data.success ? 'none' : null;
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


  return (
    <div style={{
      marginBottom: '1.5em',
      marginTop: '1.5em',
      display: displayLogic,
    }} className="dashboard">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-xl-12">
          <div style={{
            marginLeft: '25px'
          }}className="card" id="card-pricing">
            <div className="card-body">
              <h4 className="card-title">{props.job.jobName}</h4>
              {/* <p className=" card-text error">{props.err}</p> */}
              <p>Extra Note: <b>{props.job.jobDescription}</b></p>
              <p>Category:<b>{props.job.jobCategory}</b></p>
              <p>Home Address: <b>{props.job.houseAddress}</b></p>
              <p>Nearest Bus Stop: <b>{props.job.nearestBusStop}</b></p>
              <p>City: <b>{props.job.city}</b></p>
              <p>State: <b>{props.job.state}</b></p>
              <p>Date for work: <b>{new Date(props.job.dateScheduled).toLocaleDateString('en-US', options)}</b></p>
              <p>Time for work: <b>{props.job.timeScheduled}</b></p>
              <hr/>
              <i style={{
                marginBottom: '20px',
              }}>
                <FontAwesomeIcon icon={faInfoCircle} />
                <b> Once Accepted, You can not accept any other job until this is completed.</b>
              </i>
              <div style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
                <button className="submit-button" style={{borderRadius: '4em'}} onClick={acceptJob}>{logic()}</button>
              </div>
              <div>
                <h6 className="error" style={{color: 'red'}}>{textLogic()}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandymanJob;