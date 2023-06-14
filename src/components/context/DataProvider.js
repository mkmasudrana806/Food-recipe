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
          fetch("https://food-recipe-server-side.vercel.app/recipes").then(
            (res) => res.json()
          ),
          fetch("https://food-recipe-server-side.vercel.app/chefs").then(
            (res) => res.json()
          ),
        ]);
        setRecipes(recipesData);
        setChefs(chefsData);
      } catch (error) {}
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
