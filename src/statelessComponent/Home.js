import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import NeedHelpTemplate from './NeedHelpTemplate';

import '../css/home.css';
import HomeBackground from '../assest/home_background.jpg';
import Relaks from '../assest/relaxing.svg';

const Home = () => {
  return (
    <div className="container-fluid">
      <div>
        <NeedHelpTemplate />
      </div>
      <Nav />
      <div>
        <div id="container setImg">
          <div>
            <img src={HomeBackground} className="hero-img" alt="relaks-home-background" />
          </div>
          <div className="hero-content">
            <h3>Live A Frustration Free Life!!</h3>
            <p>Get all your home repairs done for a monthly fee</p>
            <div className="hero-button">
              <button className="submit-button"><Link to="/customer/register">Become a Member</Link></button>
            </div>
          </div>
        </div>
        <div className ="row">
          <div className="col-sm-12 col-md-6 col-xl-6">
            <div>
              <p>No More Worry</p>
            </div>
          </div>
        </div>
        <div className="how-its-works">
          <h3>How it Works</h3>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-xl-4">
            <div>
              <h6>Book Your Service</h6>
              <p>Login or Register</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-xl-4">
            <div>
              <h6>Give us Details</h6>
              <p>Fill in where and what time you want the job</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-xl-4">
            <div>
              <h6>Give us Details</h6>
              <p>Fill in where and what time you want the job</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-6">
            <div>
              <img src={Relaks} alt="relaxing" className="svg" />
            </div>
          </div>
          <div className="col-sm-6 col-md-6" id="svg-content">
            <div>
              <h4>Happiness Guarante</h4>
              <p>Your Happiness is our top most prority</p>
              <button className="submit-button">Repair Your Home</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
