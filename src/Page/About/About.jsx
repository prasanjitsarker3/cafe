import React from 'react';
import hot1 from '../../../public/Image/hot3.avif'
import hot2 from '../../../public/Image/hot2.avif'
import hot3 from '../../../public/Image/hot3.avif'
import hot4 from '../../../public/Image/hot4.avif'
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Open from '../Open/Open';
const About = () => {
    return (
        <Container>
            <div className='text-center text-warning pt-5'>
                <h1>HOT SALES !</h1>
            </div>
            <Row>
                <Col lg={3} md={6} xs={12} className='d-flex justify-content-center align-items-center mx-auto'>
                    <div className='text-center py-2'>
                        <Image src={hot1} width={'200px'} height={"200px"} roundedCircle />
                        <h1 className='text-success fs-3'>CARBONARA</h1>
                        <p>Eating good food is my favorite thing in the world. Nothing is more..</p>
                        <h5 className='fw-bold'>$3.80</h5>
                    </div>
                </Col>
                <Col lg={3} md={6} xs={12} className='d-flex justify-content-center align-items-center mx-auto'>
                    <div className='text-center py-2'>
                        <Image src={hot2} width={'200px'} height={"200px"} roundedCircle />
                        <h1 className='text-success fs-3'>CARICCIOSA</h1>
                        <p>Eating good food is my favorite thing in the world. Nothing is more...</p>
                        <h5 className='fw-bold'>$2.80</h5>
                    </div>
                </Col>
                <Col lg={3} md={6} xs={12} className='d-flex justify-content-center align-items-center mx-auto'>
                    <div className='text-center py-2'>
                        <Image src={hot3} width={'200px'} height={"200px"} roundedCircle />
                        <h1 className='text-success fs-3'>PROSCIUTTO</h1>
                        <p>Eating good food is my favorite thing in the world. Nothing is more..</p>
                        <h5 className='fw-bold'>$3.00</h5>
                    </div>
                </Col>
                <Col lg={3} md={6} xs={12} className='d-flex justify-content-center align-items-center mx-auto'>
                    <div className='text-center py-2'>
                        <Image src={hot4} width={'200px'} height={"200px"} roundedCircle />
                        <h1 className='text-success fs-3'>DIABLO</h1>
                        <p>Eating good food is my favorite thing in the world. Nothing is more..</p>
                        <h5 className='fw-bold'>$4.00</h5>
                    </div>
                </Col>

            </Row>
            <div>
                <Open></Open>
            </div>
        </Container>
    );
};

export default About;