import React, { useContext } from "react";
import "./recipes.css";
import { Container, Row } from "react-bootstrap";
import { DataContext } from "../context/DataProvider";
import Recipe from "./Recipe";

const Recipes = () => {
  const { recipes } = useContext(DataContext);
  return (
    <div id="recipes" className="my-5">
      <Container className="mb-5 pb-5">
        <div className="text-center">
          <h3 className=" fs-1 ">Our Recipes</h3>
          <p>
            We provide Qualityfull Repices and experiences chefs. here are some
            recipes
          </p>
        </div>
        <Row className="justify-content-center mt-4">
          {recipes?.recipes?.map((recipe) => (
            <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Recipes;
