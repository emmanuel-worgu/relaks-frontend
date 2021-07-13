import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/customerjobcomponent.css';
import '../css/dashboard.css';
import {
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CustomerJobComponent = (props) => {

  const[loading, setLoading] = useState(false);
  const[canceled, setCanceled] =  useState({
    success: false,
    message: ''
  });

  const history = useHistory();

  const giveReviewButton = () => {
    localStorage.setItem('id', props.job._id);
    history.push('/customer/review')
  };

 const cancelJob = async () => {
   setLoading(true);
   const token = localStorage.getItem('jwt_token');
   const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/customers/cancel-job';
   const data = {
    id: props.job._id,
   }

   const response = await fetch(url, {
     method: 'DELETE',
     body: JSON.stringify(data),
     headers: {
      'auth-token' : token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
     }
   });

   if (response.status === 200) {
     setLoading(false);
     setCanceled({
       success: true,
     });
   } else {
     const message = await response.json();
     setLoading(false);
     setCanceled({
       success: false,
       message: message.errMessage,
     })
   }
 };

  const buttonLogic = () => {
    if (props.job.jobCompleted && props.job.isAssigned) {
      return null;
    }

    if (props.job.isAssigned && props.job.jobCompleted === false) {
      return (
        <div style={{
          width: '100%',
          // alignItems: 'center'
        }}>
          <i style={{
            fontSize: '0.7em',
            marginBottom: '-20px',
            display: 'flex',
            justifyContent: 'center'
          }}><FontAwesomeIcon icon={faInfoCircle} size="1x"/> Please make sure the technician completes the job before you click this button. This can't be undo</i>
        <br/>
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <button style={{
            borderRadius: '4em'
          }}className="submit-button" onClick={giveReviewButton}>
            <b>Mark Complete</b>
          </button>
        </div>
        </div>
      );
    }

    return <button style={{
      backgroundColor: 'red',
      borderRadius: '4em'
    }}className="submit-button" onClick={cancelJob}>
      <b>{loading ? 'Canceling...' : 'Cancel Job'}</b></button>
  }

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const displayNone = canceled.success ? 'none' : null

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
    <div>
      {/* <NeedHelpTemplate /> */}
      <div style={{
        marginBottom: '1.5em',
        marginTop: '1.5em',
        display: displayNone,
        // marginLeft: '25px'
      }} className="dashboard">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-xl-12">
            <div style={{
              marginLeft: '25px'
            }}className="card" id="card-pricing">
              <em style={{
                backgroundColor: statusFunction().color(props.job.jobCompleted, props.job.isAssigned).color,
                display: 'flex',
                justifyContent: 'center'
              }}>{statusFunction().color(props.job.jobCompleted, props.job.isAssigned).text}</em>
              <div className="card-body">
                <h4 className="card-title">{props.job.jobName}</h4>
                {/* <p className=" card-text error">{props.err}</p> */}
                <p>Date: <b>{new Date(props.job.dateScheduled).toLocaleDateString('en-US', options)}</b></p>
                <p>Time: <b>{props.job.timeScheduled}</b></p>
                <p>Extra Note: <b>{props.job.jobDescription}</b></p>
                <p>House Address: <b>{props.job.houseAddress}</b></p>
                <p>Nearest Bus Stop: <b>{props.job.nearestBusStop}</b></p>
                <p>City: <b>{props.job.city}</b></p>
                <p>State: <b>{props.job.state}</b></p>
                <p>Technician: <b>{props.job.jobDoneBy === '' ? 'N/A' : props.job.jobDoneByName}</b></p>
                <p>Status: <b style={{
                  color: statusFunction().color(props.job.jobCompleted, props.job.isAssigned).color
                }}>{statusFunction().color(props.job.jobCompleted, props.job.isAssigned).text}</b></p>
                <div className="review-button">
                  {buttonLogic()}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default CustomerJobComponent;