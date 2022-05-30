import React, { useState, useEffect } from "react";
import axios from "axios";

const RecipeForm = () => {
  const [data, setData] = useState({
    title: "",
    author: "",
    description: "",
    country_code: "",
    img: "",
    ingredients: [],
    method: "",
  });

  const [ingredients, setIngredients] = useState([{ id: 1, ingredientName: "", quantity: "" }]);

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const changeIngredientsData = (e, i) => {
    const { name, value } = e.target;
    const ingredientsList = [...ingredients];
    ingredientsList[i][name] = value;
    setIngredients(ingredientsList);
    setData({ ...data, ingredients: ingredients });
  };

  const changeCountry = (e) => {
    const correctCountry = countries.find((c) => c.name === e.target.value);
    setData({ ...data, country_code: correctCountry.alpha2Code });
  };

  const addMore = (e) => {
    e.preventDefault();
    const newIngredient = { id: ingredients.length + 1, ingredientName: "", quantity: "" };
    setIngredients([...ingredients, newIngredient]);
  };

  const submitData = (e) => {
    axios.post("http://localhost:3001/recipes", data);
  };

  return (
    <form className="recipe-form" onSubmit={submitData}>
      <h1>Add new recipe</h1>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" onChange={changeData} />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" onChange={changeData} />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea type="text" name="description" id="description" onChange={changeData} />
      </div>
      <div>
        <label htmlFor="countryCode">Recipe is from</label>
        <select name="country_code" id="countryCode" onChange={changeCountry}>
          {countries.map((c) => (
            <option key={c.name}>{c.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="img">Image URL</label>
        <input type="url" name="img" id="img" onChange={changeData} />
      </div>
      <p>Ingredients</p>
      {ingredients.map((_, i) => {
        return (
          <div className="ingredient-inputs" key={i}>
            <div className="ingredient-input-quantity">
              <label htmlFor="quantity">Quantity</label>
              <input type="text" name="quantity" id="quantity" onChange={(e) => changeIngredientsData(e, i)} />
            </div>
            <div className="ingredient-input-name">
              <label htmlFor="ingredient-name">Ingredient</label>
              <input
                type="text"
                name="ingredientName"
                id="ingredient-name"
                onChange={(e) => changeIngredientsData(e, i)}
              />
            </div>
          </div>
        );
      })}
      <button className="btn-new-ingredient" onClick={addMore}>
        Add more
      </button>
      <div>
        <label htmlFor="method">Method</label>
        <textarea type="text" name="method" id="method" onChange={changeData} />
      </div>
      <input id="btn-new-recipe" type="submit" value="Add recipe" />
    </form>
  );
};

export default RecipeForm;
