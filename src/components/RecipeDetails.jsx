import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {

    const { id } = useParams();
    console.log(id);

    const[recipe,setRecipe]=useState(null);
    
    useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)    .then((res) => res.json())
    .then((data) => {
      setRecipe(data.meals ? data.meals[0] : null);
    });
}, [id]);

    if (!recipe) return <h2>Not found</h2>;

    
  return (
    <div className="RecipeDetails">
      <h1>{recipe.strMeal}</h1>

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        width="400"
      />

      <h2>Category</h2>
      <p>{recipe.strCategory}</p>

      <h2>Area</h2>
      <p>{recipe.strArea}</p>

      <h2>Instructions</h2>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}

export default RecipeDetails;