import React, { useEffect, useState } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useHistory } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';

function Flutterwave() {
  mixpanel.init("784360e9005522fb8d2cccd326b57f78");

  mixpanel.track('Pricing Loaded', {
    title: 'pricing page'
  })
  const[user, setUser] = useState({
    name: '',
    email: '',
    phonenumber: '',
    planName: '',
    amount: 0,
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
      });
      mixpanel.identify(user._id);
      mixpanel.people.set({
        "name": user.name,
        "$email": user.email,
        "user_id": user._id
      });
    } 
    if (response.status === 201) {
      const user = await response.json()
      setUser({
        name: user.authUser.name,
        email: user.authUser.email,
        phonenumber: user.authUser.phone,
        planName: user.authUser.subscriptionPlan.planName,
        amount: user.authUser.subscriptionPlan.planAmount,
      });
      mixpanel.identify(user._id);
      mixpanel.people.set({
        "name": user.authUser.name,
        "$email": user.authUser.email,
        "user_id": user.authUser._id
      });
    }
   };

  useEffect(() => {
    getUser();
  }, []);

  // FLWPUBK-12312993f6d2b838c0c92154e059f86f-X
  
  const config = {
    public_key: 'FLWPUBK_TEST-a69503fa38db11ad11dc4ea595059e4c-X',
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
      description: 'Payment for items in cart',
      // logo: NavLogo,
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
             method: 'POST',
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
           }
           
           closePaymentModal();  // this will close the modal programmatically
           history.push('/customer/thank-you');
           // Test ATM CARD =  5531 8866 5214 2950
           // CVV = 564
           // EXPIRY DATE = 09/32
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
      <div>Please Wait While we setup everything...</div>
    );
  }
};

export default Flutterwave;