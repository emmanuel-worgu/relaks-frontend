import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import PricingPlan from '../statelessComponent/PricingPlan';
import Loading from '../statelessComponent/Loading';

const Pricing = () => {
  const[pageLoad, setPageLoad] = useState(false);
  const[isAuth, setIsAuth] = useState(false);
  const[loading, setLoading] = useState({
    _prime: false,
    _xtra: false,
    _basic: false,
  });
  const[mon, setMon] = useState(true);
  const[err, setErr] = useState({
    isTrue: false,
    data: '',
  });

  const history = useHistory();

  const token = localStorage.getItem('jwt_token');

  const handleMon = () => {
    setMon(!mon);
  }

  const closeButton = () => {
    setErr({
      isTrue: false,
    });
  };

  const getData = async () => {
    try {
    setPageLoad(true);
    const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/customers/dashboard';
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'auth-token': token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (response.status === 200 || response.status === 201) {
      if (response.status === 200) {
        setIsAuth(true);
        setPageLoad(false);

      } else if (response.status === 201) {
        setIsAuth(true);
        setPageLoad(false)

      }
      setIsAuth(true);
      setPageLoad(false);
    } else {
      console.log('error');
      setIsAuth(false);
      setPageLoad(false);
    }
    } catch (error) {
      setPageLoad(false);
    }
  };

  useEffect(() => {
    getData()
  }, []);
    
    // Each of Package function will redirect to the payment page once the response status is 200 or 201
    const prime = async() => {
      const data = {
        planName: 'Prime',
        mon,
      }

      // console.log(data);

      try {
        setLoading({
          _prime: true,
        });
        const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/customers/choose-plan';

        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'auth-token': token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })

        if (response.status === 200) {
          setLoading({
            _prime: false
          });
          history.push('/customer/pay');
        } else {
          const message = await response.json()
          // console.log(message.errMessage);
          setErr({
            isTrue: true,
            data: message.errMessage,
          })
          setLoading({
            _prime: false,
          });
        }
      } catch (error) {
        setLoading({
          _prime: false,
        });
      }
    };


  // Basic Package
    const basic = async() => {
      const data = {
        planName: 'Basic',
        mon,
      }
      try {
        setLoading({
          _basic: true,
        });
        const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/customers/choose-plan';

        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'auth-token': token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })

        if (response.status === 200) {
          setLoading({
            _basic: false,
          });
          history.push('/customer/pay');
        } else {
          const message = await response.json();
          console.log(message);
          setLoading({
            _basic: false,
          });
          setErr({
            isTrue: true,
            data: message.errMessage,
          })
        }
      } catch (error) {
        setLoading({
          _basic: false,
        });
      }
    };

    const xtra = async() => {
      const data = {
        planName: 'Xtra',
        mon,
      }
      try {
        setLoading({
          _xtra: true,
        });
        const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/customers/choose-plan';

        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'auth-token': token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })

        if (response.status === 200) {
          setLoading({
            _xtra: false,
          });
          history.push('/customer/pay');
        } else {
          const message = await response.json();
          setLoading({
            _xtra: false,
          });
          setErr({
            isTrue: true,
            data: message.errMessage,
          })
        }
      } catch (error) {
        setLoading({
          _xtra: false,
        });
      }
    };

  if (pageLoad) {
    return (
      <Loading />
    );
  }

  return (
    <div>
      <Helmet>
        <title>Relaks Pricing | Subcribe, let's Relaks pay for your next home project</title>
        <meta name="description" content="Let's pay for your next home project" />
      </Helmet>
      <PricingPlan basic={basic}
        xtra={xtra}
        prime={prime}
        loading={loading}
        isAuth={isAuth}
        mon={mon}
        handleMon={handleMon}
        err={err}
        closeButton={closeButton}
        // plan={plan}
      />
    </div>
  );
};

export default Pricing;