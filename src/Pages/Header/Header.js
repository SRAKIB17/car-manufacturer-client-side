import React from 'react';
import './Header.css'
import bg from '../../images/header-bg.png';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <div className='bgHeader'>
                <img src={bg} alt="" />
                <img src={bg} alt="" />
            </div>
            <div>
                <Navbar className='headerTop' expand="lg">
                   
                        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px', color: 'white' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} className='text-light h5' to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} className='text-light h5' to="#action2">Blogs</Nav.Link>
                                <Nav.Link as={Link} className='text-light h5' to="#action2">Login</Nav.Link>
                               
                                <>
                                    <Nav.Link as={Link} className='text-light h5' to="/manage-item">Manage Item</Nav.Link>
                                    <Nav.Link as={Link} className='text-light h5' to="/add-item">Add Item</Nav.Link>
                                    <Nav.Link as={Link} className='text-light h5' to="/add-item">Sign out</Nav.Link>
                                </>
                                {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown> */}

                            </Nav>
                            {/* <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form> */}
                        </Navbar.Collapse>
                    
                </Navbar>
            </div>
        </div>
    );
};

export default Header;