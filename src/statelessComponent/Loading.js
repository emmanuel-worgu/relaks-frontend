import React from 'react';
import '../css/loading.css'
import {
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-text">
        Please Wait...
      </div>
      <div className="loading-icon">
        <FontAwesomeIcon icon={faSpinner} size="6x" />
      </div>
    </div>
  );
};

export default Loading;