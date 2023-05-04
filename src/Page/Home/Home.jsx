import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import CheifCard from '../../ShearPage/CheifCard';
import { Container, Spinner } from 'react-bootstrap';
import About from '../About/About';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Home = () => {
    const [restaurant, setRestaurant] = useState([]);
    const [dataLoader, setDataLoader] = useState(true);
    useEffect(() => {
        fetch('https://chilekota-server-site-prasanjitsarker3.vercel.app/restaurants')
            .then(res => res.json())
            .then(data => setRestaurant(data))
        setDataLoader(false)
    }, [])
  
    return (
        <Container>
            <div className='mb-5'><Banner></Banner></div>
            <div className='text-center'>
                <h1 className='mt-5 fs-3 pt-5 text-center text-success'>Meet Our Master Chef</h1>
                <p className='py-2 fs-5 pb-5'>Your diet is a bank account. Good food choices are good investments</p>
            </div>
            {
                dataLoader ? <div className='d-flex justify-content-center align-items-center py-1'>
                    <Spinner animation="border" />
                </div>
                    :
                    <div className='row g-3 mx-auto'>

                        {
                            restaurant.map(restau => <CheifCard restau={restau} key={restau.id}
                            ></CheifCard>)
                        }

                    </div>
            }
            <div className='py-4'><About></About></div>

        </Container>
    );
};

export default Home;