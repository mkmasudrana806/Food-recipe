import React, { useContext } from "react";
import "./recipes.css";
import { Container, Row } from "react-bootstrap";
import { DataContext } from "../context/DataProvider";
import Recipe from "./Recipe";

const Recipes = () => {
  const { recipes } = useContext(DataContext);
  return (
    <div className="mt-5 py-5" style={{ backgroundColor: "blanchedalmond" }}>
      <Container>
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
