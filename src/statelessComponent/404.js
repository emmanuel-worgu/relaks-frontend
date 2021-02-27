import React from 'react';
import { Link } from 'react-router-dom';
import NeedHelpTemplate from './NeedHelpTemplate';
import MiniFooter from './MiniFooter';

const NotFoundPage = () => {
  return (
    <div>
      <div>
        <NeedHelpTemplate />
      </div>
      <div>
        <h3 className="hero-content">You have hit a broken Link... No worries we got your back!!!</h3>
        <button><Link to="/">Find Me</Link></button>
      </div>
      <div>
        <MiniFooter />
      </div>
    </div>
  );
};

export default NotFoundPage;