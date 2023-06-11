import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import googleIcon from "../../../googleLogo.png";
import gitHubIcon from "../../../githubLogo.png";
import "./login.css";

const LogIn = () => {
  const [error, setError] = useState(null);
  const { logInUser, signInGoogle, signInGitHub } = useContext(AuthContext);

  // handle email and password sign in
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logInUser(email, password)
      .then((userCredential) => {
        console.log(userCredential);
        console.log("login successful");
      })
      .catch((error) => {
        console.log(error);
        console.log("login korte problem hosse");
      });
  };

  // handle google sigin in mehtod
  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((result) => {
        // console.log(result.user);
      })
      .catch((error) => console.log(error));
  };

  // handle GitHub sign in method
  const handleGitHubSignIn = () => {
    signInGitHub()
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
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
          <form onSubmit={handleSignIn}>
            <h3 className="text-center">Log In Your Account</h3>

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

            <button type="submit" className="primary-btn fs-5 w-100 mb-3 ">
              Log In
            </button>
          </form>
          <strong className="text-danger">{error ? error : ""}</strong>
          <h5 className="text-center mt-2">
            Don't have any account ?{" "}
            <Link
              className="primary-text-color text-decoration-none"
              to="/register"
            >
              {" "}
              Register
            </Link>
          </h5>
          <p className="text-center">OR</p>

          <button
            onClick={handleGoogleSignIn}
            className="google-signin bg-primary w-100 border-0"
          >
            <img src={googleIcon} alt="" />
            <p className="ms-5">Continue With Google</p>
          </button>
          <button
            onClick={handleGitHubSignIn}
            className="github-signin bg-primary w-100 border-0"
          >
            <img src={gitHubIcon} alt="" />
            <p className="ms-5">Continue with GitHub</p>
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default LogIn;
