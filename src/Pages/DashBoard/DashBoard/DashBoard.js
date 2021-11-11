import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import useAuth from './../../../Hooks/useAuth';
import AddCar from './../AddCar/AddCar';

const DashBoard = () => {
  const {logOut} = useAuth()
  return (
    <>
      <div className="row">
      <div className="col-md-2 bg-secondary" style={{height:'90vh'}}>
        <Nav defaultActiveKey="/home" className="flex-column ms-2">
          <Nav.Link className="text-white mb-3" href="/home">Home</Nav.Link>
          <Nav.Link className="text-white mb-3" href="/addcar">Add Car</Nav.Link>
          <Nav.Link className="text-white mb-3" href="/userOrder">User Order</Nav.Link>
          <Nav.Link className="text-white mb-3" href="myOrder">My Order</Nav.Link>
        </Nav>
        <Button onClick={logOut} className="ms-2" style={{height:"50px"}} variant="outline-info">
            <Nav.Link to="/login" className="nav text-white">
              LogOut
            </Nav.Link>
          </Button>
      </div>
      <div className="col-md-10">

        <AddCar></AddCar>
      </div>
      </div>
    </>
  );
};

export default DashBoard;
