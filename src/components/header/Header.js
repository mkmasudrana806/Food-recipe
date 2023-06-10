import React from "react";
import "./header.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="fs-3">
            Your Recipes
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="fs-5">
            <Nav className="me-auto">
              <Nav.Link href="#chefs">Chefs</Nav.Link>
              <Nav.Link href="#recipes">Recipes</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#blogs">Blogs</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Sign In</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
