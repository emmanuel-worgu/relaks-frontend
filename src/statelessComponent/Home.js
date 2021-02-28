import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import NeedHelpTemplate from './NeedHelpTemplate';

import '../css/home.css';
import HomeBackground from '../assest/home_background.jpg';
import Relaks from '../assest/relaxing.svg';

const Home = () => {

  const history = useHistory();

  const customerRoute = () => {
    history.push('/customer/register');
  };

  const handymanRoute = () => {
    history.push('/handyman/register');
  };
  return (
    <div>
      <div>
        <NeedHelpTemplate />
      </div>
      <Nav />
      <div>
        <div id="setImg">
          <div>
            <img src={HomeBackground} className="hero-img" alt="relaks-home-background" />
          </div>
          <div className="hero-content">
            <h3 className="hero-text">Live A Frustration Free Life!!</h3>
            <p className="hero-text">Get all your home repairs done for a monthly fee</p>
            <div className="hero-button">
              <button className="submit-button" onClick={customerRoute}>
                <b className="button-text">Get Your Home Fixed</b>
              </button>
            </div>
            <div className="hero-or">
              <h3 className="hero-text"><b>OR</b></h3>
            </div>
            <h3 className="hero-text">Join Relaks Technicians</h3>
            <p className="hero-text">Earn Money by helping Homeowners get their home fixed</p>
            <div className="hero-button">
              <button className="submit-button" onClick={handymanRoute}>
                <b className="button-text">Join Relaks Technicians</b>
              </button>
            </div>
          </div>
        </div>
        <div className="how-its-works">
          <h2>How Relaks Works</h2>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-xl-4">
            <div className="how-its-works-items">
              <h4 className="how-its-works-content">Create An Account</h4>
              <p className="how-its-works-text">Register with us by just filling your name, email, phone number and password. That is it!!</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-xl-4">
            <div className="how-its-works-items">
              <h4 className="how-its-works-content">Subscribe to any of our Plan</h4>
              <p className="how-its-works-text">Save cost by paying for our plan and never worry about your home repair needs</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-xl-4">
            <div className="how-its-works-items">
              <h4 className="how-its-works-content">Get your home fixed</h4>
              <p className="how-its-works-text">Get your home fixed whenever it happens. You don't have to worry about getting good artisan or the cost of getting it done.</p>
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
            <div className="happiness-div">
              <h4 className="happiness">Happiness Guarante</h4>
              <p className="happiness-content">Your Happiness is our top most prority</p>
              <div className="happiness-button">
                <button className="submit-button" onClick={customerRoute}>
                  <b className="button-text">Get Your Home Fixed</b>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="benefits">
          <h2>Benefits of Relaks</h2>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-xl-4">
            <p>Benefits of Relaks</p>
          </div>
        </div>
        <div className="pricing">
          <h2>Relaks Pricing</h2>
        </div>
        <div className="pricing">
          <p className="pricing-text">Pay Once every year and be covered for your home repair needs</p>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-xl-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Gold</h5>
                <p className="card-tex">
                  <b>Amount: 50000</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
