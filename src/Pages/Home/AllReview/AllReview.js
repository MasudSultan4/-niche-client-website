import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Reviews from '../Reviews/Reviews';

const AllReview = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  useEffect(() => {
    fetch('https://protected-shelf-60109.herokuapp.com/reviews')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setIsLoader(true);
      });
  }, []);
  return (
    <div>
      <div className="container text-center">
        <h2 className="fw-bold">
          Our Car Show-Room<span className="text-warning">Review</span>
        </h2>
        <div className="row">
          {isLoader ? (
            reviews.map((review) => (
              <Reviews key={review._id} review={review}></Reviews>
            ))
          ) : (
            <Spinner
              className="mx-auto"
              animation="border"
              variant="danger"
            ></Spinner>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllReview;
