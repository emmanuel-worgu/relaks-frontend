import React from 'react';
import NeedHelpTemplate from './NeedHelpTemplate';
import '../css/dashboard.css';
import { HandymanJobTable, CustomerJobTable } from './jobTable';
import { Link } from 'react-router-dom';

import {
  faMoneyBillAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const textStyle = {
  color: 'White'
};

const Dashboard = (props) => {
  // This is for the /customer Route
  if (document.location.pathname === '/customer' || document.location.pathname === '/customer/') {
    const { jobs, userInfo, error } = props
    
    const handleTotalJobs = () => {
      if (userInfo.length === 0) {
        return 'Calculating...'
      }

      if (error) {
        return 'Failed to fetch... Please Reload the Page';
      }

      return userInfo.jobPosted.length;
    };

    const handleCompletedJob = () => {
      if (userInfo.length === 0) {
        return 'Calculating...'
      }

      if (error) {
        return 'Failed to fetch... Please Reload the Page';
      }

      return userInfo.jobCompleted.length;
    };

    const handleAssignedJob = () => {
      if (userInfo.length === 0) {
        return 'Calculating...'
      }

      if (error) {
        return 'Failed to fetch... Please Reload the Page';
      }

      return userInfo.isAssigned.length;
    };

    const handleCanceledJob = () => {
      if (userInfo.length === 0) {
        return 'Calculating...'
      }

      if (error) {
        return 'Failed to fetch... Please Reload the Page';
      }

      return userInfo.jobsCanceled
    };

    const logic = () => {
      if (jobs === undefined) {
        return (
          <tr>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
          </tr>
        );
      }

      if (jobs.length === 0) {
        return (
          <tr>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
          </tr>
        );
      };

      
      
      const mappedJob = jobs.map(job => <CustomerJobTable
        id={job._id}
        key={job._id}
        jobName={job.jobName}
        isAssigned={job.isAssigned}

      />);
      return mappedJob;
    }
    return (
      <div>
        <NeedHelpTemplate />
        <div className="dashboard">
          <h3 className="dashboard-manage" id="dash-head">{`${userInfo.name}'s Dashboard`}</h3>
          <div className="row" style={{
            justifyContent: 'center',
          }}>
            <div className="col-sm-6 col-md-6 col-xl-3" id="job-card">
              <div style={{backgroundColor: 'Blue'}} className="card" id="card-pricing">
                <div className="card-body">
                  <h5 style={textStyle} className="card-title">Total Jobs</h5>
                  <p style={textStyle} className="card-text"><b>{handleTotalJobs()}</b></p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-3" id="job-card">
              <div style={{backgroundColor: 'yellowgreen'}} className="card" id="card-pricing">
                <div className="card-body">
                  <h5 style={textStyle} className="card-title">Completed Jobs</h5>
                  <p style={textStyle} className="card-text"><b>{handleCompletedJob()}</b></p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-3" id="job-card">
              <div style={{backgroundColor: 'Red'}} className="card" id="card-pricing">
                <div className="card-body">
                  <h5 style={textStyle} className="card-title">Cancelled Jobs</h5>
                  <p style={textStyle} className="card-text"><b>{handleCanceledJob()}</b></p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-3" id="job-card">
              <div style={{backgroundColor: 'Green'}} className="card" id="card-pricing">
                <div className="card-body">
                  <h5 style={textStyle} className="card-title">Assigned Jobs</h5>
                  <p style={textStyle} className="card-text"><b>{handleAssignedJob()}</b></p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="dashboard-manage" id="dash-head">Quick Start</h3>
            <div className="quick-start-div">
              <div className="card" id="card-pricing" style={{
                marginRight: '20px',
              }}>
                <div className="card-body">
                  <div style={{
                    borderBottom: '1px solid grey',
                    marginBottom: '1em'
                  }}>
                    <Link to='/customer/book-service'>
                      <h5 className="card-title" style={{
                        justifyContent: 'flex-start',
                        marginBottom: '10px'
                      }}>Request A Handyman</h5>
                    </Link>
                  </div>
                  <div style={{
                    borderBottom: '1px solid grey',
                    marginBottom: '1em'
                  }}>
                    <Link to='/customer/pricing'>
                      <h5 className="card-title" style={{
                        justifyContent: 'flex-start',
                        marginBottom: '10px'
                      }}>Buy Plan</h5>
                    </Link>
                  </div>
                  <div style={{
                    borderBottom: '1px solid grey',
                    marginBottom: '1em'
                  }}>
                    <Link to='/customer/setting'>
                      <h5 className="card-title" style={{
                        justifyContent: 'flex-start',
                      }}>Manage your account</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="dashboard-manage" id="dash-head">List Of Jobs - <Link to='/customer/job'> View More</Link></h3>
            <div id="table">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Job Name</th>
                    <th>Assigned</th>
                  </tr>
                </thead>
                <tbody>
                  {logic()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
    );
  } else if (document.location.pathname === '/handyman' || '/handyman/') {
    // This is the for the /handyman Route
      const { jobs, data } = props;

      const handleTotalJobs = () => {
        if (data.length === 0) {
          return 'Calculating...'
        }

        return data.jobsChosen.length + data.jobsCompleted.length + data.canceledJobs;
      };

      const handleCompletedJob = () => {
        if (data.length === 0) {
          return 'Calculating...'
        }

        return data.jobsCompleted.length;
      };

      const handleCanceledJob = () => {
        if (data.length === 0) {
          return 'Calculating...'
        }

        return data.canceledJobs;
      }

      const handleAssignedJob = () => {
        if (data.length === 0) {
          return 'Calculating...'
        }

        return data.jobsChosen.length;
      };

      const handleAmount = () => {
        if (data.length === 0) {
          return 'Calculating...'
        }

        return data.amountEarned;
      };

      const logic = () => {
        if (jobs === undefined) {
          return (
            <tr>
              <td>N/A</td>
              <td>N/A</td>
              <td>N/A</td>
              <td>N/A</td>
              <td>N/A</td>
            </tr>
          );
        }

        if (jobs.length === 0) {
          return (
            <tr>
              <td>N/A</td>
              <td>N/A</td>
              <td>N/A</td>
              <td>N/A</td>
              <td>N/A</td>
            </tr>
          );
        }
        
        const mappedJob = jobs.map(job => <HandymanJobTable
          id={job._id}
          key={job._id}
          customerName={job.jobPoster.name}
          customerPhone={job.jobPoster.phone}
          jobName={job.jobName}
          jobCompleted={job.jobCompleted}

        />);
        return mappedJob;
      }
      return (
        <div>
          <NeedHelpTemplate />
          <div className="dashboard">
            <h3 className="dashboard-manage" id="dash-head">{`${data.name}'s Dashboard`}</h3>
            <div className="revenue-card">
              <div className="row">
                <div className="col-12">
                  <div style={{backgroundColor: 'Violet'}} className="card" id="card-border">
                    <div className="card-body">
                      <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}>
                        <FontAwesomeIcon icon={faMoneyBillAlt} size="4x" style={{ color: 'white' }}/>
                      </div>
                      <h5 style={textStyle} className="card-title"><b>Revenue</b></h5>
                      <p style={textStyle} className="card-text"><b>Income - ₦{handleAmount()}</b></p>
                      <p style={textStyle} className="card-text"><b>Available Income - ₦{handleAmount() - (handleAmount() * 0.05) === isNaN ? 'Calculating' : handleAmount() - (handleAmount() * 0.05)}</b></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{
              justifyContent: 'center',
            }}>
              <div className="col-sm-6 col-md-6 col-xl-3" id="job-card">
                <div style={{backgroundColor: 'Blue'}} className="card" id="card-pricing">
                  <div className="card-body">
                    <h5 style={textStyle} className="card-title">Total Jobs</h5>
                    <p style={textStyle} className="card-text"><b>{handleTotalJobs()}</b></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-xl-3" id="job-card">
                <div style={{backgroundColor: 'yellowgreen'}} className="card" id="card-pricing">
                  <div className="card-body">
                    <h5 style={textStyle} className="card-title">Completed Jobs</h5>
                    <p style={textStyle} className="card-text"><b>{handleCompletedJob()}</b></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-xl-3" id="job-card">
                <div style={{backgroundColor: 'Red'}} className="card" id="card-pricing">
                  <div className="card-body">
                    <h5 style={textStyle} className="card-title">Cancelled Jobs</h5>
                    <p style={textStyle} className="card-text"><b>{handleCanceledJob()}</b></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-xl-3" id="job-card">
                <div style={{backgroundColor: 'Green'}} className="card" id="card-pricing">
                  <div className="card-body">
                    <h5 style={textStyle} className="card-title">Assigned Jobs</h5>
                    <p style={textStyle} className="card-text"><b>{handleAssignedJob()}</b></p>
                  </div>
                </div>
              </div>
            </div>
            <div>
            <h3 className="dashboard-manage" id="dash-head">Quick Start</h3>
            <div className="quick-start-div">
              <div className="card" id="card-pricing" style={{
                marginRight: '20px',
              }}>
                <div className="card-body">
                  <div style={{
                    borderBottom: '1px solid grey',
                    marginBottom: '1em'
                  }}>
                    <Link to='/handyman/accept-job'>
                      <h5 className="card-title" style={{
                        justifyContent: 'flex-start',
                        marginBottom: '10px'
                      }}>Start Earning</h5>
                    </Link>
                  </div>
                  <div style={{
                    borderBottom: '1px solid grey',
                    marginBottom: '1em'
                  }}>
                    <Link to='/handyman/job'>
                      <h5 className="card-title" style={{
                        justifyContent: 'flex-start',
                        marginBottom: '10px'
                      }}>View Jobs</h5>
                    </Link>
                  </div>
                  <div style={{
                    borderBottom: '1px solid grey',
                    marginBottom: '1em'
                  }}>
                    <Link to='/handyman/setting'>
                      <h5 className="card-title" style={{
                        justifyContent: 'flex-start',
                      }}>Manage your account</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div>
              <h3 className="dashboard-manage" id="dash-head">List Of Your Jobs - <Link to='/handyman/job'> View More</Link></h3>
            <div id="table">
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Job ID</th>
                      <th>Customer Name</th>
                      <th>Customer Phone Number</th>
                      <th>Job Name</th>
                      <th>Approval</th>
                    </tr>
                  </thead>
                  <tbody>
                    {logic()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          </div>
        </div>
      );
    }
  };

export default Dashboard;