import React from 'react';
import {
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NeedHelpTemplate = () => {
  return (
    <div className="need-help">
      <div className="need-help-para">
        <FontAwesomeIcon icon={faPhoneAlt} size="1x" style={{
          marginTop: '4px',
          marginRight: '10px'
        }}/>
        Need Help ? Call <a href="tel:+2349055681975" style={{
          color: 'blue',
          textDecoration: 'none',
          marginLeft: '3px'
        }}> (+234)9055681975</a>
      </div>
    </div>
  );
};

export default NeedHelpTemplate;