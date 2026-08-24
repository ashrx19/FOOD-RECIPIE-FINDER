import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function RecipeDetails() {
  const {id} = useParams();
  const [recipie,setRecipie]= useState(null);


  useEffect(()=>{
    const getRecipie = async()=>{
    const response = (await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`))
    const data = await response.json();
    setRecipie(data.meals?.[0] || null);
    }

    getRecipie();
  },[id])



  


    if (recipie === null) {
        return <h1>Loading...</h1>;
    }

  return (<>
  <h1>recipie  </h1>

   <div className = "RecipieCard"  >
        <img src={recipie.strMealThumb} alt={recipie.strMeal} width="200" />
        <h2>{recipie.strMeal}</h2>
        <p>{recipie.strCategory}</p>

    </div>
  </>);
}

export default RecipeDetails;