import React from 'react';
import NeedHelpTemplate from './NeedHelpTemplate';
import '../css/dashboard.css';
import { HandymanJobTable, CustomerJobTable } from './jobTable';

const textStyle = {
  color: 'White'
};

const Dashboard = (props) => {
  // This is for the /customer Route
  if (document.location.pathname === '/customer' || document.location.pathname === '/customer/') {
    const { jobs, userInfo, loading, error } = props

    console.log(userInfo);
    console.log(jobs)
    
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

    // jobs === undefined ? console.log('Fetching...') : jobs.map(job => console.log(job));
    const logic = () => {
      if (jobs === undefined) {
        return <p>Fetching....</p>
      }

      if (jobs.length === 0) {
        return (
          <tr>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
          </tr>
        );
      }
      
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
          <h5 className="dashboard-manage">Dashboard - Manage your account here!!</h5>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-xl-3" id="job-card">
              <div style={{backgroundColor: 'Blue'}} className="card">
                <div className="card-body">
                  <h5 style={textStyle} className="card-title">Total Jobs</h5>
                  <p style={textStyle} className="card-text"><b>{handleTotalJobs()}</b></p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-3" id="job-card">
              <div style={{backgroundColor: 'yellowgreen'}} className="card">
                <div className="card-body">
                  <h5 style={textStyle} className="card-title">Completed Jobs</h5>
                  <p style={textStyle} className="card-text"><b>{handleCompletedJob()}</b></p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-3" id="job-card">
              <div style={{backgroundColor: 'Red'}} className="card">
                <div className="card-body">
                  <h5 style={textStyle} className="card-title">Cancelled Jobs</h5>
                  <p style={textStyle} className="card-text"><b>{handleCanceledJob()}</b></p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-3" id="job-card">
              <div style={{backgroundColor: 'Green'}} className="card">
                <div className="card-body">
                  <h5 style={textStyle} className="card-title">Assigned Jobs</h5>
                  <p style={textStyle} className="card-text"><b>{handleAssignedJob()}</b></p>
                </div>
              </div>
            </div>
          </div>
          <div style={{marginBottom: '10em'}}>
            <h5 className="dashboard-manage" id="joblist">List Of Jobs</h5>
            <div>
              <table id="table">
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
      const { jobs, data } = props
      console.log(data);

      const handleTotalJobs = () => {
        if (data.length === 0) {
          return 'Calculating...'
        }

        return data.jobsChosen.length + data.jobsCompleted.length;
      };

      const handleCompletedJob = () => {
        if (data.length === 0) {
          return 'Calculating...'
        }

        return data.jobsCompleted.length;
      };

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

      console.log(jobs);

      // jobs === undefined ? console.log('Fetching...') : jobs.map(job => console.log(job));
      const logic = () => {
        if (jobs === undefined) {
          return <p>Fetching....</p>
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
          jobCompleted={job.jobCompleted}

        />);
        return mappedJob;
      }
      return (
        <div>
          <NeedHelpTemplate />
          <div className="dashboard">
            <h5 className="dashboard-manage">Dashboard - Manage your account here!!</h5>
            <div className="revenue-card">
              <div className="row">
                <div className="col-12">
                  <div style={{backgroundColor: 'Violet'}} className="card" id="card-border">
                    <div className="card-body">
                      <h5 style={textStyle} className="card-title">Revenue</h5>
                      <p style={textStyle} className="card-text"><b>Income - ₦{handleAmount()}</b></p>
                      <p style={textStyle} className="card-text"><b>Available Income - ₦{handleAmount() - (handleAmount() * 0.05) === isNaN ? 'Calculating' : handleAmount() - (handleAmount() * 0.05)}</b></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-xl-3" id="job-card">
                <div style={{backgroundColor: 'Blue'}} className="card">
                  <div className="card-body">
                    <h5 style={textStyle} className="card-title">Total Jobs</h5>
                    <p style={textStyle} className="card-text"><b>{handleTotalJobs()}</b></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-xl-3" id="job-card">
                <div style={{backgroundColor: 'yellowgreen'}} className="card">
                  <div className="card-body">
                    <h5 style={textStyle} className="card-title">Completed Jobs</h5>
                    <p style={textStyle} className="card-text"><b>{handleCompletedJob()}</b></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-xl-3" id="job-card">
                <div style={{backgroundColor: 'Red'}} className="card">
                  <div className="card-body">
                    <h5 style={textStyle} className="card-title">Cancelled Jobs</h5>
                    <p style={textStyle} className="card-text"><b>7</b></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-xl-3" id="job-card">
                <div style={{backgroundColor: 'Green'}} className="card">
                  <div className="card-body">
                    <h5 style={textStyle} className="card-title">Assigned Jobs</h5>
                    <p style={textStyle} className="card-text"><b>{handleAssignedJob()}</b></p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="dashboard-manage" id="joblist">List Of Jobs</h5>
            <div id="table">
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
      );
    }
  };

export default Dashboard;