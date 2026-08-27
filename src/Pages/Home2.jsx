import { useEffect,useState } from "react";

function Home(){

    const[search,setSearch] = useState("")
    const[recipies,setRecipies] = useState([])
    return(
        <>
            <h1>Home</h1>
            <input className="Search" type="text" placeholder="Search" onChange={(e)=>{setSearch(e.target.value)}}></input>
            <h1>{search}</h1>
        </>
    )


}
export default Home