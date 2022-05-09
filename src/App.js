import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";

// const RouterWrapper = (props) => {
//   const params = useParams();
//   return <RecipeSingle params={params} {...props} />;
// };

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipelist" element={<RecipeList />} />
          <Route path="recipeform" element={<RecipeForm />} />
          {/* <Route path="recipelist/:recipesingle" element={<RouterWrapper />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
