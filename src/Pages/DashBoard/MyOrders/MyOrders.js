import React from 'react';
import { Container, Table } from 'react-bootstrap';

const MyOrders = () => {
    return (
        <div className="mt-4">
        <Container>
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                  
                    <th>Email</th>
                    <th>Name</th>
                    <th>Tour Name</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Delete</th>
                </tr>
            </thead>
            {/* {
                bookings.map(booking =><tbody>
                    <tr>
                        <td>{booking.email}</td>
                        <td>{booking.userName}</td>
                        <td>{booking?.name}</td>
                        <td>{booking.date}</td>
                        <td>{booking.status}</td>
                        <td><Button variant="outline-danger"  onClick={()=>handleDelete(booking._id)}>Delete</Button></td>
                    </tr>
                    
                </tbody>)
            } */}
            
        </Table>
    </Container>
    </div>
    );
};

export default MyOrders;