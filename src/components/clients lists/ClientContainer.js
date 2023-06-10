import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { DataContext } from "../context/DataProvider";
import Client from "./Client";

const ClientContainer = () => {
  // here i am using fake data similar as chefs info.
  const { chefs } = useContext(DataContext);
  return (
    <div>
      <Container>
        <div id="chefs" className="mt-5 bg-dark bg-opacity-75 my-5">
          <Container className="mb-5 pb-5">
            <div className="text-center pt-4 text-white">
              <h3 className=" fs-1 ">Client Testmonial</h3>
              <p className="fs-5">
              Our Client are very happy to get our service and they are very satisfied with our service, they are very happy to get our service and they are very satisfied with our service
              </p>
            </div>
            <Row className="justify-content-center mt-4">
          {chefs?.chefs?.map((chef) => (
            <Client key={chef.id} chef={chef}></Client>
          ))}
        </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default ClientContainer;
