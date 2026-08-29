import { use, useEffect,useState } from "react";

function Home(){

    const[search,setSearch] = useState("SEARCH")
    const[recipies,setRecipies] = useState([])

    useEffect(()=>{
        const getRecipies = async()=>{
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            console.log(response)
            const data = await response.json()
            console.log(data.meals)
            setRecipies(data.meals || [])

        }
        console.log("Fetched")
        getRecipies()
    },[search])

    return(
        <>
            <h1>Home</h1>
            <input className="Search" type="text" placeholder={search} onChange={(e)=>{setSearch(e.target.value)}}></input>
            {/* <h1>{search}</h1> */}

            <>
            {recipies.length===0?(
                <h1>NOT FOUND </h1>
            ):(
                recipies.map((r)=>(
                    <div key={r.idMeal}><h2>{r.strMeal}</h2></div>)))

            }





            {/* {
                 recipies.map((r)=>(<div key={r.idMeal}><h2>{r.strMeal}</h2></div>))

            }            */}
            </>
        </>


    )


}
export default Home