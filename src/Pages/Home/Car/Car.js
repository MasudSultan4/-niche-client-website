import React from 'react';

const Car = ({ car }) => {
  const { img, name, description, price } = car;

  return (
    <div className="col-md-4 col-12">
      <div className="card mb-3 p-2">
        <img
          style={{ height: '180px' }}
          src={img}
          className="card-img-top w"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <hr />
          <p>{description.slice(0, 150)}</p>
          <hr />
          <h5>Tour-Cost:${price}Taka</h5>
          <hr />

          <button className="btn btn-success">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Car;
