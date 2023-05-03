import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';
import { NavLink } from 'react-bootstrap';
import "react-tooltip/dist/react-tooltip.css";
// import "./styles.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }

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
                            <Link className='fs-6 text-decoration-none fw-semibold text-black' to="/blog">Blog</Link>
                            <Link className='fs-6 text-decoration-none fw-semibold text-black' to="/login">Login</Link>
                            {
                                user && <div>
                                    <img id="title" src={user?.photoURL} className='rounded-circle' width={'30px'} height={'30px'} alt="" srcset="" />
                                    <ReactTooltip anchorId='title' place='bottom' content={user?.displayName}> </ReactTooltip>
                                </div>
                            }
                            {
                                user ? <Button onClick={handleSignOut} variant='success'>Logout</Button> :
                                    <Button variant='success'>Login </Button>
                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;