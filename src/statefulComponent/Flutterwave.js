import React, { useEffect, useState, useRef } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useHistory } from 'react-router-dom';

function Flutterwave() {
  const[user, setUser] = useState({
    name: '',
    email: '',
    phonenumber: '',
    planName: '',
    amount: 0,
  });
  const[loading, setLoading] = useState(false);

  const history = useHistory();
  let mounted = useRef(true);

  const getUser = async () => {
    const url = 'http://localhost:5000/api/customers/dashboard';
    const token = localStorage.getItem('jwt_token');
    setLoading(true);
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
      console.log(user);
      console.log(user.phone);
      setUser({
        name: user.name,
        email: user.email,
        phonenumber: user.phone,
        // planName: user.subscriptionPlan.planName,
        // amount: user.subscriptionPlan.amount,
      });
      setLoading(false);
    } else {
      return history.push('/customer/login');
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  // FLWPUBK-12312993f6d2b838c0c92154e059f86f-X
  
  const config = {
    public_key: 'FLWPUBK_TEST-a69503fa38db11ad11dc4ea595059e4c-X',
    tx_ref: `${user.name.slice(0,3)}-${Date.now()}${Math.floor(Math.random() * 1000000)}-X`,
    amount: 1,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: user.email,
      phone_number: parseInt(user.phone),
      name: user.name,
    },
    customizations: {
      title: 'Plan Name',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const paymentGateway = () => {
    setLoading(true);
      handleFlutterPayment({
        callback: async (response) => {
          try {
            console.log(response);
            console.log(response.status);
            const data = {
              transaction_id: response.transaction_id,
            };
           //  if (response.status !== 'successful') {
           //    setLoading(false);
           //    console.log('Transaction not successful');
           //    closePaymentModal();
           //    return history.push('/customer/thank-you');
           //  }
           const url = 'http://localhost:5000/api/customers/verify-payment';
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

           const verificationResponse = await verifyTransaction.json();
           console.log(verificationResponse);
           if (verificationResponse.status !== 200) {
             console.log('We could not verify your transaction');
           }
           
           closePaymentModal();  // this will close the modal programmatically
           history.push('/customer/thank-you');
           // Test ATM CARD =  5531 8866 5214 2950
           // CVV = 564
           // EXPIRY DATE = 09/32
          } catch (error) {
            console.log(error);
          }
        },
        onClose: () => {
          console.log('close')
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