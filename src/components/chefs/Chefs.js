import React, { useContext } from "react";
import "./chefs.css";
import { DataContext } from "../context/DataProvider";
import Chef from "./Chef";
import { Container, Row } from "react-bootstrap";

const Chefs = () => {
  const { chefs } = useContext(DataContext);
  console.log(chefs);

  return (
    <div className="mt-5 bg-dark bg-opacity-75">
      <Container>
        <h3 className="text-white fs-1 text-center pt-3">Our Chefs</h3>
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
