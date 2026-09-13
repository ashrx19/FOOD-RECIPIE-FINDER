import express from "express"

const app = express();
const PORT =5000;

app.use(express.json())

app.get("/api/recipes",(req,res)=>{
    res.json({
        "message": "Recipes fetched successfully",
        "recipes": []
    })
})


app.listen(PORT);