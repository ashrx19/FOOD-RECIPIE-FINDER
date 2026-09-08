import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
    const { id } = useParams();
    const [recipie, setRecipie] = useState(null);

    useEffect(() => {
        const getRecipie = async () => {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            );

            const data = await response.json();
            setRecipie(data.meals?.[0] || null);
        };

        getRecipie();
    }, [id]);

    if (!recipie) {
        return <h1>Loading...</h1>;
    }

    // Create ingredients array
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = recipie[`strIngredient${i}`];
        const measure = recipie[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== "") {
            ingredients.push({
                ingredient,
                measure
            });
        }
    }

    return (
        <div className="RecipeDetails">
            <h1>{recipie.strMeal}</h1>

            <img
                src={recipie.strMealThumb}
                alt={recipie.strMeal}
                width="400"
            />

            <h2>Basic Information</h2>

            <p>
                <strong>Category:</strong> {recipie.strCategory}
            </p>

            <p>
                <strong>Area:</strong> {recipie.strArea}
            </p>

            <p>
                <strong>Tags:</strong>{" "}
                {recipie.strTags || "No tags available"}
            </p>

            <h2>Ingredients</h2>




            <ul>
                {ingredients.map((item, index) => (
                    <li key={index}>
                        {item.measure} {item.ingredient}
                    </li>
                ))}
            </ul>

            <h2>Instructions</h2>

            <p>{recipie.strInstructions}</p>

            {recipie.strYoutube && (
                <>
                    <h2>Watch Video</h2>

                    <a
                        href={recipie.strYoutube}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Watch Recipe on YouTube
                    </a>
                </>
            )}
        </div>
    );
}

export default RecipeDetails;