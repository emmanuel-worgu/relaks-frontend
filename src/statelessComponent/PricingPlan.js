import React from 'react';
import NeedHelpTemplate from './NeedHelpTemplate';
import Flutterwave from '../statefulComponent/Flutterwave';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const PricingPlan = (props) => {
  return (
    <div>
      <div>
        <NeedHelpTemplate />
      </div>
      <div>
        <Nav />
      </div>
      <div>
        <h4>Choose A Plan that best suits You</h4>
      </div>
      <div>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Platinum</h5>
                <p className="card-text">Live A Frustration Free Live</p>
                <button onClick={props.platinum}>{props.loading._platinum ? 'Loading...' : 'Platinum'}</button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Silver</h5>
                <p className="card-text">Live A Frustration Free Live</p>
                <button onClick={props.silver}>{props.loading._silver ? 'Loading...' : 'Silver'}</button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Gold</h5>
                <p className="card-text">Live A Frustration Free Live</p>
                <button onClick={props.gold}>{props.loading._gold ? 'Loading...' : 'Gold'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;