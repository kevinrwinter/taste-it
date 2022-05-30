import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import Home from "./pages/Home";
import RecipeList from "./pages/RecipeList";
import RecipeForm from "./pages/RecipeForm";
import RecipeSingle from "./pages/RecipeSingle";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <h1>
          <Link to="/">TasteIt</Link>
        </h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="/add_recipe">Add new recipe</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes" element={<RecipeList />} />
        <Route path="add_recipe" element={<RecipeForm />} />
        <Route path="recipes/:single" element={<RecipeSingle />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
