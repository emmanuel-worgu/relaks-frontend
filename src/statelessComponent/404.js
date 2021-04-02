import React from 'react';
import { useHistory } from 'react-router-dom';
import NeedHelpTemplate from './NeedHelpTemplate';
import Footer from './Footer';
import { NormalNav } from './Nav';
import Superhero from '../assest/superhero.svg';
import '../css/404.css';

const NotFoundPage = () => {
  const history = useHistory();

  const findMe = () => {
    history.push('/');
  };
  return (
    <div>
      <NeedHelpTemplate />
      <NormalNav />
      <div>
        <div>
          <img src={Superhero} alt="404 Pics" className="notfound-img" />
        </div>
        <div id="notfound-content" className="hero-content">
          <div className="hero-content-header">
            <h2 id="notfound"><b>404 Page</b></h2>
            <h4 id="notfound-header-two">Oopps!! You have hit a broken Link</h4>
          </div>
          <div className="hero-content-button">
            <button onClick={findMe} className="submit-button"><h4><b>Find Me</b></h4></button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;