import React from 'react';
import './Open.css';
import { Button, Container } from 'react-bootstrap';
import { FaUtensils } from 'react-icons/fa';

const Open = () => {
    return (
        <Container className='backGround py-5 d-flex justify-content-center align-items-center mx-auto mt-3'>
            <div className='w-75 mx-auto border p-3 py-4 rounded'>
                <h2 className='bg-black text-white text-center py-3 fs-3 rounded-5'>RESERVATIONS</h2>
                <h2 className='fs-4 text-center py-1'>Opening Times  <FaUtensils></FaUtensils></h2>
                <div className='d-flex justify-content-between fs-5 fw-semibold'>
                    <p>Week Days</p>
                    <p>9.00 - 18.00</p>
                </div>
                <p className='dashHr'></p>
                <div className='d-flex justify-content-between fs-5 fw-semibold'>
                    <p>Saturday </p>
                    <p>10.00 - 17.00</p>
                </div>
                <p className='dashHr'></p>
                <div className='d-flex justify-content-between fs-5 fw-semibold'>
                    <p>Sunday</p>
                    <p>Closed</p>
                </div>
                <p className='dashHr'></p>
                <p className='text-center fs-5 fw-bold text-success'>Book Your Table For Lunch or Dinner</p>
                <p className='text-center fs-3 fw-semibold'>+39 059 223921</p>
                <div className='text-center'>
                    <Button variant="outline-success" className='fw-bold'>Book Now</Button>
                </div>
            </div>
        </Container>
    );
};

export default Open;