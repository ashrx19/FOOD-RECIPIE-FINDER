import Home from './Pages/Home'
import Home2 from './Pages/Home2'
import './App.css'
import RecipieCard from './components/RecipeCard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home2/>}/>
      {/* <Route path="/" element={<Home/>}/> */}
      {/* <Route path="/recipe/:id" element={<RecipeDetails />} /> */}
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
