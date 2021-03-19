import React, { useState, useEffect, useRef} from 'react';
import { useHistory } from 'react-router-dom';
import Job from '../statelessComponent/Job';
import { CustomerDashboardNav } from '../statelessComponent/Nav';

const BookJob = () => {
  const[jobPoster, setJobPoster] = useState('');
  const[work, setWork] = useState('')
  const[workInfo, setWorkInfo] = useState('');
  const[dateToCome, setDateToCome] = useState('');
  const[timeToCome, setTimeToCome] = useState('');
  const[serviceCategory, setServiceCategory] = useState({
    value: ''
  });
  const[homeAddress, setHomeAddress] = useState('');
  const[busStop, setBusStop] = useState('');
  const[city, setCity] = useState('');
  const[state, setState] = useState('');
  const[response, setResponse] = useState({
    message: {},
    loading: false,
    error: ''
  });
  const[isAuth, setIsAuth] = useState(false);
  const history = useHistory();
  let mounted = useRef(true);
  
  // Variable to abort the fetch request
  // Will work on it later
  const abortController = new AbortController();
  const signal = abortController.signal;

  // This function will check if the user is authenticated
  // it also fetch the user info from the server and return isAuth true
  useEffect(() => {
    const getData = async ()  => {
    try {
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
      const data = await response.json();
      if(mounted.current && response.status === 200) {
        console.log(data);
        setIsAuth(true);
      }
      if(mounted.current && response.status === 401) {
        console.log(data);
        console.log('Not Authenticated!!')
        history.push('/customer/login');
      };
    } catch (error) {
      console.log(error);
    }
  };

  // Cleans up the DOM
  getData();
    return async () => {
      mounted.current = false
    };
  });

  const handleWork = (e) => {
    setWork(e.target.value);
    e.preventDefault();
  };

  const handleWorkInfo = (e) => {
    setWorkInfo(e.target.value);
    e.preventDefault();
  };

  const handleDateToCome = (e) => {
    setDateToCome(e.target.value);
    e.preventDefault();
  };

  const handleTimeToCome = (e) => {
    setTimeToCome(e.target.value);
    e.preventDefault();
  };

  const handleServiceCategory = (e) => {
    setServiceCategory({ value: e.target.value });
    e.preventDefault();
  };

  const handleHomeAddress = (e) => {
    setHomeAddress(e.target.value);
    e.preventDefault();
  };

  const handleBusStop = (e) => {
    setBusStop(e.target.value);
    e.preventDefault();
  };

  const handleCity = (e) => {
    setCity(e.target.value);
    e.preventDefault();
  };

  const handleState = (e) => {
    setState(e.target.value);
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    setResponse({
      loading: true
    });
    if (work === '') {
      return setResponse({
        loading: false,
        error: 'What do you want to fix. This is required!!'
      });
    } else if (serviceCategory.value === '') {
      return setResponse({
        loading: false,
        error: 'Please Choose a category that fit your job!!'
      });
    } else if (dateToCome === '') {
      return setResponse({
        loading: false,
        error: 'Please tell us the date to come!!'
      });
    } else if (timeToCome === '') {
      return setResponse({
        loading: false,
        error: 'What time should we come!!'
      });
    } else if (workInfo === '') {
      return setResponse({
        loading: false,
        error: 'Please Provide us with a little info about your work!!'
      });
    } else if (homeAddress === '') {
      return setResponse({
        loading: false,
        error: 'What is your home address!!'
      });
    } else if (busStop === '') {
      return setResponse({
        loading: false,
        error: 'What is your nearest bus stop!!'
      });
    } else if (city === '') {
      return setResponse({
        loading: false,
        error: 'What is your city!!'
      });
    } else if (state === '') {
      return setResponse({
        loading: false,
        error: 'Please provide us with your state!!'
      });
    };

    const data = {
      jobBooked: {
        jobName: work
      },
      jobScheduled: {
        date: dateToCome
      },
      jobDescription: workInfo,
      location: {
        state,
        city,
        nearestBusStop: busStop
      }
    }
    try {
      const url = 'http://localhost:5000/api/customers/book-service';
      const token = localStorage.getItem('jwt_token');
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "auth-token": token,
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Access-Control-Allow-Origin-": "no-cors"
        }
    });
    if (response.status === 200) {
      const message = await response.json();
      setResponse({
        loading: false,
        message,
      });
      console.log(message);
      history.push('/customer/book-service/confirm');
    }
    if (response.status === 201) {
      const message = await response.json();
      return setResponse({
        loading: false,
        error: message.errMessage || message,
      });
    }
    if (response.status === 400) {
      const message = await response.json();
      return setResponse({
        loading: false,
        error: message.errMessage,
      });
    }
    if (response.status === 401) {
      const message = await response.json();
      setResponse({
        loading: false,
        error: message.errMessage,
      });
      setTimeout(() => {
        history.push('/customer/login');
      },6000);
    }
    } catch (error) {
      setResponse({
        loading: false,
        error: 'There was a problem!! Our Engineers have been Notified. Try Again!!'
      })
      console.log(error);
    }
  };

  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  });
  return (
    <div>
      <CustomerDashboardNav />
      <Job work={work}
        handleWork={handleWork}
        serviceCategory={serviceCategory.value}
        handleServiceCategory={handleServiceCategory}
        dateToCome={dateToCome}
        handleDateToCome={handleDateToCome} 
        timeToCome={timeToCome}
        handleTimeToCome={handleTimeToCome}
        workInfo={workInfo}
        handleWorkInfo={handleWorkInfo}
        homeAddress={homeAddress}
        handleHomeAddress={handleHomeAddress}
        busStop={busStop}
        handleBusStop={handleBusStop}
        city={city}
        handleCity={handleCity}
        state={state}
        handleState={handleState}
        handleSubmit={handleSubmit}
        response={response}
      />
    </div>
  )
};

export default BookJob;