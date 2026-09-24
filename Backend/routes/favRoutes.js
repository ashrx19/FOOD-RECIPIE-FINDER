import express from "express";
const favRoutes = express.Router();

const favRecipeId =[]

favRoutes.post("/:id",async(req,res)=>{
    const search = req.params.id;
    console.log(search)
    
    
    favRecipeId[]
})

export default favRoutes;