import React, { useContext, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { userCreate } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
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
    return (
        <Container>
            <Row className='d-flex justify-content-center mt-4'>
                <Col lg={4} md={6} xs={12} >
                    <Form onSubmit={handleCreateSignUp} className='text-black fs-6 border px-4 py-4'>
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
                            <Form.Control type="text" name='photo' required placeholder="Upload Photo" />
                        </Form.Group>
                        <div className='d-flex justify-content-center'>
                            <input className='w-75 bg-warning border-0 p-1 rounded text-white fw-bold fs-6' type="submit" value="Sign Up" />
                        </div>

                        <p className='text-center fs-6'><small>Already have an account ?<Link
                            to='/Login' className='text-blue fw-bold'>Login</Link></small></p>
                        <p className='text-center '><small className='text-success'>{success}</small></p>
                        <p className='text-center '><small className='text-danger'>{error}</small></p>

                    </Form>
                    <hr className=' border border-2 border-black  mx-4' />
                    {/* <div className='d-flex  gap-2 justify-content-center align-items-center border rounded-4 mx-2 mb-1'>
                <img src={facebook} alt="" width={"35px"} srcset="" />
                <p className='fs-5 text-white  pt-2'>Continue With Facebook</p>
            </div>
            <div className='d-flex  gap-2 justify-content-center align-items-center border rounded-4 mx-2 p'>
                <img src={google} alt="" width={"33px"} srcset="" />
                <p className='fs-5 text-white  pt-2'>Continue With Facebook</p>
            </div> */}

                </Col>
            </Row>
        </Container>
    );
};

export default Register;