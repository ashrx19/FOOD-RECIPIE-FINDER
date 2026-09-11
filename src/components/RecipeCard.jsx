import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";
import { useNavigate } from "react-router-dom";



  

function RecipeCard({recipe}) {

  const navigate=useNavigate()

  const handleClick =()=>{
  navigate(`/recipe/${recipe.idMeal}`)
  }

  return (<>
  
   <div className = "RecipeCard"  onClick={handleClick}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} width="200" />
        <h2>{recipe.strMeal}</h2>
        <p>{recipe.strCategory}</p>

    </div>
  

  </>);
}

export default RecipeCard;