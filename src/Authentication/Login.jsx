import React, { useContext, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { FaTwitter, FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { userLogin, signWithGoogle } = useContext(AuthContext);

    const handleLoginUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            return setError(" Ensure string has two digits")
        }
        else if (password.length < 6) {
            return setError("Ensure Password length is 6");
        }
        userLogin(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('')
                setSuccess("Successfully Login");
                form.reset();
            })
            .catch(error => {
                setSuccess('');
                setError(error.message)
            })

    }
    const handleGoogleSignUp = () => {
        signWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('')
                setSuccess("Successfully Login");
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <Container>
            <Row className='d-flex justify-content-center mt-4'>
                <Col lg={4} md={6} xs={12} >
                    <Form onSubmit={handleLoginUser} className='text-black fs-6 border px-4 py-4'>
                        <Form.Group
                            className="mb-1" controlId="formGroupEmail">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" name='email' required placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' required placeholder="Enter Password" />
                        </Form.Group>
                        <div className='d-flex justify-content-center'>
                            <input className='w-75 bg-warning border-0 p-1 rounded text-white fw-bold fs-6' type="submit" value="Login" />
                        </div>

                        <p className='text-center fs-6'><small>Don't have an account ? <Link
                            to='/register' className='text-blue fw-bold'>Register</Link></small></p>
                        <p className='text-center '><small className='text-success'>{success}</small></p>
                        <p className='text-center '><small className='text-danger'>{error}</small></p>
                        <div className='d-flex justify-content-center gap-3 pb-3'>
                            <FaGoogle  onClick={handleGoogleSignUp} style={{ fontSize: '30px', cursor:'pointer' }} />
                            <FaTwitter style={{ fontSize: '30px' }} />
                            <FaGithub style={{ fontSize: '30px' }} />
                        </div>
                    </Form>
                    <hr className=' border border-2 border-black  mx-4' />
                    <p>Login With</p>


                </Col>
            </Row>
        </Container>
    );
};

export default Login;