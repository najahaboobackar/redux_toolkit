import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
    // Access the Redux state
    const cartProducts = useSelector(state => state.cart);

    // Ensure cardProducts is defined before accessing its properties
    

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Redux_toolkit</Navbar.Brand>
                
                <Navbar.Toggle aria-controls="navbarScroll" />
                
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">Products</Nav.Link>
                    </Nav>
                    
                    <Navbar.Text className="justify-content-end">
                        <Nav.Link as={Link} to="/cart">mybag {cartProducts.length}</Nav.Link>
                    </Navbar.Text>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    );
}

export default NavBar;
