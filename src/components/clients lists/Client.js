import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col } from "react-bootstrap";

const Client = ({ chef }) => {
  return (
    // client cart
    <Col xl="3" lg="4" md="4" sm="6" xs="12" className="p-2">
      <div
        className="primary-bg rounded text-center"
      >
        <div className="d-flex justify-content-center pt-3">
          <img
            style={{ height: "150px", borderRadius: "50%" }}
            src={chef.photo}
            alt=""
          />
        </div>
        {/* client info body  */}
        <div className="mt-3 px-2 pb-2">
          <h4>{chef.name}</h4>
          <p className="mb-1">{chef.description.slice(0, 85)} ...</p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </p>
        </div>
      </div>
    </Col>
  );
};

export default Client;
