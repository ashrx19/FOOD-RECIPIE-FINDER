import { useEffect, useState } from "react"

function Home(){

    const [search,setSearch] = useState("")
    // const [recipes,setRecipes] = useState([{id:1,name:"Ashwin"},{id:2, name:"kishan"}])
    const [recipies,setRecipies] = useState([])

    useEffect(()=>{
        const getRecipies= async()=>{
            const response = (await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"))
            const data = await response.json()
            setRecipies(data.meals)
        }
        console.log("Fetched")
        getRecipies()
        
    },[])

    return(
        <>
        <h1>Home</h1>
        <input type="text" placeholder="Search for recipe" onChange={(e)=>{setSearch(e.target.value)}}></input>
        <h1>{search}</h1>
        <>{recipies.map((recipie) => (<h2 key={recipie.idMeal}>{recipie.strMeal}</h2>))}</>
        </>
    )
}

export default Home