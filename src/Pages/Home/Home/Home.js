import React from 'react';
import About from '../About/About';
import AllReview from '../AllReview/AllReview';
import Banner from '../Banner/Banner';
import FeaturedCar from '../FeaturedCar/FeaturedCar';
import Contact from './../Contact/Contact';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <FeaturedCar></FeaturedCar>
            <About></About>
            <AllReview></AllReview>
            <Contact></Contact>
        </div>
    );
};

export default Home;