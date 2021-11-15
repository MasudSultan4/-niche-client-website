import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import './Header.css';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="App">
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home" className="fw-bold">
            Sultan <span className="text-warning">Car-showroom</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end ">
            <Link to="/home" className="nav text-white me-3 line">
              Home
            </Link>
            <Link to="/explore" className="nav text-white me-3 line">
              Explore
            </Link>

            <Link to="/review" className="nav text-white me-3 line">
              Review
            </Link>
            <Link to="/contact" className="nav text-white me-3 line">
              Contact us
            </Link>
            {user.email && (
              <Link to="/dashboard" className="nav text-white me-3 line">
                DashBoard
              </Link>
            )}

            {user?.email ? (
              <Button onClick={logOut} variant="outline-info">
                Log Out
              </Button>
            ) : (
              <Button variant="outline-info">
                <Link to="/login" className="nav text-white line">
                  Login
                </Link>
              </Button>
            )}

            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <p className="text-white">{user?.displayName}</p>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
