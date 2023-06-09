import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/router/Router";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

/*
get single recipe by id:  http://localhost:3000/recipe/2
get all recipe : http://localhost:3000/recipes
get all recipe : http://localhost:3000

chefs:
get all chefs : http://localhost:3000/chefs
get single chef by id recipe : http://localhost:3000/chef/1
get chef all recipes : http://localhost:3000/chef/recipes/id
*/
