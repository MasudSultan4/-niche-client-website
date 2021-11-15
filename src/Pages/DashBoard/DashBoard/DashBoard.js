import React, { useState } from 'react';
import { Button, Col, Collapse, Container, Row } from 'react-bootstrap';
import { Drawer } from 'react-bootstrap-drawer';
import 'react-bootstrap-drawer/lib/style.css';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import MainDashBoard from '../MainDashBoard/MainDashBoard';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllProduct from '../ManageAllProduct/ManageAllProduct';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import useAuth from './../../../Hooks/useAuth';
import AddCar from './../AddCar/AddCar';
import ManageProduct from './../ManageProduct/ManageProduct';
import Payment from './../Payment/Payment';

const DashBoard = (props) => {
  const { logOut } = useAuth();
  const [open, setOpen] = useState(false);
  let { path, url } = useRouteMatch();
  const handleToggle = () => setOpen(!open);

  return (
    <Row>
      <Col md="3">
        <Drawer {...props}>
          <Drawer.Toggle onClick={handleToggle} />

          <Collapse in={open}>
            <Drawer.Overflow>
              <Drawer.ToC className="ms-3">
                <Link to={`${url}/dashBoard`}>
                  <Button variant="light" className="w-75 mb-1 shadow  border">DashBoard</Button>
                </Link>
                <br />
                <br />
                <Link to={`${url}/myOrder`}>
                  <Button variant="light" className="w-75 mb-1 shadow  border">My Orders</Button>
                </Link>
                <br />
                <br />

                <Link to={`${url}/review`}>
                  <Button variant="light" className="w-75 mb-1 shadow  border">Add Review</Button>
                </Link>
                <br />
                <br />

                <Link to={`${url}/manageAllProduct`}>
                  <Button variant="light" className="w-75 mb-1 shadow  border">Manage All Orders</Button>
                </Link>
                <br />
                <br />

                <Link to={`${url}/addCar`}>
                  <Button variant="light" className="w-75 mb-1 shadow  border">Add Car</Button>
                </Link>
                <br />
                <br />

                <Link to={`${url}/admin`}>
                  <Button variant="light" className="w-75 mb-1 shadow  border">Make Admin</Button>
                </Link>
                <br />
                <br />

                <Link to={`${url}/manageProduct`}>
                  <Button variant="light" className="w-75 mb-1 shadow  border">Manage car</Button>
                </Link>
                <br />
                <br />

                <Link to="/login">
                  <Button variant="light" className="w-75 mb-1 shadow  border" onClick={logOut}>Log Out</Button>
                </Link>
                <br />
                <br />
              </Drawer.ToC>
            </Drawer.Overflow>
          </Collapse>
        </Drawer>
      </Col>

      <Col md="9">
        <Switch>
          <Route exact path={path}>
            <MainDashBoard></MainDashBoard>
          </Route>
          <Route path={`${path}/myOrder`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/addCar`}>
            <AddCar></AddCar>
          </Route>
          <Route path={`${path}/admin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <Route path={`${path}/manageProduct`}>
            <ManageProduct></ManageProduct>
          </Route>
          <Route path={`${path}/manageAllProduct`}>
            <ManageAllProduct></ManageAllProduct>
          </Route>
        </Switch>
      </Col>
    </Row>
  );
};

const Application = (props) => {
  return (
    <Container fluid>
      <Row className="flex-xl-nowrap">
        <Col xs={12} md={3} lg={2} />
        <Col xs={12} md={9} lg={10}>
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};

export default DashBoard;
