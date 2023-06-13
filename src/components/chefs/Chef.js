import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import "./chef.css";
import { DataContext } from "../context/DataProvider";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Chef = ({ chef }) => {
  const { recipes } = useContext(DataContext);
  let { id } = chef;
  let totalRecipes = recipes?.recipes?.filter(
    (recipe) => recipe.chef_id === id
  );

  return (
    // chef cart
    <Col xl="3" lg="4" md="4" sm="6" xs="12" className="p-2 chef-cart">
      <div
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          borderRadius: "8px",
        }}
        className="border border-secondary text-white rounded chef"
      >
        {/* <div className="bg-dark bg-opacity-50 text-white rounded chef"> */}
        <div style={{ height: "240px" }} className="chef-image">
          <LazyLoadImage
            src={chef.photo}
            className="h-100 w-100 rounded"
            alt="Image Alt"
            effect="blur"
          />
        </div>
        {/* chef info body  */}
        <div className="mt-2 p-1">
          <h4>{chef?.name}</h4>
          <p className="mb-1">{chef?.description?.slice(0, 60)} ...</p>
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
          <div className="d-flex justify-content-between">
            <p className="mb-1">
              <strong>Likes: </strong>
              {chef?.likes}
            </p>
            <p className="mb-1">
              <strong>Recipes: </strong>
              {totalRecipes?.length}
            </p>
          </div>

          <div className="d-flex my-2 justify-content-between ">
            <button className="secondary-btn">Add to favorite</button>
            <button className="secondary-btn">
              <Link to={`/recipes/chef/${id}?recipeId=${1}`}>Recipes</Link>
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Chef;
