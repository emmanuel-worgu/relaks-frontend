import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { FaCog } from 'react-icons/fa';

import '../css/nav.css'
import NavLogo from '../assest/RelaksLogo.png';
import {
  faBars,
  faCog,
  faTachometerAlt,
  faSignOutAlt,
  faBullhorn,
  faBriefcase,
  faShoppingCart,
  faTools,
  faMoneyBillWave,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
          <h4 className="nav-header"><Link to="/customer/login">Login</Link></h4>
        </div>
        <div className="nav-subcribe">
          <button onClick={handleNavButton} className="nav-subcribe-button">
            <h4 className="nav-header">
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

// The Handyman Dashboard Nav
export const HandymanDashboardNav = () => {
  const[menuButton, setMenuButton] = useState(false);
  const[response, setResponse] = useState({
    loading: false,
    data: '',
  });

  const history = useHistory();
  


  const handleMenuButton = () => {
    setMenuButton(!menuButton);
  };

  const logouthandler = () => {
    localStorage.clear('jwt_token');
  };
  
  const getData = async ()  => {
    try {
      setResponse({
        loading: true,
      });
      const url =  'https://enigmatic-ocean-25180.herokuapp.com/api/handymen/dashboard';
      const token = localStorage.getItem('jwt_token');
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'auth-token': token,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if(response.status === 200) {
        setResponse({
          loading: false,
          data: data,
        });
      }
      if(response.status === 401) {
        history.push('/handyman/login');
      };
    } catch (error) {
      setResponse({
        loading: false,
        data: 'Something Went wrong. Try Again!!',
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <nav>
      <div className="harmburger">
      <FontAwesomeIcon icon={faBars} size="3x" onClick={handleMenuButton} className="harmburger-icon" style={{
        color: menuButton ? 'blue': null
      }} />
        <div>
          <img src={NavLogo} className="nav-logo" alt="relaks logo" />
        </div>
      </div>
      <div className={menuButton ? 'mystyle' : 'dashboardnav'}>
      <div className="dashboardnav-content">
        <h5 className="dashboard-header">{response.loading ? 'Loading...' : `Hi, ${response.data.name}`}</h5>
        <ul className="dashboardnav-ul footer-ul">
          <li className="dashboardnav-li"><Link to="/handyman"><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</Link></li>
          <li className="dashboardnav-li"><Link to="/handyman/accept-job"><FontAwesomeIcon icon={faClipboardCheck} /> Accept Jobs</Link></li>
          <li className="dashboardnav-li"><Link to="/handyman/job"><FontAwesomeIcon icon={faBriefcase} /> My Jobs</Link></li>
          <li className="dashboardnav-li"><Link to="/handyman/request-payment"><FontAwesomeIcon icon={faMoneyBillWave} /> Pay Out</Link></li>
          <li className="dashboardnav-li"><Link to="/handyman/setting"><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
          <li className="dashboardnav-li" onClick={logouthandler}><Link to="/"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link></li>
          <li className="dashboardnav-li"><Link to="#"><FontAwesomeIcon icon={faBullhorn} /> Feedback</Link></li>
        </ul>
      </div>
    </div>
    </nav>
  );
}; 

// The Customer Dashboard Nav
export const CustomerDashboardNav = () => {
  const[menuButton, setMenuButton] = useState(false);
  const[response, setResponse] = useState({
    loading: false,
    data: ''
  });

  const history = useHistory();
  


  const handleMenuButton = () => {
    setMenuButton(!menuButton);
  };

  const logouthandler = () => {
    localStorage.clear('jwt_token');
  };

  const getData = async ()  => {
    try {
      setResponse({
        loading: true,
      });
      const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/customers/dashboard';
      const token = localStorage.getItem('jwt_token');
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'auth-token': token,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if(response.status === 200) {
        const data = await response.json();
        setResponse({
          loading: false,
          data,
        });
      }
      if(response.status === 201) {
        const data = await response.json();
        setResponse({
          loading: false,
          data: data.authUser,
        })
        history.push('/customer/pricing');
      }
      if(response.status === 401) {
        history.push('/customer/login');
      };
    } catch (error) {
      setResponse({
        loading: false,
        data: 'Something Went wrong. Try Again!!',
      });
    }
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <nav>
      <div className="harmburger">
        <FontAwesomeIcon icon={faBars} size="3x" onClick={handleMenuButton} className="harmburger-icon" style={{
          color: menuButton ? 'blue' : null,
        }}/>
        <div>
          <img src={NavLogo} className="nav-logo" alt="relaks logo" />
        </div>
      </div>
      <div className={menuButton ? 'mystyle' : 'dashboardnav'}>
      <div className="dashboardnav-content">
        <h5 className="dashboard-header">{response.loading ? 'Loading...' : `Hi, ${response.data.name}`}</h5>
        <ul className="dashboardnav-ul footer-ul">
          <li className="dashboardnav-li"><Link to="/customer"><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</Link></li>
          <li className="dashboardnav-li"><Link to="/customer/book-service"><FontAwesomeIcon icon={faTools} /> Request Service</Link></li>
          <li className="dashboardnav-li"><Link to="/customer/job"><FontAwesomeIcon icon={faBriefcase} /> My Jobs</Link></li>
          <li className="dashboardnav-li"><Link to="/customer/pricing"><FontAwesomeIcon icon={faShoppingCart} /> Buy Plan</Link></li>
          <li className="dashboardnav-li"><Link to="/customer/setting"><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
          <li className="dashboardnav-li" onClick={logouthandler}><Link to="/"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link></li>
          <li className="dashboardnav-li"><Link to="#"><FontAwesomeIcon icon={faBullhorn} /> Feedback</Link></li>
        </ul>
      </div>
    </div>
    </nav>
  );
}; 