import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [chefs, setChefs] = useState({});
  const [recipes, setRecipes] = useState({});

  // data load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [recipesData, chefsData] = await Promise.all([
          fetch("http://localhost:5000/recipes").then((res) => res.json()),
          fetch("http://localhost:5000/chefs").then((res) => res.json()),
        ]);
        setRecipes(recipesData);
        setChefs(chefsData);
      } catch (error) {
       
      }
    };

    fetchData();
  }, []);

  const data = { recipes, chefs };
  return (
    <div>
      <DataContext.Provider value={data}>{children}</DataContext.Provider>
    </div>
  );
};

export default DataProvider;

/*
const fetchData = async () => {
      try {
        const [apiResponse1, apiResponse2, apiResponse3] = await Promise.all([
          fetch("/data/heroData.json").then((response) => response.json()),
          fetch("/data/jobCategory.json").then((response) => response.json()),
          fetch("/data/jobData.json").then((response) => response.json()),
        ]);
        setHero(apiResponse1);
        setJobCategory(apiResponse2);
        setJobs(apiResponse3);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    */
