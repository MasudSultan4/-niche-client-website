import axios from 'axios';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from './../../../Hooks/useAuth';

const Review = () => {
  const { user } = useAuth();
  const nameRef = useRef();
  const emailRef = useRef();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    const dataRef = { ...data, name, email };
    axios.post('http://localhost:4000/reviews', dataRef).then((res) => {
      if (res.data.insertedId) {
        alert('Thanks,Added Your Review');
        reset();
      }
    });
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-center">
        Please! MR. Share Your <span className="text-warning">Review</span>
      </h2>
      <Form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(onSubmit)}>
        <Form.Control
          {...register('name')}
          defaultValue={user.displayName}
          size="lg"
          ref={nameRef}
          type="text"
        />
        <br />
        <Form.Control
          {...register('email')}
          value={user.email}
          ref={emailRef}
          size="lg"
          type="email"
        />
        <br />
        <Form.Control
          {...register('message')}
          as="textarea"
          type="text"
          placeholder="Write your review"
        />
        <br />
        <select {...register('rating')}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <br />

        <input
          className="w-25 bg-warning border p-2 fw-bold text-secondary"
          type="submit"
        />
      </Form>
    </div>
  );
};

export default Review;
