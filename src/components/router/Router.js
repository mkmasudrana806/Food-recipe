import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Content from "../layout/Content";
import Recipes from "../recipes/Recipes";
import Chefs from "../chefs/Chefs";
import Register from "../acounts/register/Register";
import LogIn from "../acounts/log in/LogIn";

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
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
    ],
  },
]);
