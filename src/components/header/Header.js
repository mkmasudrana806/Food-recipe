import React, { useContext } from "react";
import "./header.css";
import {
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { hover } from "@testing-library/user-event/dist/hover";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    console.log("clicked hosse to");
    logOut()
      .then((result) => {
        const user = result.user;
        console.log("clicked logout button");
      })
      .catch((error) => {
        const er = error.error;
      });
  };

  return (
    <div style={{ marginBottom: "100px" }}>
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
              <Link>{user?.displayName}</Link>
            </Nav>
            <Nav className="nav-items">
              {user?.uid ? (
                <>
                  {" "}
                  <button onClick={handleLogOut} className="secondary-btn">
                    Log Out
                  </button>
                  {user.photoURL ? (
                    <>
                      <OverlayTrigger
                        overlay={
                          <Tooltip title="this is tip">
                            {user.displayName}
                          </Tooltip>
                        }
                        target={["hover", "focus"]}
                        placement={"left-start"}
                      >
                        <div
                          style={{ height: "45px", width: "45px" }}
                          className="border-0 rounded-circle ms-3"
                        >
                          <img
                            className="h-100 w-100 rounded-circle"
                            src={user.photoURL}
                            alt=""
                          />
                        </div>
                      </OverlayTrigger>
                    </>
                  ) : (
                    <>
                      <button
                        style={{ height: "45px", width: "45px" }}
                        className="bg-white fs-3 rounded-circle border-0 ms-3"
                      >
                        <FontAwesomeIcon icon={faUserLarge}></FontAwesomeIcon>
                      </button>
                    </>
                  )}
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
