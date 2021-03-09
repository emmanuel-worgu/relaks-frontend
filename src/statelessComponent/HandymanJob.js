import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const HandymanJob = (props) => {

  const[data, setData] = useState({
    message: '',
    loading: false,
    success: false,
  });


  const acceptJob = () => {
    setData({
      loading: true
    });
    const data = {
      id: props.job.id,
    }
    const url = 'http://localhost:5000/api/handymen/find-job';
    const token = localStorage.getItem('jwt_token');

    const response = fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'auth-token': token,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });

    if (response.status !== 200) {
      const  message = response.json();

      setData({
        message,
        loading: false,
        success: false,
      });

      alert(message);
    }

    const message = response.json();
    setData({
      message,
      loading: false,
      success: true,
    });
    alert(message);
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

  // const textLogic = () => {
  //     <h5>{data.message}</h5>

  //   setTimeout(() => {
  //     setData({
  //       message: ''
  //     });
  //   }, 3000)
  // };

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
                {/* {textLogic} */}
                <button className="submit-button" onClick={acceptJob}>{logic()}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandymanJob;