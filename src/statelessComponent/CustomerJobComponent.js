import React from 'react';
import { useHistory } from 'react-router-dom';
import NeedHelpTemplate from './NeedHelpTemplate';
import '../css/customerjobcomponent.css';

const CustomerJobComponent = (props) => {

  const history = useHistory();

  const logic = props.success ? props.mappedJob : props.error;

  const giveReviewButton = () => {
    localStorage.setItem('id', props.job._id);
    history.push('/customer/review')
  };
  return (
    <div>
      {/* <NeedHelpTemplate /> */}
      <div style={{
        marginBottom: '1.5em',
        marginTop: '1.5em',
        // marginLeft: '25px'
      }} className="dashboard">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-xl-12">
            <div style={{
              marginLeft: '25px'
            }}className="card">
              <div className="card-body">
                <h4 className="card-title">Testing</h4>
                {/* <p className=" card-text error">{props.err}</p> */}
                <p className="card-text">{props.job.jobDescription}</p>
                <div className="review-button">
                  <button className="submit-button" onClick={giveReviewButton}>Give Review</button>
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