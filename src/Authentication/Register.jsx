import React, { useContext, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { updateProfile } from 'firebase/auth';
import { FaTwitter, FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {
    const { userCreate, logOut, signWithGoogle, signWithGithub } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const handleCreateSignUp = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            return setError(" Ensure string has two digits")
        }

        else if (password.length < 6) {
            return setError("Ensure Password length is 6");
        }
        setError('')
        setSuccess('')
        userCreate(email, password)
            .then(result => {
                const loggedUser = result.user;
                updateUserInfo(loggedUser, name, photo)
                console.log(loggedUser);
                setError('');
                setSuccess("Successfully User");
                form.reset();
                logOut();
                navigate('/login');

            })
            .catch(error => {
                setSuccess('')
                setError(error.message);
            })
    }

    const updateUserInfo = (currentUser, name, photo) => {
        updateProfile(currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const handleGoogleSignUp = () => {
        signWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('')
                setSuccess("Successfully Login");
                navigate('/')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleGithubSignUp = () => {
        signWithGithub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                setSuccess('Successfully Login');
                navigate('/');

            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <Container>
            <Row className='d-flex justify-content-center mt-4 pb-3'>
                <Col lg={4} md={6} xs={12} >
                    <Form onSubmit={handleCreateSignUp} className='text-black fs-6 border px-4 py-4'>
                    <p className='text-center fs-5 m-0 text-success'>Please Registration !</p>
                        <Form.Group
                            className="mb-1" controlId="formGroupEmail">
                            <Form.Label className='fs-6'>Name </Form.Label>
                            <Form.Control type="text" name='name' required placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group
                            className="mb-1" controlId="formGroupEmail">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" name='email' required placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' required placeholder="Enter Password" />
                        </Form.Group>
                        <Form.Group
                            className="mb-2" controlId="formGroupEmail">
                            <Form.Label >Photo </Form.Label>
                            <Form.Control type="photo" name='photo' required placeholder="Upload Photo" />
                        </Form.Group>
                        <div className='d-flex justify-content-center'>
                            <input className='w-75 bg-warning border-0 p-1 rounded text-white fw-bold fs-6' type="submit" value="Sign Up" />
                        </div>

                        <p className='text-center fs-6 pb-0'><small>Already have an account ?<Link
                            to='/Login' className='text-blue fw-bold'>Login</Link></small></p>
                        <p className='text-center '><small className='text-success'>{success}</small></p>
                        <p className='text-center '><small className='text-danger'>{error}</small></p>
                        <p className='text-center m-0 p-0'>Registration With</p>
                        <div className='d-flex justify-content-center gap-3 '>
                            <FaGoogle onClick={handleGoogleSignUp} style={{ fontSize: '30px', cursor: 'pointer' }} />
                            <FaTwitter style={{ fontSize: '30px' }} />
                            <FaGithub onClick={handleGithubSignUp} style={{ fontSize: '30px', cursor: 'pointer' }} />
                        </div>

                    </Form>



                </Col>
            </Row>
        </Container>
    );
};

export default Register;