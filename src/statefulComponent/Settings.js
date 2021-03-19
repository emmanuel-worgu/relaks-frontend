import React from 'react';
import MiniFooter from '../statelessComponent/MiniFooter';
import { CustomerDashboardNav } from '../statelessComponent/Nav';
import NeedHelpTemplate from '../statelessComponent/NeedHelpTemplate';
import SettingsForm from '../statelessComponent/settingsform';

const Settings = ()  => {
  return (
    <div>
      <CustomerDashboardNav />
      <SettingsForm />
      <MiniFooter />
    </div>
  );
};

export default Settings;