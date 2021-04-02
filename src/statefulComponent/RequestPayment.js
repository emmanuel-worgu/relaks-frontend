import React, { useState } from 'react';
import MiniFooter from '../statelessComponent/MiniFooter';
import { HandymanDashboardNav } from '../statelessComponent/Nav';
import RequestPaymentForm from '../statelessComponent/RequestPaymentForm';

const RequestPayment = () => {
  const[bankCode, setBankCode] = useState('');
  const[accountNumber, setAccountNumber] = useState('');
  const[bank, setBank] = useState('');
  const[withdrawalFund, setWithdrawalFund] = useState('');
  const[loading, setLoading] = useState(false);

  const handleBankCode = (e) => {
    setBankCode(e.target.value)
    e.preventDefault();
  };

  const handleAccountNumber = (e) => {
    setAccountNumber(e.target.value)
    e.preventDefault();
  };

  const handleBank = (e) => {
    setBank(e.target.value)
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
      const url = 'http://localhost:5000/api/handymen/request-payment';
      const body = {
        account_bank: bankCode,
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
        const message = response.json();
        console.log(message);
        setLoading(false);
      } else {
        const message = response.json();
        console.log(message);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <HandymanDashboardNav />
      <RequestPaymentForm bankCode={bankCode}
        accountNumber={accountNumber}
        bank={bank}
        withdrawalFund={withdrawalFund}
        loading={loading}
        handleAccountNumber={handleAccountNumber}
        handleBank={handleBank}
        handleBankCode={handleBankCode}
        handleWithdrawalFund={handleWithdrawalFund}
        handleWithdrawal={handleWithdrawal}
      />
      <MiniFooter />
    </div>
  );
};

export default RequestPayment;