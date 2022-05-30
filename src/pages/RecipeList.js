import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";

const RecipeList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState(recipes);

  const handleSearch = (e) => {
    const result = recipes.filter((recipe) => {
      const recipeTitle = recipe.title.toLowerCase();
      const searchterm = e.target.value.toLowerCase();

      if (recipeTitle.includes(searchterm)) {
        return recipe;
      } else {
        return "";
      }
    });

    setFiltered(result);
  };

  const getRecipes = () => axios.get("http://localhost:3001/recipes");
  const getCountries = () => axios.get("https://restcountries.com/v2/all");

  useEffect(() => {
    setIsLoading(true);
    Promise.all([getRecipes(), getCountries()]).then(function (results) {
      const recipesData = results[0];
      const countriesData = results[1];

      setRecipes(recipesData.data);
      setCountries(countriesData.data);
      setFiltered(recipesData.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading recipes...</p>;
  }

  return (
    <div>
      <form className="search-form">
        <label htmlFor="search">Search by recipe name:</label>
        <input type="text" name="search" onChange={handleSearch} />
      </form>

      <div className="recipes-list">
        {filtered.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            data={recipe}
            country={countries.find((country) => country.alpha2Code === recipe.country_code)}
            {...recipe}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
