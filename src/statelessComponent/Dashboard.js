import React from 'react';
import '../css/dashboard.css';

const Dashboard = (props) => {
  return (
    <div>
      <div className="dashboard">
        <div className="row">
          <div className="col-xl-2">
            <h3>DASHBOARD</h3>
            <ul>
              <li className="dashboard-list">Get Covered</li>
              <li className="dashboard-list">Account Settings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;