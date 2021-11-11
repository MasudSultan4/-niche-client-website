import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark mt-5  text-white">
        <footer className="py-3 py-4 container">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <Link to="/home" className="nav-link px-2 text-white">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link px-2 text-white">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/TourArea" className="nav-link px-2 text-white">TourArea</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link px-2 text-white">Contact</Link>
                </li>
            </ul>
            <p className="text-center text-muted">© 2021  All rights reserved by <span className="text-warning">Sultan Car Show Room</span></p>
        </footer>
    </div>
    );
};

export default Footer;