import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h2>TasteIT</h2>
          <p>TasteIt is a recipe app made in in REACT22K group React lessons</p>
          <Link to="/recipes">Browse recipes</Link>
        </div>
      </div>
      <div className="home-cards-title">
        <h3 className="home-title">Looking for the recipes?</h3>
      </div>
    </>
  );
}
