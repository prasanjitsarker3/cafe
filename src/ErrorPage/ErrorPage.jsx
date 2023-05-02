import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useRouteError } from 'react-router-dom';
import errorPage from '../../public/Image/OIP (1).jpg'

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <Container>
            <div className='m-5'>
                <h2 className='text-warning fs-2 text-center'>
                    {status || 404}
                </h2>
                <h2 className='text-warning fs-3 text-center'>
                    {
                        error?.message
                    }
                </h2>
                <div className='d-flex justify-content-center mt-5'>
                    <img src={errorPage} alt="" height={'200px'} width={'300px'} srcset="" />
                </div>
                <Link to='/' className='d-flex justify-content-center pt-5'>
                    <Button variant='warning'>Back Page</Button>
                </Link>
            </div>
        </Container>
    );
};

export default ErrorPage;