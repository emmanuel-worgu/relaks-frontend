import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { FaCog } from 'react-icons/fa';

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
      const url = 'http://localhost:5000/api/handymen/dashboard';
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
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <nav>
      <div className="harmburger">
        <button onClick={handleMenuButton}>Menu</button>
        <div>
          <img src={NavLogo} className="nav-logo" alt="relaks logo" />
        </div>
      </div>
      <div className={menuButton ? 'mystyle' : 'dashboardnav'}>
      <div className="dashboardnav-content">
        <h5 className="dashboard-header">{response.loading ? 'Loading...' : `Hi, ${response.data.name}`}</h5>
        <ul className="dashboardnav-ul">
          <li className="dashboardnav-li"><Link to="/handyman">Dashboard</Link></li>
          <li className="dashboardnav-li"><Link to="/handyman/accept-job">Accept Jobs</Link></li>
          <li className="dashboardnav-li"><Link to="/handyman/job">My Jobs</Link></li>
          <li className="dashboardnav-li"><Link to="/handyman/request-payment">Request Payment</Link></li>
          <li className="dashboardnav-li"><Link to="/handyman/setting">Settings</Link></li>
          <li className="dashboardnav-li" onClick={logouthandler}><Link to="/">Logout</Link></li>
          <li className="dashboardnav-li"><Link to="#">Leave Feedback</Link></li>
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
      const url = 'http://localhost:5000/api/customers/dashboard';
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
      if(response.status === 401) {
        const data = response.json();
      };
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <nav>
      <div className="harmburger">
        <button className="menu-button" onClick={handleMenuButton}>Menu</button>
        <div>
          <img src={NavLogo} className="nav-logo" alt="relaks logo" />
        </div>
      </div>
      <div className={menuButton ? 'mystyle' : 'dashboardnav'}>
      <div className="dashboardnav-content">
        <h5 className="dashboard-header">{response.loading ? 'Loading...' : `Hi, ${response.data.name}`}</h5>
        <ul className="dashboardnav-ul">
          <li className="dashboardnav-li"><Link to="/customer">Dashboard</Link></li>
          <li className="dashboardnav-li"><Link to="/customer/book-service">Request A Handyman</Link></li>
          <li className="dashboardnav-li"><Link to="/customer/job">My Jobs</Link></li>
          <li className="dashboardnav-li"><Link to="/customer/pricing">Choose A Plan</Link></li>
          <li className="dashboardnav-li"><Link to="/customer/setting">Settings</Link></li>
          <li className="dashboardnav-li" onClick={logouthandler}><Link to="/">Logout</Link></li>
          <li className="dashboardnav-li"><Link to="#">Leave Feedback</Link></li>
        </ul>
      </div>
    </div>
    </nav>
  );
}; 