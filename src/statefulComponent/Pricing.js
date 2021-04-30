import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import PricingPlan from '../statelessComponent/PricingPlan';
import mixpanel from 'mixpanel-browser';

const Pricing = () => {
  mixpanel.init("784360e9005522fb8d2cccd326b57f78");
  // const[user, setUser] = useState('');
  // const[plan, setPlan] = useState('');
  const[isAuth, setIsAuth] = useState(false);
  const[loading, setLoading] = useState({
    _prime: false,
    _xtra: false,
    _basic: false,
  });

  const history = useHistory();

  const token = localStorage.getItem('jwt_token');

  const getData = async () => {
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
        const user = await response.json()

        mixpanel.identify(user._id)
      } else if (response.status === 201) {
        setIsAuth(true);
        const user = await response.json();

        mixpanel.identify(user.authUser._id);
        mixpanel.people.set({
          stage: 'Pricing Page',
        });
      }
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  };

  useEffect(() => {
    getData()
  });
    
    // Each of Package function will redirect to the payment page once the response status is 200 or 201
    const prime = async() => {
      const data = {
        planName: 'Prime'
      }

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
          mixpanel.people.set({
            planName: 'Relaks Prime'
          });
          setLoading({
            _prime: false
          });
          history.push('/customer/pay');
        } else {
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

    const basic = async() => {
      const data = {
        planName: 'Basic'
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
          mixpanel.people.set({
            planName: 'Relaks Prime'
          });
          setLoading({
            _basic: false,
          });
          history.push('/customer/pay');
        } else {
          setLoading({
            _basic: false,
          });
        }
      } catch (error) {
        setLoading({
          _basic: false,
        });
      }
    };

    const xtra = async() => {
      const data = {
        planName: 'Xtra'
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
          mixpanel.people.set({
            planName: 'Relaks Prime'
          });
          setLoading({
            _xtra: false,
          });
          history.push('/customer/pay');
        } else {
          setLoading({
            _xtra: false,
          });
        }
      } catch (error) {
        setLoading({
          _xtra: false,
        });
      }
    };

  return (
    <div>
      <Helmet>
        <title>Relaks Pricing</title>
        <meta name="description" content="Let's pay for your next home project" />
        {/* <script>
          fbq('track', 'ViewContent', {
            value: 0,
            currency: 'NGN',
          });
        </script> */}
      </Helmet>
      <PricingPlan basic={basic}
        xtra={xtra}
        prime={prime}
        loading={loading}
        isAuth={isAuth}
        // plan={plan}
      />
    </div>
  );
};

export default Pricing;