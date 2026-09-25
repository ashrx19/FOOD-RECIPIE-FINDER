import express, { json } from "express";
const favRoutes = express.Router();

let favRecipesId =["53254"]

favRoutes.get("/",(req,res)=>{
    res.json(favRecipesId);
})

favRoutes.post("/:id",async(req,res)=>{
    const newRecipeId = req.params.id;
    // console.log(search)
    if(favRecipesId.includes(newRecipeId)){
        console.log("Already includes")
        return res.send("Already exists");
    }else{
        favRecipesId.push(newRecipeId);
        
    }
    console.log(favRecipesId);
})
favRoutes.delete("/:id",async(req,res)=>{
    const newRecipeId = req.params.id;
    // console.log(search)
    if(!favRecipesId.includes(newRecipeId)){
        console.log("Not includes")
    }else{
        favRecipesId = favRecipesId.filter(id => id !== newRecipeId);
    }
    console.log(favRecipesId);
})

export default favRoutes;