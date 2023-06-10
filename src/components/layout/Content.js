import React from "react";
import Hero from "../hero/Hero";
import Chefs from "../chefs/Chefs";
import Recipes from "../recipes/Recipes";
import ClientContainer from "../clients lists/ClientContainer";

const Content = () => {
  return (
    <div>
      <Hero></Hero>
      {/* <Chefs></Chefs> */}
      {/* <Recipes></Recipes> */}
      <ClientContainer></ClientContainer>
    </div>
  );
};

export default Content;
