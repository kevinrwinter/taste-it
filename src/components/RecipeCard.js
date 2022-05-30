import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ title, description, img, data, country }) => {
  return (
    <div className="recipe-card">
      <div className="img-container">
        <img className="recipe-card-img" src={img} alt={title} />
        <div className="recipe-card-flag">
          <img src={country.flag} alt={country.name} />
        </div>
      </div>
      <div className="recipe-card-content">
        <h2>{title}</h2>
        <p>{description.substring(0, 100)}...</p>
        <div>
          <Link to={title} state={{ data: data, country: country }}>
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
