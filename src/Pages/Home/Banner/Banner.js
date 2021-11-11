import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{height:'90vh'}}
            src="https://i.ibb.co/k1q9c1X/Prado.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Toyota Land Cruiser Prado</h3>
            <p>The Toyota Land Cruiser Prado (Japanese: トヨタ・ランドクルーザー プラド, Toyota Rando-Kurūzā Purado) is a full-size four-wheel drive vehicle in the Land Cruiser range produced by the Japanese automaker Toyota. The Prado is one of the smaller vehicles in the Land Cruiser range.</p>
            <Button className="w-25 bg-warning">
              <Link to="/explore" className="line text-black">Explore</Link>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{height:'90vh'}}
            src="https://i.ibb.co/HPxG4yc/rols-royle.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Rolls-Royce</h3>
            <p>Rolls-Royce Motor Cars Limited is a British luxury automobile maker. Rolls-Royce Motor Cars Limited operates from purpose-built administrative and production facilities opened in 2003 across from the historic Goodwood Circuit in Goodwood, West Sussex, England, United Kingdom.</p>
            <Button className="w-25 bg-warning">
              <Link to="/explore" className="line text-black">Explore</Link>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{height:'90vh'}}
            src="https://i.ibb.co/G0QV9HF/bmw.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>BMW Cars</h3>
            <p>
            Changing Lanes” is the official podcast of BMW. Featuring new episodes each week, in which our hosts take you on exciting journeys and talk about innovative technologies
            </p>
            <Button className="w-25 bg-warning">
              <Link to="/explore" className="line text-black">Explore</Link>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
