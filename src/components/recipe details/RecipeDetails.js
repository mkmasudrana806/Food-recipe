import React from "react";
import Recipe from "../recipes/Recipe";
import { Link } from "react-router-dom";

const RecipeDetails = ({ recipe, show = 0 }) => {
  const { chef_id, ingredients, method, name, photo, rating, recipe_id } =
    recipe || {};

  return (
    <div
      style={{
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        borderRadius: "8px",
      }}
      className="rounded p-2 mb-4"
    >
      <div className="details-recipe-cart-img mb-3 w-100">
        <img className="w-100" src={photo} alt="" />
      </div>
      <div className="details-recipe-cart-body">
        <h3>{name}</h3>
        <p>
          <strong>Method:</strong> {method}
        </p>
        <h3>Ingredients Item</h3>
        <ul>
          {ingredients?.map((li, index) => (
            <li className="mt-2 p-1" key={index}>
              {li}
            </li>
          ))}
        </ul>
        <div className="details-recipe-cart-footer">
          <p>
            <strong>Rating:</strong> {rating}
          </p>
        </div>
        <Link className="primary-btn">Add to favorite</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
