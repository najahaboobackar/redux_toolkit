import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#">Redux_toolkit</Navbar.Brand>
      
      
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link to="/" as={Link}>Products</Nav.Link>
          
          
        </Nav>
        <Navbar.Toggle/>
        <Navbar.Collapse>
            <NavBar.Text>
            <Nav.Link to="/" as={Link}>ca</Nav.Link>
          
                
            </NavBar.Text>
        </Navbar.Collapse>
       
    
    </Container>
  </Navbar>
  )
}

export default NavBar
