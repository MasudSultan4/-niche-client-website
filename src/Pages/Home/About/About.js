import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <Container id="about" style={{ height: 'auto' }}>
      <h2 className="fw-bold mt-5 mb-4 text-center">
        About <span className="text-warning">Sultan Car Show Room</span>
      </h2>
      <div className="row">
        <div className="col-md-6 col-12">
          <img
            src="https://i.ibb.co/Jq4P607/about.jpg"
            alt=""
            className="img-fluid w-100"
          />
        </div>

        <div className="col-md-6 col-12">
          <p className="fw-light">
            The early cars were sold by automakers to customers directly or
            through a variety of channels, including mail order, department
            stores, and traveling representatives. The first dealership in the
            United States was established in 1898 by William E. Metzger. Today,
            direct sales by an automaker to consumers are limited by most states
            in the U.S. through franchise laws that require new cars to be sold
            only by licensed and bonded, independently owned dealerships Car
            dealerships are usually franchised to sell and service vehicles by
            specific companies. They are often located on properties offering
            enough room to have buildings housing a showroom, mechanical
            service, and body repair facilities, as well as to provide storage
            for used and new vehicles. Many dealerships are located out of town
            or on the edge of town centers. An example of a traditional single
            proprietorship car dealership was Collier Motors in North Carolina.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
