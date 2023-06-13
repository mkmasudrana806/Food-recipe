import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData, useLocation } from "react-router-dom";
import "./recipesDetails.css";
import Recipe from "../recipes/Recipe";

import ChefDetailsCart from "./ChefDetailsCart";
import RecipeDetails from "./RecipeDetails";

const RecipeDetailsContainer = () => {
  const [recipe, setRecipe] = useState({});
  const { recipesData, chefData } = useLoaderData();
  // search aditional data using location or query string
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const recipeId = searchParams.get("recipeId");
  console.log(recipeId);
  useEffect(() => {
    fetch(`http://localhost:5000/recipe/${recipeId}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, [recipe]);

  return (
    <Container className="mt-5 pt-4">
      <Row>
        <Col lg="8" md="6" sm="11" className="scroll">
          {/* chef details and recipe details  */}
          <ChefDetailsCart
            chef={chefData}
            totalRecipes={recipesData.length}
          ></ChefDetailsCart>
          <div className="recipe-details mt-5">
            <RecipeDetails recipe={recipe}></RecipeDetails>
          </div>
        </Col>
        {/* recipes for the selected chefs  */}
        <Col lg="4" md="6">
          <h4>
            More Recipes About :{" "}
            <span className="text-primary">{chefData.name}</span>
          </h4>
          <div className="scroll">
            <div className="recipe-carts">
              {recipesData?.map((recipe, index) => (
                <Recipe recipe={recipe} key={index}></Recipe>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeDetailsContainer;
