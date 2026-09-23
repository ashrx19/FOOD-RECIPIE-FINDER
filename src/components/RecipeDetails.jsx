import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Heart } from "lucide-react";

function RecipeDetails() {

    const { id } = useParams();
    console.log(id);

    const[recipe,setRecipe]=useState(null);
    const [fav, setFav] = useState(false);

    
    useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)    .then((res) => res.json())
    .then((data) => {
      setRecipe(data.meals ? data.meals[0] : null);
    });
}, [id]);

    if (!recipe) return <h2>Not found</h2>;

    const handleFav = async () => {

      try {
        if (!fav) {

          // Add favorite
          await axios.post(
            `/api/recipes/fav/${recipe.idMeal}`
          );
          setFav(true);

        } else {

          // Remove favorite
          await axios.delete(
            `/api/recipes/fav/${recipe.idMeal}`
          );
          setFav(false);
        }

      } catch (error) {
        console.log(error);
      }
    };

    
  return (
    <div className="RecipeDetails">
      <h1>{recipe.strMeal}</h1>

      <button className="fav-button" onClick={handleFav}>
        <Heart size={24} fill={fav ? "red" : "none"} color={fav ? "red" : "white"} />
      </button>

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