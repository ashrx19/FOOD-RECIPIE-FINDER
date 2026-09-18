import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

function Home() {
    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const getRecipes = async () => {
            const response = await fetch(`http://localhost:5000/api/recipes?search=${search}`);

            const data = await response.json();

            setRecipes(data.meals || []);
        };

        getRecipes();
    }, [search]);

    return (
        <>
            <h1>Home</h1>

            <div className="search-container">
            
            <input
                className="Search"
                type="text"
                placeholder="Search Recipe"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            </div>

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