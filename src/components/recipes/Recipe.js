import React, { useContext } from "react";
import "./recipe.css";
import { Col } from "react-bootstrap";
import { DataContext } from "../context/DataProvider";

const Recipe = ({ recipe }) => {
  const { chefs } = useContext(DataContext);
  const {
    recipe_id,
    chef_id,
    ingredients,
    method,
    photo,
    rating,
    reciple_id,
    name,
  } = recipe;
  let chef = chefs?.chefs?.find((chef) => chef.id === chef_id);
  return (
    // recipe cart
    <Col xl="3" lg="4" md="4" sm="6" xs="12" className="p-2 chef recipe-cart">
      <div
        // style={{
        //   boxShadow:
        //     "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        //   borderRadius: "8px",
        // }}
        // style={{
        //   boxShadow:
        //     "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        // }}
        className="rounded recipe border border-dark border-opacity-7"
      >
        <div style={{ height: "190px" }} className="chef-image">
          <img className="h-100 w-100 rounded" src={photo} alt="" />
        </div>
        {/* recipe info body  */}
        <div className="mt-2 p-1">
          <h4>{name}</h4>
          <p className="mb-1">{method.slice(0, 60)} ...</p>
          <h5 className="mt-2">{chef?.name}</h5>
          <div className="d-flex justify-content-between">
            <p className="mb-1">
              <strong>Experience: </strong>
              {chef?.yearsOfExperience}
            </p>
            <p className="mb-1">
              <strong>Rating: </strong>
              {chef?.rating}
            </p>
          </div>
          <div className="d-flex my-2 justify-content-between ">
            <button className=" primary-btn">
              Add to favorite
            </button>
            <button className="primary-btn">
              View
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Recipe;
