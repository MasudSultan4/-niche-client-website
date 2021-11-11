import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import login from '../../../images/login/login.jpg';
import useAuth from './../../../Hooks/useAuth';

const Login = () => {
  const [loginData,setLoginData] = useState({})
  const {logInUser,user,authError,isLoading} = useAuth()

  const history = useHistory();
  const location = useLocation();

  const handleOnBlur = e =>{
    const filed = e.target.name;
    const value = e.target.value;
    const newLogInData = {...loginData};
    newLogInData[filed] = value;
    setLoginData(newLogInData);
  }
  const handleLogIn = (e) => {
    logInUser(loginData.email,loginData.password,location,history)
    e.preventDefault();
  };
  return (
    <div className="container">
      <h3 className="text-center mb-4">
        Please <span className="text-warning">Log In</span>
      </h3>

      <div className="row">
        <div className="col-md-6">
          <Form onSubmit={handleLogIn}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                onBlur={handleOnBlur}
                required
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                onBlur={handleOnBlur}
                required
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button className="w-25" type="submit">
              Log In
            </Button>
          </Form>
          {isLoading && (
            <Spinner className="App" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {user?.email &&
            ['success'].map((variant, idx) => (
              <Alert key={idx} variant={variant}>
                LogIn SuccessFully!
              </Alert>
            ))}

          {authError &&
            ['danger'].map((variant, idx) => (
              <Alert key={idx} variant={variant}>
                {authError}
              </Alert>
            ))}

          <p className="mt-2">-----------------------------</p>
          <Link style={{ textDecoration: 'none' }} to="/register">
            <Button>New User? Please Register</Button>
          </Link>
        </div>
        <div className="col-md-6">
          <img className="" src={login} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
