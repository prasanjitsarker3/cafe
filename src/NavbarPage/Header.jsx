import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container >
                    <Navbar.Brand href="#" className='text-success fw-bold fw-bold ' ><Link to='/' className='text-decoration-none text-success fs-4'>ChileKota</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 d-flex justify-content-center align-content-center py-1 gap-3"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='fs-6 text-decoration-none fw-semibold text-black' to="/" >Home</Link>
                            <Link className='fs-6 text-decoration-none fw-semibold text-black' to="/about" >About</Link>
                            <Link className='fs-6 text-decoration-none fw-semibold text-black' to="">Blog</Link>
                            <Link className='fs-6 text-decoration-none fw-semibold text-black' to="">Login</Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;