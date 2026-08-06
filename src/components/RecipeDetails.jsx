function RecipeDetails() {
  return (<>
  <h1>recipie

  </h1>
   <img src={recipie.strMealThumb} alt={recipie.strMeal} width="200" />
        <h2>{recipie.strMeal}</h2>
        <p>{recipie.strCategory}</p>
  </>);
}

export default RecipeDetails;