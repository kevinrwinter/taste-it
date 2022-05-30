import React from "react";
import { useLocation } from "react-router-dom";

const RecipeSingle = () => {
  const location = useLocation();
  const recipe = location.state.data;
  const country = location.state.country;

  return (
    <div className="recipe-single">
      <h1>{recipe.title}</h1>
      <div className="recipe-container">
        <div className="left-side">
          <div className="image-container">
            <img className="recipe-single-img" src={recipe.img} alt={recipe.title} />
            <img className="recipe-single-flag" src={country.flag} alt={country.name} />
          </div>
          <h2>Ingredients</h2>
          <div className="ingredients">
            {recipe.ingredients.map((ingredient) => {
              return (
                <div className="ingredient-row" key={ingredient.id}>
                  <div className="ingredient-quantity">{ingredient.quantity} – </div>
                  <div className="ingredient-name"> {ingredient.ingredientName}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="right-side">
          <p className="byline">by {recipe.author}</p>
          <p>{recipe.description}</p>
          <h2>Instructions</h2>
          <p>{recipe.method}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeSingle;
