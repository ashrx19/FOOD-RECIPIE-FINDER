import express from "express";
const reciperoutes = express.Router();

reciperoutes.get("/",async(req,res)=>{
    const search = req.query.search;
    if(search==null){
      return res.status(400).json("Enter something for search");
    }
     try{
        const reqapi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const resapi = await reqapi.json()
        res.json(resapi);
      }catch(err){
         res.status(500).json({message: "Failed to fetch recipes"})
      }
})




reciperoutes.post("/",(req,res)=>{
    //const data = req.body;
    res.json({"message":"recived successfully",
        "recipe":req.body,
    })
})
export default reciperoutes;