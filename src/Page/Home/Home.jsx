import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import CheifCard from '../../ShearPage/CheifCard';
import { Container, Spinner } from 'react-bootstrap';
import About from '../About/About';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Home = () => {
    const [restaurant, setRestaurant] = useState([]);
    const navigation=useNavigate();
    if(navigation.state==='loading'){
        return <Spinner animation="border" />
    }
    useEffect(() => {
        fetch('http://localhost:5000/restaurants')
            .then(res => res.json())
            .then(data => setRestaurant(data))
    }, [])
    
    return (
        <Container>
            <div className='mb-5'><Banner></Banner></div>
            <div className='text-center'>
                <h1 className='mt-5 fs-3 pt-5 text-center text-success'>Our Master Chef</h1>
                <p className='py-2 fs-5 pb-5'>Your diet is a bank account. Good food choices are good investments</p>
            </div>
            <div className='row g-3 mx-auto'>
                {
                    restaurant.map(restau => <CheifCard restau={restau} key={restau.id}
                    ></CheifCard>)
                }
            </div>
            <div className='py-4'><About></About></div>

        </Container>
    );
};

export default Home;