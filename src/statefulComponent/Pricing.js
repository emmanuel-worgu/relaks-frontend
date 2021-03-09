import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PricingPlan from '../statelessComponent/PricingPlan';

const Pricing = () => {
  const[user, setUser] = useState('');
  const[plan, setPlan] = useState('');
  const[isAuth, setIsAuth] = useState(false);
  const[loading, setLoading] = useState({
    _gold: false,
    _silver: false,
    _platinum: false,
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
    const gold = async() => {
      const data = {
        planName: 'Gold'
      }

      try {
        setLoading({
          _gold: true,
        });
        console.log('Gold Package');
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
            _gold: false
          });
          history.push('/customer/pay');
        } else {
          const message = await response.json()
          console.log(message);
          setLoading({
            _gold: false,
          });
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    const platinum = async() => {
      const data = {
        planName: 'Platinum'
      }
      try {
        setLoading({
          _platinum: true,
        });
        console.log('Platinum Package');
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
            _platinum: false,
          });
          history.push('/customer/pay');
        } else {
          const message = await response.json();
          console.log(message);
          setLoading({
            _platinum: false,
          });
        }
      } catch (error) {
        setLoading({
          _platinum: false,
        });
        console.log(error);
      }
    };

    const silver = async() => {
      const data = {
        planName: 'Silver'
      }
      try {
        setLoading({
          _silver: true,
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
            _silver: false,
          });
          history.push('/customer/pay');
        } else {
          const message = await response.json()
          console.log(message);
          setLoading({
            _silver: false,
          });
        }
      } catch (error) {
        setLoading({
          _silver: false,
        });
        console.log(error);
      }
    };

  return (
    <div>
      <PricingPlan gold={gold}
        silver={silver}
        platinum={platinum}
        loading={loading}
        isAuth={isAuth}
        plan={plan}
      />
    </div>
  );
};

export default Pricing;