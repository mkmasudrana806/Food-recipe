import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { updateProfile } from "@firebase/auth";

const Register = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photourl = form.photourl.value;

    // validity check and create new user
    if (name && email && password && photourl) {
      if (password.length < 6) {
        setError("Password must be at least 6 character");
        return;
      }
      setError("");
      createUser(email, password)
        .then((result) => {
          updateNameAndPhoto(result.user, name, photourl);
          navigate("/login");
        })
        .catch((error) => console.log(error));
    } else {
      setError("You must fill all the field!");
      return;
    }

    // update name and photo
    const updateNameAndPhoto = (user, name, photo) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then((result) => {
          console.log(result.user);
        })
        .catch((error) => {
          console.log(error.error);
        });
    };
  };

  return (
    <Container className="mt-5 pt-3">
      <Row className="justify-content-center">
        <Col
          className="justify-content-center bg-dark text-light px-3 py-4 my-5 rounded"
          xl="4"
          lg="5"
          md="6"
          sm="9"
          xs="10"
        >
          <form onSubmit={handleRegister}>
            <h3 className="text-center">Register New Accout</h3>
            <div className="my-3">
              <label className="form-label">Your Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label className="form-label">Email address</label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Your Email Address"
              />
              <div id="emailHelp" className="form-text">
                Well never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Your Password"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Photo</label>
              <input
                name="photourl"
                type="text"
                className="form-control"
                placeholder="Your Photo URL"
              />
            </div>
            <button type="submit" className="primary-btn fs-5 w-100 mb-3 ">
              Register
            </button>
          </form>
          <strong className="text-danger">{error ? error : ""}</strong>
          <h5 className="text-center mt-2">
            I have already account ?{" "}
            <Link
              className="primary-text-color text-decoration-none"
              to="/login"
            >
              {" "}
              Login
            </Link>
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
