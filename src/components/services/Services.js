import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="p-5" id="services">
      <div className="container">
        <h2 className="text-center py-3"> Our Services</h2>
        <div className="row text-center g-4">
          <Col xs="12" sm="12" md="6" lg="4" xl="4" className="col-md px-2">
            <div className="card bg-dark bg-opacity-40 text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-laptop"></i>
                </div>
                <h3 className="card-title mb-3">On-Time Delivery Recipes</h3>
                <p className="card-text">
                  Our On-Time Delivery Recipes are perfect for busy weeknights
                  or when you need a quick and easy meal. These recipes are
                  designed to be prepared and cooked within a certain
                  timeframe,ensuring that your meal is delivered on time
                </p>
                <Link to={"/register"}>
                  <button className="btn btn-warning text-dark btn-lg">
                    Register Now
                  </button>
                </Link>
              </div>
            </div>
          </Col>
          <Col xs="12" sm="12" md="6" lg="4" xl="4" className="col-md px-2">
            <div className="card bg-dark text-white">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-person-square"></i>
                </div>
                <h3 className="card-title mb-3">Meal Prep Recipes</h3>
                <p className="card-text">
                  Our Meal Prep Recipes are ideal for those who want to save
                  time and have healthy meals ready to go throughout the week.
                  These recipes can be prepared in advance and stored in the
                  fridge or freezer, making it easy to eat nutritious meals
                </p>
                <Link to={"/register"}>
                  <button className="btn btn-warning text-dark btn-lg">
                    Register Now
                  </button>
                </Link>
              </div>
            </div>
          </Col>
          <Col xs="12" sm="12" md="6" lg="4" xl="4" className="col-md px-2">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-people"></i>
                </div>
                <h3 className="card-title mb-3">One-Pot Recipes</h3>
                <p className="card-text">
                  Our One-Pot Recipes are perfect for those who want to minimize
                  cleanup and simplify their cooking process. These recipes are
                  designed to be cooked in a single pot or pan, quick and easy
                  to prepare while still packing plenty of flavor
                </p>
                <Link to={"/register"}>
                  <button className="btn btn-warning text-dark btn-lg">
                    Register Now
                  </button>
                </Link>
              </div>
            </div>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default Services;
