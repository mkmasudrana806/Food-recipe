import React, { useContext } from "react";
import "./chefs.css";
import { DataContext } from "../context/DataProvider";
import Chef from "./Chef";
import { Container, Row } from "react-bootstrap";

const Chefs = () => {
  const { chefs } = useContext(DataContext);
  return (
    <div id="chefs" className="mt-5 bg-dark bg-opacity-75 my-5">
      <Container className="mb-5 pb-5">
        <div className="text-center pt-4 text-white">
          <h3 className=" fs-1 ">Our Chefs</h3>
          <p>
            We ensure Qualitifull Services. we have Experiences Chefs for many
            recipes
          </p>
        </div>
        <Row className="justify-content-center mt-4">
          {chefs?.chefs?.map((chef) => (
            <Chef key={chef.id} chef={chef}></Chef>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Chefs;
