import React from "react";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="homecards-container">
        <HomeCard
          title="Browse recipes"
          text="Find your favourite recipes from this collection. You can search from the recipes list here."
          pageLink="All recipes"
          page="/recipes"
        />
        <HomeCard
          title="Add recipes"
          text="Something missing from the list? You can add recipes from any country to the list here"
          pageLink="Add recipes"
          page="/add_recipe"
        />
        <div className="home-card">
          <p className="home-card-title">Want to know more about our projects?</p>
          <p className="home-card-text">Visit our programme homepage</p>
          <a href="https://en.bc.fi/" target="_blank" rel="noreferrer">
            Business College Helsinki homepage
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
