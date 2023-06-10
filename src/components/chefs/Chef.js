import React from "react";
import { Col } from "react-bootstrap";
import "./chef.css";

const Chef = ({ chef }) => {
  console.log(chef);
  return (
    <Col xl="3" lg="4" md="4" sm="6" xs="12" className="mb-5 p-2">
      <div className="pb-3 bg-dark bg-opacity-50 text-white rounded">
        <div style={{ height: "240px" }} className="chef-image">
          <img className="h-100 w-100 rounded" src={chef.photo} alt="" />
        </div>
        <div className="mt-3 p-1">
          <h4>{chef.name}</h4>
          <p className="mb-1">{chef.description.slice(0, 85)} ...</p>
          <div className="d-flex justify-content-between">
            <p className="mb-1">
              <strong>Experience: </strong>
              {chef.yearsOfExperience}
            </p>
            <p className="mb-1">
              <strong>Rating: </strong>
              {chef.rating}
            </p>
          </div>
          <div className="d-flex mt-3 justify-content-between ">
            <button
              style={{ fontSize: "18px" }}
              className="rounded bg-warning border-0 px-lg-3 py-lg-2 px-md-2 py-md-1 px-sm-3 py-sm-2 px-3 py-2"
            >
              Add to favorite
            </button>
            <button
              style={{ fontSize: "18px" }}
              className="rounded bg-warning border-0 px-lg-3 py-lg-2 px-md-2 py-md-1 px-sm-3 py-sm-2 px-3 py-2"
            >
              Recipes
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Chef;
