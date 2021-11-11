import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import register from '../../../images/login/register.jpg';
import useAuth from './../../../Hooks/useAuth';

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, authError } = useAuth();
  const history = useHistory()


  const handleOnBlur = (e) => {
    const filed = e.target.name;
    const value = e.target.value;
    const newLogInData = { ...loginData };
    newLogInData[filed] = value;
    setLoginData(newLogInData);
  };
  const handleRegister = (e) => {
    if (loginData.password !== loginData.rePassword) {
      alert('your password not match');
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name,history);
    e.preventDefault();
  };
  return (
    <div className="container">
      <h3 className="App mb-4 mt-5">
        Please <span className="text-warning">Register</span>
      </h3>
      <div className="row">
        <div className="col-md-6 col-12 mt-5">
          {!isLoading && (
            <Form onSubmit={handleRegister}>
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onBlur={handleOnBlur}
                  placeholder="Your Name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onBlur={handleOnBlur}
                  placeholder="Enter email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="rePassword"
                  onBlur={handleOnBlur}
                  placeholder="Re Password"
                  required
                />
              </Form.Group>
              <Button
                type="submit"
                className=" w-25 bg-warning  text-center border-0 text-black"
              >
                Register
              </Button>
            </Form>
          )}
          {isLoading && (
            <Spinner className="App" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {user?.email &&
            ['success'].map((variant, idx) => (
              <Alert key={idx} variant={variant}>
                Register SuccessFully!
              </Alert>
            ))}

          {authError &&
            ['danger'].map((variant, idx) => (
              <Alert key={idx} variant={variant}>
                {authError}
              </Alert>
            ))}

          <Link style={{ textDecoration: 'none' }} to="/login">
            <Button className="mt-4">Already Registered? Please Login</Button>
          </Link>
        </div>
        <div className="col-md-6 col-12">
          <img src={register} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
