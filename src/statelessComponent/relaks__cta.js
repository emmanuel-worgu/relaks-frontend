import React from 'react';
import { useHistory } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';

mixpanel.init('784360e9005522fb8d2cccd326b57f78');

const RelaksCta = () => {
  const history = useHistory();

  const handleButton = () => {
    mixpanel.track('CTA REGISTER', {
      url_path: document.location.pathname,
    })
    history.push('/customer/register')
  }
  return (
    <div className="jumbotron" style={{
      backgroundColor: '#009EF7',
      marginBottom: '0'
    }}>
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <h1 className="relaks__cta">Live Frustration Free Life with Relaks</h1>
          <div style={{
            marginTop: '20px'
          }} className="member-button">
            <button className="what-is-relaks-button" onClick={handleButton} style={{
              height: '4em',
              outline: 'none'
            }}><b style={{
              fontSize: '2em'
            }}>Try Relaks</b></button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default RelaksCta