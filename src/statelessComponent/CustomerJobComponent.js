import React from 'react';
import { useHistory } from 'react-router-dom';

const CustomerJobComponent = (props) => {

  const history = useHistory();

  const logic = props.success ? props.mappedJob : props.error;

  const giveReviewButton = () => {
    localStorage.setItem('id', props.job._id);
    history.push('/customer/review')
  };
  return (
    <div className="how-its-works">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-xl-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Testing</h4>
              {/* <p className=" card-text error">{props.err}</p> */}
              <p className="card-text">{props.job.jobDescription}</p>
              <div>
                <button className="submit-button" onClick={giveReviewButton}>Give Review</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerJobComponent;