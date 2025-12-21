"use client";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';



function NavBar() {
  return (
    <Navbar expand="xxl" className="bg-dark navbar-dark">
  <Container fluid className="px-5 px-lg-10">
        <Navbar.Brand as={Link} href="/">NewJeans</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/biography">Biography</Nav.Link>
            <Nav.Link href="/album">Discography</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;