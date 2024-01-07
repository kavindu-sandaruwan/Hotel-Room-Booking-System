import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavScrollExample() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ paddingLeft: "50px", paddingRight: "50px" }}
    >
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "200px", padding: "20px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/promotions">Promotions</Nav.Link>
            <Nav.Link as={Link} to="/details">Promotion Details</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>

            {/* <Nav.Link href="#action2">About Us</Nav.Link> */}
            {/* <Nav.Link href="#action3">Contact</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
