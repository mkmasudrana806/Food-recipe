import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Hero from "../hero/Hero";
import Content from "../layout/Content";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Content></Content>,
      },
    ],
  },
]);
