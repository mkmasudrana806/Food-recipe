import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import "./recipesDetails.css";
import Recipe from "../recipes/Recipe";

import ChefDetailsCart from "./ChefDetailsCart";
import RecipeDetails from "./RecipeDetails";

const RecipeDetailsContainer = () => {
  const { recipesData, chefData } = useLoaderData();
  console.log(recipesData, chefData);
  //   const { chefs } = useContext(DataContext);
  //   const chef = data[0]?.chef_id;
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
            <RecipeDetails></RecipeDetails>
          </div>
        </Col>
        {/* recipes for the selected chefs  */}
        <Col lg="4" md="6">
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
