import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import MiniFooter from '../statelessComponent/MiniFooter';
import { HandymanDashboardNav } from '../statelessComponent/Nav';
import RequestPaymentForm from '../statelessComponent/RequestPaymentForm';

const RequestPayment = () => {
  const[accountNumber, setAccountNumber] = useState('');
  const[bank, setBank] = useState([]);
  const[bankDetails, setBankDetails] = useState({
    bankName: '',
    bankCode: '',
  })
  const[withdrawalFund, setWithdrawalFund] = useState('');
  const[loading, setLoading] = useState(false);
  const[data, setData] = useState({
    message: '',
    error: false,
    success: false
  })

  const fetchBanks = async () => {
    const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/handymen/banks';

    const response = await fetch(url)
    const banks = await response.json();

    setBank(banks);
  };

  useEffect(()=> {
    fetchBanks();
  }, [])

  // const handleBankCode = (e) => {
  //   setBankCode(e.target.value)
  //   e.preventDefault();
  // };

  const handleAccountNumber = (e) => {
    setAccountNumber(e.target.value)
    e.preventDefault();
  };

  const handleBank = (e) => {
    // console.log(e.target.value);
    bank.forEach(i => {
      if (e.target.value === i.name) {
        console.log(i);
        setBankDetails({
          bankName: i.name,
          bankCode: i.code,
        });
      }
    });
    e.preventDefault();
  };

  const handleWithdrawalFund = (e) => {
    setWithdrawalFund(e.target.value)
    e.preventDefault();
  };

  const handleWithdrawal = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('jwt_token');
      const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/handymen/request-payment';
      const body = {
        account_bank: bankDetails.bankCode,
        account_number: accountNumber,
        amount: withdrawalFund,
      };

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'auth-token' : token,
          'Accept' : 'application/json',
          'Content-Type' : 'application/json',
        }
      });

      if (response.status === 200) {
        const message = await response.json();
        setData({
          message: message.successMessage,
          success: true,
        });
        setLoading(false);
      } else {
        const message = await response.json();
        setData({
          message: message.errMessage,
          error: true
        })
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Request Payment | Request Payment!! Receive Payment in Minutes!!</title>
        <meta name="description" content="Login to Your Account"/>
      </Helmet>
      <HandymanDashboardNav />
      <RequestPaymentForm //bankCode={bankCode}
        accountNumber={accountNumber}
        error={data.error}
        success={data.success}
        message={data.message}
        bank={bank}
        withdrawalFund={withdrawalFund}
        loading={loading}
        handleAccountNumber={handleAccountNumber}
        handleBank={handleBank}
        // handleBankCode={handleBankCode}
        handleWithdrawalFund={handleWithdrawalFund}
        handleWithdrawal={handleWithdrawal}
      />
      <MiniFooter />
    </div>
  );
};

export default RequestPayment;