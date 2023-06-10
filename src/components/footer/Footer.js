import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <div className="py-4 bg-dark">
      <Container>
        <Row className="row mt-5">
          <Col
            xs="12"
            sm="12"
            md="8"
            lg="4"
            className="footer-banner-section mt-4"
          >
            <h3>Free From Fare</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              facilis dolorem repellat hic similique iure, sint perferendis
              tempora ea quisquam?
            </p>
            <div className="footer-icon">
              {/* <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Twitter} alt="" /> */}
            </div>
          </Col>
          <Col
            xs="6"
            md="4"
            sm="6"
            lg="2"
            className="footer-company-section mt-4"
          >
            <h4>Company</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Blog</p>
          </Col>
          <Col
            xs="6"
            md="4"
            sm="6"
            lg="2"
            className="footer-product-section mt-4"
          >
            <h4>Product</h4>
            <p>Recipes</p>
            <p>Meal Plans</p>
            <p>Ingredients</p>
          </Col>
          <Col
            xs="6"
            md="4"
            sm="6"
            lg="2"
            className="footer-support-section mt-4"
          >
            <h4>Support</h4>
            <p>Contact Us</p>
            <p>Help Center</p>
            <p>FAQ</p>
          </Col>
          <Col
            xs="6"
            md="4"
            sm="6"
            lg="2"
            className="footer-contact-section mt-4"
          >
            <h4>Contact</h4>
            <address>524 Broadway.NYC +1777-978-5570</address>
          </Col>
        </Row>
        <hr className="text-white" />
        <div className="footer-end">
          <p>@2023 Free From Fare. All Rights Reserved</p>
          <p>
            Powered by <strong>Free From Fare</strong>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
