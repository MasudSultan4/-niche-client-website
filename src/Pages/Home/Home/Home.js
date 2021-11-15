import React from 'react';
import About from '../About/About';
import Allcars from '../Allcars/Allcars';
import Banner from '../Banner/Banner';
import Contact from './../Contact/Contact';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Allcars></Allcars>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;