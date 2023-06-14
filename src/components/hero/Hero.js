import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="bg-dark bg-opacity-75 mt-5 pt-3">
      <Container>
        <Row
          // className="py-5 text-light  text-center text-sm-start align-items-lg-center flex-lg-row flex-column-reverse"
          // id="home"
          className="text-light py-5 text-center text-sm-start  flex-md-row flex-column-reverse align-items-center"
        >
          <Col lg="6" md="6" className="mt-sm-3">
            <div>
              <h1>
                Become a <span className="primary-text-color">Chef</span>
              </h1>
              <p className="lead my-4 ">
                Unleash your culinary potential and become a chef
                extraordinaire. Dive into the world of flavors, creativity, and
                passion, and embark on a rewarding journey as you master the art
                of culinary craftsmanship.
              </p>

              <Link to='/register'>
                <button
                  style={{ borderRadius: "50px" }}
                  className="primary-btn"
                >
                  Register Now
                </button>
              </Link>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div>
              <a href="https://svgshare.com/s/gH0">
                <img
                  className="img-fluid d-none d-xs-none  d-sm-block"
                  src="http://www.themeenergy.com/themes/html/social-chef/images/img2.jpg"
                  title=""
                  alt="hero images"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
