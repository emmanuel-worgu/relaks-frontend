import React from 'react';
import { useHistory } from 'react-router-dom';
import NeedHelpTemplate from './NeedHelpTemplate';
import { CustomerDashboardNav } from './Nav';
import Footer from './Footer';
import '../css/dashboard.css';

const Dashboard = (props) => {

  return (
    <div>
      <NeedHelpTemplate />
      <div className="dashboard">
        <h5 className="dashboard-manage">Dashboard - manage all your account here</h5>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-xl-3" id="job-card">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Total Jobs</h5>
                <p className="card-text"><b>20</b></p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-xl-3" id="job-card">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Completed Jobs</h5>
                <p className="card-text"><b>12</b></p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-xl-3" id="job-card">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Cancelled Jobs</h5>
                <p className="card-text"><b>7</b></p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-xl-3" id="job-card">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Approved Jobs</h5>
                <p className="card-text"><b>1</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h5 className="dashboard-manage" id="joblist">List Of Jobs</h5>
      </div>
  );
};

export default Dashboard;