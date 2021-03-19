import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import '../css/nav.css'
import NavLogo from '../assest/RelaksLogo.png';

// This is the Homepage Nav when not authenticated
export const NormalNav = () => {
  const history = useHistory();
  const handleNavButton = () => {
    return (
      history.push('/customer/register')
    );
  };
  return (
    <div className="nav-content">
      <div>
        <Link to="/">
          <img src={NavLogo} className="nav-logo" alt="relaks logo" />
        </Link>
      </div>
      <div className="nav-action">
        <div className="nav-login">
          <h4><Link to="/customer/login">Login</Link></h4>
        </div>
        <div className="nav-subcribe">
          <button onClick={handleNavButton} className="nav-subcribe-button">
            <h4>
              <b>Subcribe</b>
            </h4>
          </button>
        </div>
      </div>
    </div>
  );
};

// This is the home page nav when authenticated
export const AuthNav = () => {
  const history = useHistory();
  const handleNavButton = () => {
    return (
      history.push('/customer')
    );
  };
  return (
    <div className="nav-content">
      <div>
        <Link to="/">
          <img src={NavLogo} className="nav-logo" alt="relaks logo" />
        </Link>
      </div>
      <div className="nav-action">
        {/* <div className="nav-login">
          <h4><Link to="/customer/login">Login</Link></h4>
        </div> */}
        <div className="nav-subcribe">
          <button onClick={handleNavButton} className="nav-subcribe-button">
            <h4>
              <b>Dashboard</b>
            </h4>
          </button>
        </div>
      </div>
    </div>
  );
};

// This is the handyman dashboard nav
export const HandymanDashboardNav = () => {

  // const history = useHistory();
  const logouthandler = () => {
    localStorage.clear('jwt_token');

    // history.push('/');
  };

  // The if/else statement checks if it is desktop or mobile
  if (window.screen.width > 780) {
    return (
      <div className="dashboardnav">
      <div className="dashboardnav-content">
        <ul className="dashboardnav-ul">
          <li className="dashboardnav-li"><Link to="/customer">Dashboard</Link></li>
          <li className="dashboardnav-li"><Link to="/handyman/accept-job">Accept Jobs</Link></li>
          <li className="dashboardnav-li"><Link to="#">Request Payment</Link></li>
          <li className="dashboardnav-li"><Link to="#">Settings</Link></li>
          <li className="dashboardnav-li" onClick={logouthandler}><Link to="/">Logout</Link></li>
          <li className="dashboardnav-li"><Link to="#">Leave Feedback</Link></li>
        </ul>
      </div>
    </div>
    );
  } else {
    return (
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <Link to ="/">
                  <img className = "nav-logo" src = {NavLogo}  alt="Relaks-Logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to ="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        );
  }
}; 

// The Customer Dashboard Nav
export const CustomerDashboardNav = () => {

  // const history = useHistory();
  const logouthandler = () => {
    localStorage.clear('jwt_token');

    // history.push('/');
  };

  // The if/else statement checks if it is desktop or mobile
  // if (window.screen.width > 780) {
    return (
      <nav>
        <div className="harmburger">
          <button>Menu</button>
        </div>
        <div className="dashboardnav">
        <div className="dashboardnav-content">
          <h5 className="dashboard-header">Hi, Emmanuel Worgu</h5>
          <ul className="dashboardnav-ul">
            <li className="dashboardnav-li"><Link to="/customer">Dashboard</Link></li>
            <li className="dashboardnav-li"><Link to="/customer/book-service">Book Service</Link></li>
            <li className="dashboardnav-li"><Link to="/customer/job">Completed Jobs</Link></li>
            <li className="dashboardnav-li"><Link to="/customer/pricing">Choose A Plan</Link></li>
            <li className="dashboardnav-li"><Link to="/customer/setting">Settings</Link></li>
            <li className="dashboardnav-li" onClick={logouthandler}><Link to="/">Logout</Link></li>
            <li className="dashboardnav-li"><Link to="#">Leave Feedback</Link></li>
          </ul>
        </div>
      </div>
      </nav>
    );
  // } else {
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <div className="container-fluid">
//             <Link to ="/">
//               <img className = "nav-logo" src = {NavLogo}  alt="Relaks-Logo"/>
//             </Link>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNavDropdown">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <Link to ="/">Home</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/about">About</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/contact">Contact</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }
}; 