import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {

    const { id } = useParams();
    console.log(id);

    const[recipe,setRecipe]=useState(null);
    
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
        .then((res)=>{res.json})
        .then((data)=>{console.log(data)
             setRecipe[data]})
    },[id]);

    if (!recipie) return <h2>Loading...</h2>;

    
  return (
    <div className="RecipeDetails">
      <h1>{recipie.strMeal}</h1>

      <img
        src={recipie.strMealThumb}
        alt={recipie.strMeal}
        width="400"
      />

      <h2>Category</h2>
      <p>{recipie.strCategory}</p>

      <h2>Area</h2>
      <p>{recipie.strArea}</p>

      <h2>Instructions</h2>
      <p>{recipie.strInstructions}</p>
    </div>
  );
}

export default RecipeDetails;