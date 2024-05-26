import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
            
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt="Logo"
              className="img-fluid"
              style={{ width: '60px' }} // Adjust width as needed
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home" className="pt-3" style={{ fontSize: '19px', color: '#93c8ff' }}>Home</Nav.Link>
              <Nav.Link href="#link1" className="pt-3" style={{ fontSize: '19px', color: '#93c8ff' }}>Link 1</Nav.Link>
              <Nav.Link href="#link2" className="pt-3" style={{ fontSize: '19px', color: '#93c8ff' }}>Link 2</Nav.Link>
              <Nav.Link href="#link3" className="pt-3" style={{ fontSize: '19px', color: '#93c8ff' }}>Link 3</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
     
  );
};

export default NavbarComponent;
