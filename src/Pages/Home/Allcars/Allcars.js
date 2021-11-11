import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';

const Allcars = () => {
    const [cars,setCars] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/cars')
        .then(res => res.json())
        .then(data => {
            setCars(data)
        })
    },[])
    return (
       <div id="cars">
            <div className="container text-center">
             <h2 className="fw-bold">Our <span className="text-warning">Car Show-Room</span></h2>
          <div className="row">
          {
              cars.map(car => <Car key={car._id} car={car}></Car>) 
              /* <Spinner className="mx-auto" animation="border" variant="danger"></Spinner> */
          }
              
           
          </div>
        </div>
       </div>
    );
};

export default Allcars;