import React, { useContext } from "react";
import "./header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
        className="position-top"
      >
        <Container>
          <Navbar.Brand href="#home" className="fs-3">
            Free From Fare
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="fs-5">
            <Nav className="me-auto nav-items">
              <Link to="/home">Home</Link>
              <Link to="/chefs">Chefs</Link>
              <Link to="/recipes">Recipes</Link>
              <Link to="/blogs">Blogs</Link>
            </Nav>
            <Nav className="nav-items">
              {user?.uid ? (
                <>
                  {" "}
                  <button className="border-0 px-3  rounded bg-secondary">
                    Log Out
                  </button>
                  <button
                    style={{ height: "45px", width: "45px" }}
                    className="bg-white fs-2 rounded-circle border-0 ms-3"
                  >
                    <FontAwesomeIcon icon={faUserLarge}></FontAwesomeIcon>
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">Log In</Link>
                  <Link to="/register">Register</Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
