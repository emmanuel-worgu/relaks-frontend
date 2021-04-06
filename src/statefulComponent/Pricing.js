import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PricingPlan from '../statelessComponent/PricingPlan';

const Pricing = () => {
  const[user, setUser] = useState('');
  const[plan, setPlan] = useState('');
  const[isAuth, setIsAuth] = useState(false);
  const[loading, setLoading] = useState({
    _prime: false,
    _xtra: false,
    _basic: false,
  });

  const history = useHistory();

  const token = localStorage.getItem('jwt_token');

  const getData = async () => {
    const url = 'http://localhost:5000/api/customers/dashboard';
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'auth-token': token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    if (response.status === 200) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  };

  useEffect(() => {
    getData()
  });
    
    // Each of Package function will redirect to the payment page once the response status is 200
    const prime = async() => {
      const data = {
        planName: 'Prime'
      }

      try {
        setLoading({
          _prime: true,
        });
        const url = 'http://localhost:5000/api/customers/choose-plan'

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
          const message = await response.json()
          console.log(message);
          setLoading({
            _prime: false
          });
          history.push('/customer/pay');
        } else {
          const message = await response.json()
          console.log(message);
          setLoading({
            _prime: false,
          });
        }
      } catch (error) {
        setLoading({
          _prime: false,
        });
        console.log(error);
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
        const url = 'http://localhost:5000/api/customers/choose-plan'

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
          const message = response.json()
          console.log(message);
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
        }
      } catch (error) {
        setLoading({
          _basic: false,
        });
        console.log(error);
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
        console.log('Silver Package');
        const url = 'http://localhost:5000/api/customers/choose-plan'

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
          const message = await response.json()
          console.log(message);
          setLoading({
            _xtra: false,
          });
          history.push('/customer/pay');
        } else {
          const message = await response.json()
          console.log(message);
          setLoading({
            _xtra: false,
          });
        }
      } catch (error) {
        setLoading({
          _xtra: false,
        });
        console.log(error);
      }
    };

  return (
    <div>
      <PricingPlan basic={basic}
        xtra={xtra}
        prime={prime}
        loading={loading}
        isAuth={isAuth}
        plan={plan}
      />
    </div>
  );
};

export default Pricing;