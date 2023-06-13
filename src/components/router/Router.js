import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Content from "../layout/Content";
import Recipes from "../recipes/Recipes";
import Chefs from "../chefs/Chefs";
import Register from "../acounts/register/Register";
import LogIn from "../acounts/log in/LogIn";
import RecipeDetailsContainer from "../recipe details/RecipeDetailsContainer";
import PageNotFound from "../page not found/PageNotFound";
import PrivateRoute from "../private route/PrivateRoute";
import Blogs from "../blogs/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Content></Content>,
      },
      {
        path: "/home",
        element: <Content></Content>,
      },
      {
        path: "/chefs",
        element: <Chefs></Chefs>,
      },
      {
        path: "/recipes",
        element: <Recipes></Recipes>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/recipes/chef/:id",
        loader: async ({ params }) => {
          try {
            // recipes fetch
            const recipeResponse = await fetch(
              `http://localhost:5000/recipes/chef/${params.id}`
            );
            const recipesData = await recipeResponse.json();

            // chef fetch
            const chefResponse = await fetch(
              `http://localhost:5000/chef/${params.id}`
            );
            const chefData = await chefResponse.json();
            return {
              recipesData,
              chefData,
            };
          } catch (error) {
            console.error(error);
            throw new Error("Failed to fetch data");
          }
        },
        element: (
          <PrivateRoute>
            <RecipeDetailsContainer></RecipeDetailsContainer>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "*",
        element: <PageNotFound></PageNotFound>,
      },
    ],
  },
]);
