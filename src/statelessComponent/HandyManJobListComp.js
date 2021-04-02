import React, { useState } from 'react';

const HandymanJobComp = (props) => {
  const[loading, setLoading] = useState(false);
  const[success, setSuccess] = useState(false);

  const handleCancelButton = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('jwt_token');
      const jobId = props.id;
      const url = 'http://localhost:5000/api/handymen/cancel-job';
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
        const message = await response.json();
        console.log(message);
        setSuccess(true);
        setLoading(false);
      } else {
        const message = await response.json();
        console.log(message);
        setSuccess(false);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
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

  const idLogic = success ? 'none' : null;

  return (
    <div style={{
      marginBottom: '1.5em',
      marginTop: '1.5em',
      display: idLogic 
    }} className="dashboard" id={idLogic}>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-xl-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Testing</h4>
              {/* <p className=" card-text error">{props.err}</p> */}
              <p className="card-text">Job</p>
              <div style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
                <button onClick={handleCancelButton}>{textLogic()}</button>
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