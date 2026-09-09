import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

function Home() {
    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const getRecipes = async () => {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
            );

            const data = await response.json();

            setRecipes(data.meals || []);
        };

        getRecipes();
    }, [search]);

    return (
        <>
            <h1>Home</h1>

            <input
                className="Search"
                type="text"
                placeholder="Search Recipe"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {recipes.length === 0 ? (
                <h1>No Recipe Found</h1>
            ) : (
                <div className="recipe-container">
                    {recipes.map((recipe) => (
                        <RecipeCard
                            recipe={recipe}
                            key={recipe.idMeal}
                        />
                    ))}
                </div>
            )}
        </>
    );
}

export default Home;