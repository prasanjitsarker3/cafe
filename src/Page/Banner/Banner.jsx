import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import rightImg from '../../../public/Image/Res2.avif'

const Banner = () => {
    return (
        <Container className='w-100 h-100'>
            <Row className='d-flex justify-content-center align-items-center mt-4'>
                <Col lg={6} xs={12} className='mx-auto'>
                    <h1>Check Out My Newest <span className='text-success fw-bold'>Vegan</span> Recipes Books</h1>
                    <p className='fs-5 py-2'>Humor keeps us alive. Humor and food. Don’t forget
                        the food. You can go a week without laughing.When you mix good
                        flavors, then the food turns into orchestra
                    </p>
                    <Link>
                        <Button variant="success">Explore  <FaArrowRight /></Button>
                    </Link>
                </Col>
                <Col lg={6} xs={12} className='mx-auto'>
                    <img src={rightImg} width={'100%'} alt="" srcset="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;