import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from './../../../Hooks/useAuth';

const CarDetails = () => {
  const { productId } = useParams();
  const [cars, setCars] = useState({});
  const history = useHistory();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:4000/cars/${productId}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const { register, handleSubmit, reset } = useForm();

  // ref Car
  const nameRef = useRef();
  const emailRef = useRef();
  const priceRef = useRef();

  const onSubmit = (data) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const price = priceRef.current.value;
    // const tour_name = tour_nameRef.current.value

    const dataRef = { ...data, name, email, price };

    console.log('data here', dataRef);
    dataRef.status = 'pending';

    axios.post('http://localhost:4000/orders', dataRef).then((res) => {
      if (res.data.insertedId) {
        alert('Added Your Booking Car');
        history.push('/myBooking');
        reset();
      }
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 col-sm-6 col-12">
          <h1>car id : {cars._id}</h1>
          <div className="card mb-3 p-2">
            <img
              style={{ height: '180px' }}
              src={cars.img}
              className="card-img-top w"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Car-Name:{cars.name}</h5>
              <hr />
              <p>Car-Description:{cars.description}</p>
              <hr />
              <h5>Car-Price:${cars.price}Taka</h5>
              <hr />
            </div>
          </div>
        </div>
        <div className="col-md-7 col-12 col-sm-6">
          <div className="container mt-4">
            <h2>
              Order the <span className="text-warning">{cars.name}</span> Car
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
              <div className="col-12">
                <input
                  {...register('userName')}
                  className="form-control"
                  defaultValue={user.displayName}
                  required
                />
              </div>
              <div className="col-12">
                <input
                  {...register('email')}
                  className="form-control"
                  value={user.email}
                  required
                  ref={emailRef}
                />
              </div>
              <div className="col-md-12">
                <input
                  {...register('name')}
                  className="form-control"
                  value={cars.name}
                  required
                  ref={nameRef}
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  {...register('address')}
                  className="form-control"
                  placeholder="Address"
                  required
                />
              </div>

              <div className="col-12">
                <input
                  type="text"
                  {...register('price')}
                  className="form-control"
                  value={cars?.price}
                  required
                  ref={priceRef}
                />
              </div>
              <div className="col-12">
                <input
                  type="submit"
                  className="btn btn-success w-100"
                  value="Place Order"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
