import React, { useState } from 'react';

import '../css/dashboard.css';

const HandymanJobComp = ({ job }) => {
  const[loading, setLoading] = useState(false);
  const[success, setSuccess] = useState(false);

  const handleCancelButton = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('jwt_token');
      const jobId = job._id;
      const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/handymen/cancel-job';
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ jobId, }),
        headers: {
          'auth-token': token,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });

      if (response.status === 200) {
        // const message = await response.json();
        setSuccess(true);
        setLoading(false);
      } else {
        // const message = await response.json();
        setSuccess(false);
        setLoading(false);
      }
    } catch (error) {
      setSuccess(false);
      setLoading(false);
    }
  };

  const textLogic = () => {
    if (loading) {
      return <b>Canceling</b>
    }

    if (success) {
      return <b>Canceled</b>
    }

    return <b>Cancel</b>
  };

  const buttonLogic = () => {
    if (job.jobCompleted) {
      return null
    }

    return (
      <button className="submit-button" 
        style={{backgroundColor:'red', borderRadius: '4em'}} 
        onClick={handleCancelButton}>
          {textLogic()}
      </button>
    );
  };

  const idLogic = success ? 'none' : null;
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const statusFunction = () => {
    let chosenColor;
    let textcolor={
      assigned: {
        color: 'yellow',
        text: 'Assigned'
      },
      completed: {
        color: 'green',
        text: 'Completed'
      },
      notAssigned: {
        color: 'red',
        text: 'In Progress'
      }
    }
    return{
      color:function(jobCompleted, jobisAssigned){
        chosenColor =jobCompleted && jobisAssigned?textcolor.completed:chosenColor = !jobCompleted &&  jobisAssigned?textcolor.assigned:textcolor.notAssigned;
        return chosenColor
      }
    }
  };

  return (
    <div style={{
      marginBottom: '1.5em',
      marginTop: '1.5em',
      display: idLogic 
    }} className="dashboard" id={idLogic}>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-xl-12">
          <div style={{
            marginLeft: '25px'
          }}className="card" id="card-pricing">
            <em style={{
              backgroundColor: statusFunction().color(job.jobCompleted, job.isAssigned).color,
              display: 'flex',
              justifyContent: 'center'
            }}>{statusFunction().color(job.jobCompleted, job.isAssigned).text}</em>
            <div className="card-body">
              <h4 className="card-title">{job.jobName}</h4>
              {/* <p className=" card-text error">{props.err}</p> */}
              <p>Date: <b>{new Date(job.dateScheduled).toLocaleDateString('en-US', options)}</b></p>
              <p>Time: <b>{job.timeScheduled}</b></p>
              <p>Extra Note: <b>{job.jobDescription}</b></p>
              <p>House Address: <b>{job.houseAddress}</b></p>
              <p>Nearest Bus Stop: <b>{job.nearestBusStop}</b></p>
              <p>City: <b>{job.city}</b></p>
              <p>State: <b>{job.state}</b></p>
              <div style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
                {buttonLogic()}
                {/* <button></button> */}
              </div>
              <div>
                {/* <h6 className="error" style={{color: 'red'}}>{textLogic()}</h6> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandymanJobComp;