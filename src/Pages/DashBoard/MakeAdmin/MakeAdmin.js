import React from 'react';
import { Form } from 'react-bootstrap';

const MakeAdmin = () => {
  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label>Your Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Admin Email"
          required
        />
      </Form.Group>
    </div>
  );
};

export default MakeAdmin;
