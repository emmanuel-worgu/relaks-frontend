import React, { useState } from 'react';

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

    // console.log(data);
    const url = 'http://localhost:5000/api/handymen/find-job';
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

      console.log(message);
    } else {
      const message = await response.json();
      setData({
        message,
        loading: false,
        success: true,
      });
      console.log(message);
    };
  };

  console.log(props.job)

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

    setTimeout(() => {
      setData({
        message: ''
      });
    }, 3000)
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
          }}className="card">
            <div className="card-body">
              <h4 className="card-title">{props.job.jobName}</h4>
              {/* <p className=" card-text error">{props.err}</p> */}
              <p>Extra Note: {props.job.jobDescription}</p>
              <p>Category: {props.job.jobCategory}</p>
              <p>Home Address: {props.job.houseAddress}</p>
              <p>Nearest Bus Stop: {props.job.nearestBusStop}</p>
              <p>City: {props.job.city}</p>
              <p>State: {props.job.state}</p>
              <p>Date: {new Date(props.job.dateScheduled).toLocaleDateString('en-US', options)}</p>
              <p>Time: {props.job.timeScheduled}</p>
              <hr/>
              <h6><b>Once Accepted, You can not accept any other job until this is completed.</b></h6>
              <div style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
                <button className="submit-button" onClick={acceptJob}>{logic()}</button>
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