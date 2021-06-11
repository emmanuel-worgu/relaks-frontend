import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Helmet from 'react-helmet';
import ReviewForm from '../statelessComponent/ReviewForm';

const Review = () => {

  const[reviewMessage, setReviewMessage] = useState('');
  const[responseMessage, setResponseMessage] = useState('');
  const[loading, setLoading] = useState(false);

  const history = useHistory();

  const handleReviewMessage = (e) => {
    setReviewMessage(e.target.value);

    e.preventDefault();
  };

  const handleButton = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('jwt_token');
      const id = localStorage.getItem('id');
      const url = 'https://enigmatic-ocean-25180.herokuapp.com/api/customers/end-job';
      const data = {
        id,
        message: reviewMessage,
      }

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'auth-token': token,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (response.status === 200) {
        const data = await response.json();

        setResponseMessage(data.successMessage);
        setLoading(false);

        setTimeout(() => {
          history.push('/customer/job');
        }, 5000);
      } else {
        const data = await response.json();

        setLoading(false);
        return setResponseMessage(data.errMessage);
      };
    } catch (error) {
      setLoading(false);
      return setResponseMessage('Something went wrong!!!');
    }
  };

  return (
    <div>
      <Helmet>
        <title>Review Handyman | Mark Your Job complete and pay your technician</title>
        <meta name="title" content="Review Handyman | Mark Your Job complete and pay your technician"/>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <ReviewForm responseMessage={responseMessage}
        reviewMessage={reviewMessage}
        loading={loading}
        handleReviewMessage={handleReviewMessage}
        handleButton={handleButton}
      />
    </div>
  );
};

export default Review;