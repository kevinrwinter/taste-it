import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/recipelist">Recipes</Link>
        </li>
        <li>
          <Link to="/recipeform">Add new recipe</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
