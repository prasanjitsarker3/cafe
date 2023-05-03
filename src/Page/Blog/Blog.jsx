import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import download from '../../../public/Image/Blogging.jpg';
import Pdf from "react-to-pdf";
const ref = React.createRef();
import { FaDownload } from 'react-icons/fa';

const Blog = () => {
    return (
        <Container className='py-5'>
            <div className='text-center text-success py-3'>
                <h3>Blog Section & Information Download</h3>
            </div>
            <Row>
                <Col lg={6} xs={12} className='d-flex justify-content-center align-items-center'>
                    <div>
                        <img src={download} alt="" width={'430px'} height={'250px'} srcset="" />
                    </div>
                </Col>
                <Col className='d-flex justify-content-center align-items-center pt-3'>
                    <div>
                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <Button onClick={toPdf} variant="outline-success">Download PDF <FaDownload /></Button>}
                        </Pdf>

                    </div>

                </Col>
               
            </Row>
            <Row ref={ref}>
                <Col lg={6} xs={12} className='d-flex justify-content-center align-items-center mx-auto m-2 '>
                    <div className='border p-2 mt-4'>
                        <p className='fs-4 fw-brighter'>Tell us the differences between uncontrolled and controlled components?</p>
                        <p>An uncontrolled component is similar to a traditional HTML form input element. You can get the value of the input by accessing the reference to the input.
                            Controlled Component on the other hand, we have a controlled component. Rather than accessing the value of the input through the reference of the element, we can store the value in React state.
                        </p>
                    </div>
                </Col>
                <Col lg={6} xs={12} className='d-flex justify-content-center align-items-center mx-auto m-2 '>
                    <div className='border p-2'>
                        <p className='fs-4 fw-brighter'>How to validate React props using PropTypes</p>
                        <p className='p1-1'>More Complex Prop Types In addition to validating arrays and primitive value prop types, we can also use prop-types to validate more complex types.
                            We can use prop-types to validate data types of various React entities,The prop-types library also lets us validate that an object is an instance of a given constructor or class.
                        </p>
                    </div>
                </Col>
                <Col lg={6} xs={12} className='d-flex justify-content-center align-items-center mx-auto m-2 '>
                    <div className='border p-2'>
                        <p className='fs-4 fw-brighter'>Tell us the difference between nodejs and express js.</p>
                        <li>Node.js is a run-time environment for building server-side event-driven input or output application using javascript.</li>
                        <li>Express.js is a framework based on node.js for building web-application using principles and approaches of node.js</li>
                    </div>
                </Col>
                <Col lg={6} xs={12} className='d-flex justify-content-center align-items-center mx-auto m-2'>
                    <div className='border p-2'>
                        <p className='fs-4 fw-brighter'>What is a custom hook, and why will you create a custom hook?</p>
                        <p> Custom hooks hold a certain logic that make use of React's hooks like useState, useEffect, etc... You usually create custom hooks when a certain part in your project is reusable and makes use of React's hooks.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Blog;