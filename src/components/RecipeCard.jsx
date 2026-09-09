import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function RecipeCard({recipe}) {
  
  return (<>
  


   <div className = "RecipeCard"  >
        <img src={recipe.strMealThumb} alt={recipe.strMeal} width="200" />
        <h2>{recipe.strMeal}</h2>
        <p>{recipe.strCategory}</p>

    </div>
  

  </>);
}

export default RecipeCard;