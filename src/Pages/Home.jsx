import { useEffect, useState } from "react"
import RecipieCard from "../components/RecipeCard"
import RecipeDetails from '../components/RecipeDetails';


function Home() {

    const [search, setSearch] = useState("")
    // const [recipes,setRecipes] = useState([{id:1,name:"Ashwin"},{id:2, name:"kishan"}])
    const [recipies, setRecipies] = useState([])

    

    useEffect(() => {
        const getRecipies = async () => {

            const response = (await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`))
            const data = await response.json()
            setRecipies(data.meals || [])
        }
        console.log("Fetched")
        getRecipies()

    }, [search])


    return (
        <>
            <h1>Home</h1>
            <input className="Search" type="text" placeholder={search} onChange={(e) => { setSearch(e.target.value) }}></input>

            <>
                {recipies.length === 0 ? (
                    <h1>No Recipe Found</h1>
                ) : (
                    recipies.map((recipie) => (
                        <RecipieCard  recipie={recipie} key={recipie.idMeal} >
                        </RecipieCard>
                    ))
                )}
            </>        </>
    )
}

export default Home