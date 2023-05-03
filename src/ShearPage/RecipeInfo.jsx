import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const RecipeInfo = () => {
    return (
        <Container className='py-4'>
            <div className='text-center py-3'>
                <h3 className='text-warning fw-semibold fst-italic'>Find</h3>
                <h1 className='fw-lighter fs-2 fst-italic m-0 p-0'>OUR MENUS</h1>
            </div>
            <Row className='d-flex justify-content-center align-items-center fst-italic'>
                <Col lg={4} md={6} xs={12} className='d-flex justify-content-center align-items-center mx-auto'>
                    <div>
                        <h3 className='text-success text-center fs-3'>ENTRESS</h3>
                        <hr className='me-5' />
                        <p className='fs-4 fw-semibold m-0 '>Freid Spring Rolls ............<span className='text-warning'>$15.00</span></p>
                        <p className='fs-5 fst-italic'>Chicken or Vegetable</p>
                        <p className='fs-5 fw-semibold m-0 '>Ponir Summer Rools.................<span className='text-warning'>$11.00</span></p>
                        <p className='fs-5 fst-italic'>With Shirmp in a tamarind sauce</p>
                        <p className='fs-4 fw-semibold m-0'>Fried Fish Shrimp..............<span className='text-warning'>$14.00</span></p>
                        <p className='fs-5 '>With a plum sauce</p>
                    </div>
                </Col>
                <Col lg={4} md={6} xs={12} className='d-flex justify-content-center align-items-center mx-auto'>
                    <div className='fst-italic'>
                        <h3 className='text-success text-center fst-italic fs-3'>APPETIZERS</h3>
                        <hr className='me-5' />
                        <p className='fs-4 fw-semibold m-0 fst-italic'>Beef and Broccoli............<span className='text-warning'>$5.00</span></p>
                        <p className='fs-5'>Chicken or Vegetable</p>
                        <p className='fs-4 fw-semibold m-0 fst-italic'>ALL' Argosta...................<span className='text-warning'>$12.00</span></p>
                        <p className='fs-5'>Risotto with lobster meat</p>
                        <p className='fs-4 fw-semibold fst-italic m-0'>Chicken Teriyaki..............<span className='text-warning'>$10.00</span></p>
                        <p className='fs-5 '>With a plum sauce</p>
                    </div>
                </Col>
                <Col lg={4} md={6} xs={12} className='d-flex justify-content-center align-items-center mx-auto'>
                    <div className=''>
                        <h3 className='text-success text-center fs-3'>ENTREES</h3>
                        <hr className='me-5' />
                        <p className='fs-5 fw-semibold m-0'>Crepe With Nutella ............<span className='text-warning'>$5.00</span></p>
                        <p className='fs-5'>Chicken or Vegetable</p>
                        <p className='fs-4 fw-semibold m-0'>Pasinon Pavlova.............<span className='text-warning'>$8.00</span></p>
                        <p className='fs-5'>With Shirmp in a tamarind sauce</p>
                        <p className='fs-5 fw-semibold m-0'>Creme Cheesecake................<span className='text-warning'>$9.00</span></p>
                        <p className='fs-5'>With a plum sauce</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default RecipeInfo;