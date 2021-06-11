import React, { useEffect, useState } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Flutterwave() {
  const[user, setUser] = useState({
    name: '',
    email: '',
    phonenumber: '',
    planName: '',
    amount: 0,
    period: ''
  });

  const history = useHistory();

  const getUser = async () => {
    const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/customers/dashboard';
    const token = localStorage.getItem('jwt_token');
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'auth-token': token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    if (response.status === 200) {
      const user = await response.json();
      setUser({
        name: user.name,
        email: user.email,
        phonenumber: user.phone,
        planName: user.subscriptionPlan.planName,
        amount: user.subscriptionPlan.planAmount,
        period: user.subscriptionPlan.period
      });
    } 
    if (response.status === 201) {
      const user = await response.json();
      setUser({
        name: user.authUser.name,
        email: user.authUser.email,
        phonenumber: user.authUser.phone,
        planName: user.authUser.subscriptionPlan.planName,
        amount: user.authUser.subscriptionPlan.planAmount,
        period: user.authUser.subscriptionPlan.period,
      });
    }
   };

  useEffect(() => {
    getUser();
  }, []);
  
  const config = {
    public_key: 'FLWPUBK-12312993f6d2b838c0c92154e059f86f-X',
    tx_ref: `${user.name.slice(0,3)}-${Date.now()}${Math.floor(Math.random() * 1000000)}-X`,
    amount: user.amount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: user.email,
      phone_number: parseInt(user.phone),
      name: user.name,
    },
    customizations: {
      title: `Relaks ${user.planName}`,
      description: `Relaks ${user.planName} `,
      logo: 'https://tryrelaks.com.ng/flutter.png',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const paymentGateway = () => {
      handleFlutterPayment({
        callback: async (response) => {
          try {
            const data = {
              transaction_id: response.transaction_id,
            };
           const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/customers/verify-payment';
           const token = localStorage.getItem('jwt_token');

          //  Make a request to verify if the transaction was successful
           const verifyTransaction = await fetch(url, {
             method: 'PUT',
             body: JSON.stringify(data),
             headers: {
               'auth-token': token,
               'Content-Type': 'application/json',
               'Accept': 'application/json'
             }
           });

          //  const verificationResponse = await verifyTransaction.json();
           if (verifyTransaction.status !== 200) {
             history.push('/customer/pricing');
           } else {
            closePaymentModal();  // this will close the modal programmatically
            history.push('/customer/thank-you');
           }
          } catch (error) {
            history.push('/customer/pricing');
          }
        },
        onClose: () => {
          history.push('/customer/pricing');
        },
      });
  };

  useEffect(() => {
    paymentGateway();
    // return () => {
    //   mounted.current = false;
    // };
  });

  if (user.name.length < 0) {
    return null;
  } else {
    return (
      <div>
        <Helmet>
          <title>{`Relaks Pay | Pay ${user.amount} Let's take care of your home.`}</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div>Please Wait While we setup everything...</div>
      </div>
    );
  }
};

export default Flutterwave;