import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagramSquare, FaTwitter, FaGoogle, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='text-center  py-2'>
                <h1 className='fs-3 text-success'>ChileKota Bar</h1>
            </div>
            <Row className='text-center py-4 px-4'>
                <Col lg={4} md={6} xs={12} className=''>
                    <h1 className='fs-3'>About</h1>
                    <p>A restaurant is a business that prepares and serves food and drinks to customers.Meals are
                        generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.</p>
                    <Button variant="outline-warning " className='text-white'>By This Delicious Theme</Button>
                </Col>
                <Col lg={4} md={6} xs={12}>
                    <h1 className='fs-3'>Get news & offers</h1>
                    <div className='d-flex justify-content-center gap-3'>
                        <input className='rounded-2 border-none p-2' type="email" name="" id="" placeholder='Enter Mail' />
                        <input className='rounded-2 p-2 border none' type="submit" value="Subscribe" />

                    </div>
                    <li className='py-2'>We never send you spam !</li>
                    <div className='d-flex  justify-content-center gap-3 py-2'>
                        <FaFacebook style={{ fontSize: '30px' }} />
                        <FaInstagramSquare style={{ fontSize: '30px' }} />
                        <FaTwitter style={{ fontSize: '30px' }} />
                        <FaGoogle style={{ fontSize: '30px' }} />
                        <FaGithub style={{ fontSize: '30px' }} />
                    </div>
                </Col>
                <Col lg={4} md={6} xs={12}>
                    <h1 className='fs-3'>Contact</h1>
                    <p className='fs-6'>Via Stella,22</p>
                    <h3 className='fs-6'>Modena MO, India</h3>
                    <p className='fs-6'>+390 59 223 912</p>
                    <h className='fs-6'>chilekota123@gmail.com</h>
                </Col>

            </Row>
        </div>
    );
};

export default Footer;