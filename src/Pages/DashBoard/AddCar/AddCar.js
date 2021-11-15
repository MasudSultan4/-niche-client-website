import axios from 'axios';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddCar = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
       axios.post('http://localhost:4000/cars',data)
       .then(res => {
        if(res.data.insertedId){
            alert('Added Your car')
            reset()
        }
       })
       
    }
    return (
        <div>
            <Form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(onSubmit)}>
           <Form.Control {...register("name")} size="lg" type="text" placeholder="Car Name" />
            <br />
            <Form.Control {...register("price")} size="lg" type="number" placeholder="Price" />
            <br />
            <Form.Control  {...register("description")} size="textarea" type="text" placeholder="Description" />
            <br />
            <Form.Control {...register("img")} size="lg" type="text" placeholder="Img Url" />
            <br />

            <input className="w-25 bg-warning border p-2 fw-bold text-secondary" type="submit" />
           </Form>
        </div>
    );
};

export default AddCar;