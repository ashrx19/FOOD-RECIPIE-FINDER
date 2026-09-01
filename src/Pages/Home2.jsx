import { useState,useEffect } from "react";

function Home2(){

    const[search,setSearch] = useState("Enter the Recipie Name")
    const[recipies,setRecipies] = useState([])

    useEffect(()=>{
        const getRecipie = async ()=>{

            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const data = await response.json()
            setRecipies( data.meals || [] )
        }
        getRecipie()
    }, [search])
    
    return(<>
    <h1>Home</h1>

    <input type="text" placeholder={search} onChange={(e)=>{setSearch(e.target.value) }}/>
    <>
        {recipies.map((r)=>(<h1>{r.strMeal}</h1>))}
    </>
    
    </>)
}

export default Home2