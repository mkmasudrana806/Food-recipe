import React from "react";
import Hero from "../hero/Hero";
import Chefs from "../chefs/Chefs";
import Recipes from "../recipes/Recipes";
import ClientContainer from "../clients lists/ClientContainer";
import Services from "../services/Services";

const Content = () => {
  return (
    <div>
      <Hero></Hero>
      {/* <Chefs></Chefs>
      <Recipes></Recipes>
      <ClientContainer></ClientContainer> */}
      <Services></Services>

    </div>
  );
};

export default Content;
