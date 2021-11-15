import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <h3 className=" mt-5 mb-4 text-center">
        Contact Us <span className="text-warning">By Show Room</span>
      </h3>
      <div className="row">
        <div className="col-md-6 col-12 mt-5">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="name"
                //   onBlur={handleOnBlur}
                placeholder="Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="email"
                //   onBlur={handleOnBlur}
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control placeholder="Massage" required as="textarea" rows={3} />
            </Form.Group>

            <Button
              type="submit"
              className=" w-25 bg-warning  text-center border-0 text-black"
            >
              Submit
            </Button>
          </Form>
        </div>
        <div className="col-md-6 col-12">
          <img
            src="https://i.ibb.co/PGZYLjJ/pradocontact.jpg"
            alt=""
            className="img-fluid w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
