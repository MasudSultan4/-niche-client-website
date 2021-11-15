import React from 'react';
import ReactStars from 'react-rating-stars-component';

const Reviews = ({ review }) => {
  const { name, email, message, rating } = review;
  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className="card mb-3 p-2">
        <div className="card-body">
          <h5 className="card-title">name:{name}</h5>
          <hr />
          <h6 className="card-title">email:{email}</h6>
          <hr />
          <p>message{message.slice(0, 150)}</p>
          <hr />
          <ReactStars
            {...{
              size: 22,
              value: rating,
              edit: false,
              activeColor: '#ffd700'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
