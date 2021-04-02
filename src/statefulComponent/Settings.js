import React, { useState } from 'react';
import MiniFooter from '../statelessComponent/MiniFooter';
import { CustomerDashboardNav, HandymanDashboardNav } from '../statelessComponent/Nav';
import NeedHelpTemplate from '../statelessComponent/NeedHelpTemplate';
import SettingsForm from '../statelessComponent/settingsform';

const Settings = ()  => {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[phone, setPhone] = useState('');
  const[oldPassword, setOldPassword] = useState('');
  const[newPassword, setNewPassword] = useState('');
  const[loading, setLoading] = useState(false);
  const[personalInfoRes, setPersonalInfoRes] = useState('');
  const[resetPasswordRes, setResetPasswordRes] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
    e.preventDefault();
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    e.preventDefault();
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
    e.preventDefault();
  };

  const handleOldPassword = (e) => {
    setOldPassword(e.target.value);
    e.preventDefault();
  };

  const handleNewPassword =  (e) => {
    setNewPassword(e.target.value);
    e.preventDefault();
  };

  const handlePersonalInformation = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('jwt_token');
      const url = document.location.pathname === '/customer/setting' ? 'http://localhost:5000/api/customers/update-user' : 'http://localhost:5000/api/handymen/update-user'
      const data = {
        name: name,
        email: email,
        phone: phone
      }

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'auth-token': token,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })

      if (response.status === 200) {
        const message = await response.json();
        setLoading(false);
        setPersonalInfoRes(message.successMessage);
        console.log(message);
      } else {
        const message = await response.json()
        setLoading(false);
        setPersonalInfoRes(message.errMessage);
        console.log(message);
      }
    } catch (error) {
      setLoading(false);
      setPersonalInfoRes(error.TypeError);
    }
  };

  const handleResetPassword = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('jwt_token');
      const url = document.location.pathname === '/customer/reset-password' ? 'http://localhost:5000/api/customers/reset-password' : 'http://localhost:5000/api/handymen/reset-password'
      const data = {
        oldPassword,
        newPassword,
      };

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'auth-token' : token,
          'Accept' : 'application/json',
          'Content-Type' : 'application/json',
        }
      });

      if (response.status === 200) {
        const message = response.json();
        setLoading(false);
        setResetPasswordRes(message.successMessage);
      } else {
        const message = response.json();
        setLoading(false);
        setResetPasswordRes(message.errMessage);
      };
    } catch (error) {
      setLoading(false);
      setResetPasswordRes(error.TypeError);
    };
  };

  return (
    <div>
      {document.location.pathname === '/customer/setting' ? <CustomerDashboardNav /> : <HandymanDashboardNav />}
      <SettingsForm oldPassword={oldPassword}
        newPassword={newPassword}
        name={name}
        email={email}
        phone={phone}
        loading={loading}
        personalInfoRes={personalInfoRes}
        handleName={handleName}
        handleEmail={handleEmail}
        handlePhone={handlePhone}
        handleOldPassword={handleOldPassword}
        handleNewPassword={handleNewPassword}
        handlePersonalInformation={handlePersonalInformation}
        handleResetPassword={handleResetPassword}
       />
      <MiniFooter />
    </div>
  );
};

export default Settings;