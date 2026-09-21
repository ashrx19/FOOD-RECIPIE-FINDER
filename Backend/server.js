import express from "express"
import reciperoutes from "./routes/recipeRoutes.js";
import cors from "cors";

const app = express();
const PORT =5000;
app.use(cors());

app.use(express.json())

app.get("/",(req,res)=>{
    res.json("Recipie finder backend")
})

app.use("/api/recipes",reciperoutes)

app.listen(PORT ,()=>{
    console.log(`Server running on http://localhost:${PORT}`);

});

