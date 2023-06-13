import React, { useContext, useState } from "react";
import "./recipe.css";
import { Col } from "react-bootstrap";
import { DataContext } from "../context/DataProvider";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";



const Recipe = ({ recipe }) => {
  const [disable, setDisable] = useState(false);
  const { chefs } = useContext(DataContext);
  const { chef_id, method, photo, name, recipe_id } = recipe;
  let chef = chefs?.chefs?.find((chef) => chef.id === chef_id);

  const favoriteBtnDisable = () => {
    toast.success("Recipe Added to the Favorite List!");
    setDisable(true);
  };
  return (
    // recipe cart
    <Col xl="3" lg="4" md="4" sm="6" xs="12" className="p-2 chef recipe-cart">
      <div className="rounded recipe border border-dark border-opacity-7">
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
            {disable ? (
              ""
            ) : (
              <button onClick={favoriteBtnDisable} className=" primary-btn">
                Add to favorite
              </button>
            )}
            <Link
              to={`/recipes/chef/${chef_id}?recipeId=${recipe_id}`}
              className="primary-btn"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Recipe;
